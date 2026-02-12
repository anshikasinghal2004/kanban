A modern, responsive Kanban board built with React + TypeScript + Tailwind CSS, demonstrating Optimistic UI updates, state rollback handling, and clean architecture.

Features:
 Mock Authentication
 Simple login screen
 Accepts any non-empty username
 Login persists using localStorage
 User remains logged in after page refresh

 Kanban Board
  3 Columns:
   To Do
   In Progress
   Done
 Add new tasks
 Drag & Drop between columns
 Delete tasks
 Task count indicator per column
 Fully responsive layout
 Colorful modern UI with gradients

 All task actions:
  Add
  Move
  Delete
Update the UI instantly before the mock API responds.

For each action:

Store previous state:
const previous = [...tasks];

Update UI immediately:
setTasks(updatedTasks);

Call mock API:
await mockApiCall();

On failure:
setTasks(previous);
setError("Action failed");

Project Structure

src/
 ├── api/
 │     └── mockApi.ts
 ├── components/
 │     ├── Board.tsx
 │     ├── Column.tsx
 │     ├── TaskCard.tsx
 │     ├── Login.tsx
 │     └── Toast.tsx
 ├── context/
 │     └── BoardContext.tsx
 ├── types/
 │     └── types.ts
 ├── App.tsx
 └── main.tsx

Deplyment Link:
https://kanban-chi-ecru.vercel.app/
