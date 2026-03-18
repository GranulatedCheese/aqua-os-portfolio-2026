import { useState } from "react";
import { motion } from "framer-motion";
import { Rnd } from "react-rnd";
import type { WindowProps } from "../types";

export default function Window({
  title,
  children,
  isFocused,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  isMinimized,
  isMaximized,
}: WindowProps) {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 600, height: 400 });

  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  const targetX = screenWidth / 2;
  const targetY = screenHeight;

  const currentCenterX = pos.x + size.width / 2;
  const currentCenterY = pos.y + size.height / 2;

  const deltaX = targetX - currentCenterX;
  const deltaY = targetY - currentCenterY;

  const gelButtonBase = {
    width: 14,
    height: 14,
    borderRadius: "50%",
    cursor: "pointer",
    position: "relative" as const,
    zIndex: 9999,
    pointerEvents: "all" as const,
    boxShadow:
      "inset 0px 2px 4px rgba(255,255,255,0.8), inset 0px -2px 4px rgba(0,0,0,0.4), 0px 1px 2px rgba(0,0,0,0.3)",
  };

  return (
    <Rnd
      default={{ x: 100, y: 100, width: 600, height: 400 }}
      minWidth={300}
      minHeight={200}
      dragHandleClassName="window-titlebar"
      bounds="window"
      size={isMaximized ? { width: "100vw", height: "100vh" } : undefined}
      position={isMaximized ? { x: 0, y: 22 } : undefined}
      onDragStop={(_e, d) => setPos({ x: d.x, y: d.y })}
      onResizeStop={(_e, _direction, ref, _delta, position) => {
        setSize({
          width: parseInt(ref.style.width, 10),
          height: parseInt(ref.style.height, 10),
        });
        setPos(position);
      }}
      style={{
        zIndex: 9000,
        pointerEvents: isMinimized ? "none" : "all",
      }}
    >
      <motion.div
        onClick={onFocus}
        initial={{ scaleX: 0.8, scaleY: 0.8, opacity: 0, y: 40, x: 0 }}
        animate={
          isMinimized
            ? {
                scaleX: [1, 0.4, 0.05],
                scaleY: [1, 0.7, 0.05],
                x: [0, deltaX * 0.6, deltaX],
                y: [0, deltaY * 0.4, deltaY],
                opacity: [1, 1, 0],
              }
            : {
                scaleX: 1,
                scaleY: 1,
                x: 0,
                y: 0,
                opacity: 1,
              }
        }
        transition={
          isMinimized
            ? {
                duration: 0.35,
                ease: [0.5, 0, 0.2, 1],
              }
            : {
                type: "spring",
                stiffness: 300,
                damping: 20,
              }
        }
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "6px",
          overflow: "hidden",
          boxShadow: isFocused
            ? "0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.3)"
            : "0 8px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.2)",
          background: "#ececec",
          transformOrigin: "bottom center",
        }}
      >
        {/* title */}
        <div
          className="window-titlebar"
          style={{
            background: isFocused
              ? "linear-gradient(to bottom, #f2f2f2 0%, #e0e0e0 49%, #d4d4d4 51%, #e6e6e6 100%)"
              : "linear-gradient(to bottom, #e8e8e8 0%, #dadada 49%, #d0d0d0 51%, #dfdfdf 100%)",
            padding: "4px 8px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            userSelect: "none",
            borderBottom: "1px solid #777",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.9)",
            height: "28px",
          }}
        >
          {/* traffic light buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            style={{
              ...gelButtonBase,
              background: isFocused
                ? "radial-gradient(circle at 50% 20%, #ff8a84 0%, #ff5f56 40%, #c4181c 100%)"
                : "radial-gradient(circle at 50% 20%, #d4d4d4 0%, #b5b5b5 40%, #999 100%)",
              border: isFocused ? "1px solid #a00000" : "1px solid #888",
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            style={{
              ...gelButtonBase,
              background: isFocused
                ? "radial-gradient(circle at 50% 20%, #ffe17d 0%, #ffbd2e 40%, #d68900 100%)"
                : "radial-gradient(circle at 50% 20%, #d4d4d4 0%, #b5b5b5 40%, #999 100%)",
              border: isFocused ? "1px solid #aa8800" : "1px solid #888",
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMaximize();
            }}
            style={{
              ...gelButtonBase,
              background: isFocused
                ? "radial-gradient(circle at 50% 20%, #8af58a 0%, #27c93f 40%, #008800 100%)"
                : "radial-gradient(circle at 50% 20%, #d4d4d4 0%, #b5b5b5 40%, #999 100%)",
              border: isFocused ? "1px solid #008800" : "1px solid #888",
            }}
          />

          <span
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "13px",
              fontWeight: 500,
              color: isFocused ? "#111" : "#555",
              fontFamily: '"Lucida Grande", Geneva, sans-serif',
              textShadow: "0 1px 0 rgba(255,255,255,0.8)",
              marginLeft: "-40px",
            }}
          >
            {title}
          </span>
        </div>

        {/* content */}
        <div
          style={{
            flex: 1,
            background: "#ffffff",
            overflow: "auto",
            padding: "12px",
            border: "1px solid #a0a0a0",
            borderTop: "none",
            borderBottomRightRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        >
          {children}
        </div>
      </motion.div>
    </Rnd>
  );
}
