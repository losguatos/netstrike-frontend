# 📁 React Component Folder Structure (NetStrike)

This document explains the standard folder structure for React components in the **NetStrike** frontend repository. By following this structure, we ensure consistency, scalability, and maintainability in our project.

## [Example Component](../packages/nextjs/components/ExampleComponent/ExampleComponent.tsx)

## 📂 Folder Structure

Each component should be placed inside its own folder under `nextjs/components/`, following this pattern:

- 📂 ExampleComponent/
  - 📂 SubComponent
  - 📄 index.ts
  - 📄 ExampleComponent.tsx
  - 📄 ExampleComponent.types.ts
  - 📄 ExampleComponent.styles.ts

### 📜 **File Explanations**

- | `index.ts` | Barrel file to re-export the component for cleaner imports. |
- | `ExampleComponent.tsx` | The main React component file. |
- | `ExampleComponent.types.ts` | TypeScript interfaces and types for the component props. |
- | `ExampleComponent.styles.ts` | Tailwind-based styles using `clsx` to keep JSX clean. |
- | `SubComponent` | In case there is a sub component only needed for the parent, put it inside the parents folder |

---

## 🎨 **Tailwind Styling with `clsx`**

To maintain a **clean JSX structure**, all Tailwind class names are stored in `ExampleComponent.styles.ts` using `clsx`.

# 📁 Page Folder Structure (NetStrike)

We can follow the same structure for pages as well. Each page should be placed inside its own folder under `nextjs/app/`, following this pattern:

- 📂 ExampleComponent/
  - 📂 SubComponent
  - 📄 page.ts
  - 📄 page.styles.tsx
