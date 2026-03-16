import Window from "./Window";
import type { OpenWindow } from "../types";

interface WindowManagerProps {
  windows: OpenWindow[];
  focusedId: string | null;
  onFocus: (id: string) => void;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
}

export default function WindowManager({
  windows,
  focusedId,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
}: WindowManagerProps) {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {windows.map((win) => (
        <Window
          key={win.id}
          id={win.id}
          title={win.title}
          isFocused={focusedId === win.id}
          isMinimized={win.isMinimized}
          isMaximized={win.isMaximized}
          onFocus={() => onFocus(win.id)}
          onClose={() => onClose(win.id)}
          onMinimize={() => onMinimize(win.id)}
          onMaximize={() => onMaximize(win.id)}
        >
          {win.content}
        </Window>
      ))}
    </div>
  );
}
