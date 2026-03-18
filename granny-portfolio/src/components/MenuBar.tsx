import { useState, useEffect } from "react";

export default function MenuBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  const menuItems = ["File", "Edit", "View", "Go", "Window", "Help"];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "22px",
        background: "linear-gradient(to bottom, #ffffff 0%, #e6e6e6 100%)",
        borderBottom: "1px solid #888",
        boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 12px",
        fontFamily: '"Lucida Grande", "San Francisco", Arial, sans-serif',
        fontSize: "13px",
        color: "#000",
        zIndex: 10000,
        userSelect: "none",
      }}
    >
      {/* logo and menus */}
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <span
          style={{
            fontWeight: "bold",
            cursor: "pointer",
            textShadow: "0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          DB
        </span>
        {menuItems.map((item) => (
          <span
            key={item}
            style={{
              cursor: "pointer",
              textShadow: "0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* status and time */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          textShadow: "0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        <span style={{ cursor: "default" }}>
          {Math.floor(Math.random() * 100)}%
        </span>
        <span style={{ cursor: "default" }}>{time}</span>
      </div>
    </div>
  );
}
