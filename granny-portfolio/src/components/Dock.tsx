import { useState } from "react";
import projects from "../config/projects";
import type { OpenWindow } from "../types";

interface DockProps {
  onOpen: (Window: OpenWindow) => void;
}

export default function Dock({ onOpen }: DockProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "12px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "flex-end",
        gap: "12px",
        padding: "10px 28px",
        borderRadius: "20px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.45)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      {projects.map((project) => {
        const isHovered = hoveredId === project.id;
        return (
          <div
            key={project.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* tooltip */}
            <div
              style={{
                position: "absolute",
                bottom: "calc(100% + 10px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(30,30,30,0.85)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                fontSize: "11px",
                fontFamily: 'Geneva, "Lucida Grande", sans-serif',
                fontWeight: 500,
                padding: "3px 10px",
                borderRadius: "6px",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.15s ease",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {project.title}
            </div>

            {/* project icon */}
            <div
              onClick={() =>
                onOpen({
                  id: project.id,
                  title: project.title,
                  content: project.content,
                })
              }
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                width: isHovered ? "68px" : "56px",
                height: isHovered ? "68px" : "56px",
                cursor: "pointer",
                transition:
                  "width 0.15s ease, height 0.15s ease, transform 0.15s ease",
                transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                filter: isHovered
                  ? "drop-shadow(0 8px 16px rgba(0,0,0,0.4))"
                  : "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
              }}
            >
              <img
                src={project.icon}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "14px",
                }}
              />
            </div>

            {/* little active dot */}
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.8)",
                marginTop: "4px",
                opacity: 1,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
