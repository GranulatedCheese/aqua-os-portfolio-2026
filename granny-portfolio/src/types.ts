export interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isFocused: boolean;
  isMinimized?: boolean;
  isMaximized?: boolean;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
}

export interface OpenWindow {
  id: string;
  title: string;
  content: React.ReactNode;
  isMinimized?: boolean;
  isMaximized?: boolean;
}

export interface Project {
  id: string;
  title: string;
  icon: string; // path to icon image in assets
  content: React.ReactNode;
}
