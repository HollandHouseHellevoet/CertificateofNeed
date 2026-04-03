"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import styles from "./ConMap.module.css";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface ConState {
  name: string;
  slug: string;
  score: number | null;
}

function getScoreColor(score: number | null): string {
  if (score === null) return "#8a6a1a";
  if (score >= 80) return "#c0392b";
  if (score >= 60) return "#c0392b";
  if (score >= 30) return "#8a6a1a";
  return "#2e6b3e";
}

function getSeverityLabel(score: number | null): string {
  if (score === null) return "Moderate";
  if (score >= 80) return "Most Restrictive";
  if (score >= 60) return "Highly Restrictive";
  if (score >= 30) return "Moderate";
  return "Low";
}

export default function ConMap({ states }: { states: ConState[] }) {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<{
    name: string;
    score: number | null;
    x: number;
    y: number;
  } | null>(null);

  const stateMap = new Map(states.map((s) => [s.name, s]));

  const handleClick = useCallback(
    (stateName: string) => {
      const state = stateMap.get(stateName);
      if (state) {
        router.push(`/states/${state.slug}`);
      }
    },
    [stateMap, router]
  );

  return (
    <div className={styles.mapContainer}>
      <ComposableMap
        projection="geoAlbersUsa"
        width={960}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name as string;
              const state = stateMap.get(name);
              const isQualifying = !!state;
              const fillColor = isQualifying
                ? getScoreColor(state.score)
                : "#141b24";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColor}
                  stroke="#070b11"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      outline: "none",
                      fill: isQualifying ? `${fillColor}cc` : "#141b24",
                      cursor: isQualifying ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                  onClick={() => handleClick(name)}
                  onMouseEnter={(evt: React.MouseEvent) => {
                    if (isQualifying) {
                      setTooltip({
                        name,
                        score: state.score,
                        x: evt.clientX,
                        y: evt.clientY,
                      });
                    }
                  }}
                  onMouseMove={(evt: React.MouseEvent) => {
                    if (isQualifying) {
                      setTooltip((prev) =>
                        prev
                          ? { ...prev, x: evt.clientX, y: evt.clientY }
                          : null
                      );
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div
          className={styles.tooltip}
          style={{ left: tooltip.x + 12, top: tooltip.y - 40 }}
        >
          <div className={styles.tooltipName}>{tooltip.name}</div>
          <div className={styles.tooltipScore}>
            {tooltip.score !== null ? `Score: ${tooltip.score}` : "Score: N/A"}{" "}
            &middot; {getSeverityLabel(tooltip.score)}
          </div>
        </div>
      )}
    </div>
  );
}
