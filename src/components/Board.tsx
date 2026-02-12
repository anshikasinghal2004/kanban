import { useState } from "react";
import { useBoard } from "../context/BoardContext";
import Column from "./Column";
import Toast from "./Toast";

const Board = () => {
  const { addTask, error, clearError } = useBoard();
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 p-10">
      <h1 className="text-4xl font-extrabold text-white mb-10 drop-shadow-lg">
         Kanban Board
      </h1>

      <div className="flex gap-4 mb-10">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-white text-gray-700 p-3 rounded-xl w-80 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 transition"
          placeholder="Add a new task..."
        />
        <button
          onClick={handleAdd}
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-semibold px-6 py-3 rounded-xl shadow-xl transition transform hover:scale-110"
        >
          ➕ Add Task
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Column title="📝 To Do" column="todo" />
        <Column title="🚧 In Progress" column="inprogress" />
        <Column title="✅ Done" column="done" />
      </div>

      {error && <Toast message={error} clear={clearError} />}
    </div>
  );
};

export default Board;
