"use client";

import { useState, useCallback, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { useRouter } from "next/navigation";
import styles from "./ConMap.module.css";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface StateInfo {
  name: string;
  slug: string;
  abbr: string;
  fips: string;
  conScore: number | null;
  severityLabel: string;
}

interface ConMapProps {
  states: StateInfo[];
}

function getScoreColor(score: number | null): string {
  if (score === null) return "#8a6a1a";
  if (score >= 80) return "#c0392b";
  if (score >= 60) return "#c0392b";
  if (score >= 30) return "#8a6a1a";
  return "#2e6b3e";
}

export default function ConMap({ states }: ConMapProps) {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<{
    name: string;
    score: number | null;
    label: string;
    x: number;
    y: number;
  } | null>(null);

  const statesByFips = useMemo(
    () => new Map(states.map((s) => [s.fips, s])),
    [states]
  );

  const handleClick = useCallback(
    (geo: { id: string }) => {
      const state = statesByFips.get(geo.id);
      if (state) {
        router.push(`/states/${state.slug}`);
      }
    },
    [statesByFips, router]
  );

  return (
    <div className={styles.wrapper}>
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        className={styles.map}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const fips = geo.id;
              const state = statesByFips.get(fips);
              const isQualifying = !!state;
              const fill = isQualifying
                ? getScoreColor(state.conScore)
                : "#141b24";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="rgba(248,245,239,0.15)"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      outline: "none",
                      fill: isQualifying ? fill : "#141b24",
                      opacity: isQualifying ? 0.8 : 1,
                      cursor: isQualifying ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                  onClick={() => handleClick(geo)}
                  onMouseEnter={(evt) => {
                    if (state) {
                      const rect = (
                        evt.currentTarget.closest("svg") as SVGSVGElement
                      )?.getBoundingClientRect();
                      setTooltip({
                        name: state.name,
                        score: state.conScore,
                        label: state.severityLabel,
                        x: evt.clientX - (rect?.left ?? 0),
                        y: evt.clientY - (rect?.top ?? 0) - 60,
                      });
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
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <span className={styles.tooltipName}>{tooltip.name}</span>
          <span className={styles.tooltipScore}>
            {tooltip.score !== null ? tooltip.score : "N/A"} &mdash;{" "}
            {tooltip.label}
          </span>
        </div>
      )}
    </div>
  );
}
