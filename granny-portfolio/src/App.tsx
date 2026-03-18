import WindowManager from "./components/WindowManager";
import { useState } from "react";
import type { OpenWindow } from "./types";
import Dock from "./components/Dock";
import backgroundImage from "./assets/images/background_image.jpg";
import MenuBar from "./components/MenuBar";

function App() {
  const [windows, setWindows] = useState<OpenWindow[]>([]);
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const openWindow = (window: OpenWindow) => {
    const existing = windows.find((w) => w.id === window.id);
    if (existing) {
      if (existing.isMinimized) {
        setWindows((prev) =>
          prev.map((w) =>
            w.id === window.id ? { ...w, isMinimized: false } : w,
          ),
        );
      }
      setFocusedId(window.id);
      return;
    }
    setWindows((prev) => [...prev, window]);
    setFocusedId(window.id);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    if (focusedId === id) setFocusedId(null);
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)),
    );
  };

  const maximizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w,
      ),
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <MenuBar />
      <WindowManager
        windows={windows}
        focusedId={focusedId}
        onFocus={setFocusedId}
        onClose={closeWindow}
        onMinimize={minimizeWindow}
        onMaximize={maximizeWindow}
      />
      <Dock onOpen={openWindow} />
    </div>
  );
}

export default App;
