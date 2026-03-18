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
  return (
    <Rnd
      default={{ x: 100, y: 100, width: 600, height: 400 }}
      minWidth={300}
      minHeight={200}
      dragHandleClassName="window-titlebar"
      bounds="window"
      size={isMaximized ? { width: "100vw", height: "100vh" } : undefined}
      position={isMaximized ? { x: 0, y: 0 } : undefined}
      style={{
        zIndex: isFocused ? 10 : 1,
        pointerEvents: isMinimized ? "none" : "all", // add this
      }}
    >
      <motion.div
        onClick={onFocus}
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={
          isMinimized
            ? { scale: 0.2, opacity: 0, y: 600 }
            : { scale: 1, opacity: 1, y: 0 }
        }
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: isFocused
            ? "0 22px 70px rgba(0,0,0,0.5)"
            : "0 8px 24px rgba(0,0,0,0.3)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {/* Title bar */}
        <div
          className="window-titlebar"
          style={{
            background: isFocused
              ? "linear-gradient(180deg, #bebebe 0%, #9a9a9a 50%, #8a8a8a 51%, #b0b0b0 100%)"
              : "linear-gradient(180deg, #d8d8d8 0%, #c0c0c0 100%)",
            padding: "6px 10px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            userSelect: "none",
          }}
        >
          {/* Traffic lights */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            style={{
              width: 13,
              height: 13,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 40% 35%, #ff7e7e, #cc0000)",
              border: "1px solid #a00000",
              cursor: "pointer",
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("minimize clicked");
              onMinimize();
            }}
            style={{
              width: 13,
              height: 13,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 40% 35%, #ffe97e, #ccaa00)",
              border: "1px solid #aa8800",
              cursor: "pointer",
              position: "relative",
              zIndex: 9999,
              pointerEvents: "all",
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("maximize clicked");
              onMaximize();
            }}
            style={{
              width: 13,
              height: 13,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 40% 35%, #7eff7e, #00aa00)",
              border: "1px solid #008800",
              cursor: "pointer",
              position: "relative",
              zIndex: 9999,
              pointerEvents: "all",
            }}
          />

          <span
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "13px",
              fontWeight: "bold",
              color: isFocused ? "#1a1a1a" : "#666",
              fontFamily: 'Geneva, "Lucida Grande", sans-serif',
              marginLeft: "-39px",
            }}
          >
            {title}
          </span>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            background: "rgba(236, 236, 236, 0.92)",
            backdropFilter: "blur(12px)",
            overflow: "auto",
            padding: "12px",
          }}
        >
          {children}
        </div>
      </motion.div>
    </Rnd>
  );
}
