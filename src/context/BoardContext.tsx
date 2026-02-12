import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Task, ColumnType } from "../types/types";
import { mockApiCall } from "../api/mockApi";

interface BoardContextType {
  tasks: Task[];
  addTask: (title: string) => Promise<void>;
  moveTask: (id: string, column: ColumnType) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  error: string | null;
  clearError: () => void;
}

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const BoardProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const clearError = () => setError(null);

  const addTask = async (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      column: "todo",
    };

    const previous = [...tasks];
    setTasks([...tasks, newTask]);

    try {
      await mockApiCall();
    } catch {
      setTasks(previous);
      setError("Failed to add task.");
    }
  };

  const moveTask = async (id: string, column: ColumnType) => {
    const previous = [...tasks];

    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, column } : task)),
    );

    try {
      await mockApiCall();
    } catch {
      setTasks(previous);
      setError("Failed to move task.");
    }
  };

  const deleteTask = async (id: string) => {
    const previous = [...tasks];

    setTasks(tasks.filter((task) => task.id !== id));

    try {
      await mockApiCall();
    } catch {
      setTasks(previous);
      setError("Failed to delete task.");
    }
  };

  return (
    <BoardContext.Provider
      value={{ tasks, addTask, moveTask, deleteTask, error, clearError }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoard must be used within BoardProvider");
  }
  return context;
};
