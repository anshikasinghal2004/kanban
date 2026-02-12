import type  { Task, ColumnType } from "../types/types";
import { useBoard } from "../context/BoardContext";

interface Props {
  task: Task;
  column: ColumnType;
}

const TaskCard = ({ task, column }: Props) => {
  const { deleteTask } = useBoard();

  const cardColors = {
    todo: "bg-blue-100 border-blue-400",
    inprogress: "bg-orange-100 border-orange-400",
    done: "bg-green-100 border-green-400",
  };

  return (
    <div
      draggable
      onDragStart={(e) => e.dataTransfer.setData("id", task.id)}
      className={`${cardColors[column]} border-l-4 p-4 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-grab`}
    >
      <p className="text-gray-800 font-semibold">{task.title}</p>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 text-sm mt-3 hover:text-red-700 font-medium"
      >
        ❌ Delete
      </button>
    </div>
  );
};

export default TaskCard;
