"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import styles from "./ConMap.module.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface StateData {
  name: string;
  slug: string;
  conScore: number | null;
  severityLabel: string;
}

interface ConMapProps {
  states: StateData[];
}

function getColor(state: StateData | undefined): string {
  if (!state) return "#1a2a3a";
  const score = state.conScore;
  if (score === null) return "#8a6a1a";
  if (score >= 60) return "#c0392b";
  if (score >= 30) return "#8a6a1a";
  return "#2e6b3e";
}

interface TooltipData {
  name: string;
  conScore: number | null;
  severityLabel: string;
  x: number;
  y: number;
}

export default function ConMap({ states }: ConMapProps) {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  const stateMap = new Map<string, StateData>();
  for (const s of states) {
    stateMap.set(s.name, s);
  }

  const handleMouseEnter = useCallback(
    (geo: { properties: { name: string } }, event: React.MouseEvent) => {
      const state = stateMap.get(geo.properties.name);
      if (!state) return;
      setTooltip({
        name: state.name,
        conScore: state.conScore,
        severityLabel: state.severityLabel,
        x: event.clientX,
        y: event.clientY,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [states]
  );

  const handleMouseMove = useCallback(
    (geo: { properties: { name: string } }, event: React.MouseEvent) => {
      const state = stateMap.get(geo.properties.name);
      if (!state) return;
      setTooltip({
        name: state.name,
        conScore: state.conScore,
        severityLabel: state.severityLabel,
        x: event.clientX,
        y: event.clientY,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [states]
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  const handleClick = useCallback(
    (geo: { properties: { name: string } }) => {
      const state = stateMap.get(geo.properties.name);
      if (state) {
        router.push(`/states/${state.slug}`);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [states, router]
  );

  return (
    <div className={styles.mapContainer}>
      <ComposableMap
        projection="geoAlbersUsa"
        width={960}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName: string = geo.properties.name;
              const state = stateMap.get(stateName);
              const isQualifying = !!state;
              const fill = getColor(state);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="#070b11"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      outline: "none",
                      fill: isQualifying ? brighten(fill) : fill,
                      cursor: isQualifying ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                  onMouseEnter={(event) =>
                    handleMouseEnter(geo, event as unknown as React.MouseEvent)
                  }
                  onMouseMove={(event) =>
                    handleMouseMove(geo, event as unknown as React.MouseEvent)
                  }
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(geo)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div
          className={styles.tooltip}
          style={{ left: tooltip.x + 12, top: tooltip.y - 10 }}
        >
          <div className={styles.tooltipName}>{tooltip.name}</div>
          <div className={styles.tooltipScore}>
            {tooltip.conScore !== null
              ? `Score: ${tooltip.conScore} \u2014 ${tooltip.severityLabel}`
              : tooltip.severityLabel}
          </div>
        </div>
      )}
    </div>
  );
}

function brighten(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const factor = 1.25;
  const clamp = (v: number) => Math.min(255, Math.round(v * factor));
  return `rgb(${clamp(r)}, ${clamp(g)}, ${clamp(b)})`;
}
