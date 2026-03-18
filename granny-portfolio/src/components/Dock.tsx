import { useState } from "react";
import projects from "../config/projects";
import type { OpenWindow } from "../types";

interface DockProps {
  onOpen: (Window: OpenWindow) => void;
}

export default function Dock({ onOpen }: DockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "flex-end",
        gap: "4px",
        padding: "0 10px 10px 10px",
        zIndex: 8000,
      }}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "86px",
          background: "rgba(255, 255, 255, 0.4)",
          borderTop: "1px solid rgba(255, 255, 255, 0.8)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
          borderRight: "1px solid rgba(255, 255, 255, 0.5)",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.15)",
          zIndex: 0,
        }}
      />

      {projects.map((project, index) => {
        const isHovered = hoveredIndex === index;
        const distance =
          hoveredIndex !== null ? Math.abs(hoveredIndex - index) : Infinity;

        let iconSize = "64px";
        let yTransform = "translateY(0)";

        if (distance === 0) {
          iconSize = "110px";
          yTransform = "translateY(-10px)";
        } else if (distance === 1) {
          iconSize = "85px";
          yTransform = "translateY(-4px)";
        } else if (distance === 2) {
          iconSize = "70px";
          yTransform = "translateY(0)";
        }

        return (
          <div
            key={project.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* tooltip */}
            <div
              style={{
                position: "absolute",
                bottom: "calc(100% + 15px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(to bottom, #fff 0%, #f0f0f0 100%)",
                color: "#000",
                fontSize: "12px",
                fontFamily: '"Lucida Grande", Geneva, sans-serif',
                fontWeight: 400,
                padding: "4px 12px",
                borderRadius: "12px",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.2s ease",
                border: "1px solid #999",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              {project.title}
            </div>

            {/* project icon */}
            <div
              onClick={() => {
                if (project.url) {
                  window.open(project.url, "_blank", "noopener,noreferrer");
                } else {
                  onOpen({
                    id: project.id,
                    title: project.title,
                    content: project.content,
                  });
                }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              style={{
                width: iconSize,
                height: iconSize,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)",
                transform: yTransform,
                transformOrigin: "bottom center",
              }}
            >
              <img
                src={project.icon}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter:
                    distance < 2
                      ? "drop-shadow(0 10px 10px rgba(0,0,0,0.4))"
                      : "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
                }}
              />
            </div>

            {/* little active dot */}
            <div
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.6)",
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
