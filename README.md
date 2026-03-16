# aqua-os-portfolio-2026

A personal portfolio site built to look and feel like a classic macOS Aqua desktop. Each project is presented as an app icon on the dock - clicking one opens a draggable, resizable window that displays either a live demo or a project details page. You may clone this repository; however, you may NOT reupload it and pass it off as your own.

Built with React, TypeScript, and Vite.

---

## Preview

> A desktop-style portfolio inspired by the macOS Aqua interface (circa 2001–2007). Open apps, drag windows, maximize, minimize — all in the browser.

---

## Tech Stack

- [React](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Vite](https://vitejs.dev/) — build tool and dev server
- [react-rnd](https://github.com/bokuweb/react-rnd) — draggable and resizable windows
- [framer-motion](https://www.framer.com/motion/) — window animations
- [Tailwind CSS](https://tailwindcss.com/) — utility styling

---

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v20.19 or higher (required by Vite 8)
- npm (comes with Node)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/GranulatedCheese/aqua-os-portfolio-2026.git

# 2. Navigate into the project
cd granny-portfolio

# 3. Install dependencies
npm install --legacy-peer-deps

# 4. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

> **Note:** At the time of development, the `--legacy-peer-deps` flag is required because `@tailwindcss/vite` has not yet added peer dependency support for Vite 8.

---

## Building for Production

```bash
npm run build
```

Output will be in the `/dist` folder. This is a fully static site — no server required. Deploy the contents of `/dist` anywhere (Netlify, Vercel, GitHub Pages, etc.).

---

## Adding a New Project

Adding a project takes two steps and requires no changes to any UI code.

**1. Create your project content file in `src/projects/`:**

```tsx
// src/projects/MyProject.tsx
export default function MyProject() {
  return (
    <div>
      <h1>My Project</h1>
      <p>Project details or a live demo go here.</p>
    </div>
  )
}
```

**2. Add an entry to `src/config/projects.tsx`:**

```tsx
import MyProject from '../projects/MyProject'

{
  id: 'my-project',
  title: 'My Project',
  icon: '/src/assets/icons/myproject.png',
  content: <MyProject />
}
```

That's it. The dock and window system should pick it up automatically. There are no size limitations for the icons; however, using high-resolution images with lots of detail may come out looking a bit funky. Also, icon shape is determined by the image

---

## Project Structure

```
src/
  assets/           — icons, wallpaper, fonts
  components/
    Window.tsx      — draggable/resizable Aqua window shell
    WindowManager.tsx — manages open windows and focus state
    Dock.tsx        — bottom dock with app icons
  projects/         — individual project content components
  config/
    projects.tsx    — add new projects here
  types.ts          — shared TypeScript interfaces
  App.tsx           — root component, owns all window state
  main.tsx          — entry point
  index.css         — global styles and Tailwind import
```

---

## License

MIT
