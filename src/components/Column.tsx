import type { ColumnType } from "../types/types";
import { useBoard } from "../context/BoardContext";
import TaskCard from "./TaskCard";

interface Props {
  title: string;
  column: ColumnType;
}

const Column = ({ title, column }: Props) => {
  const { tasks, moveTask } = useBoard();

  const filteredTasks = tasks.filter((task) => task.column === column);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("id");
    moveTask(id, column);
  };

  const columnColors = {
    todo: "bg-blue-300",
    inprogress: "bg-orange-300",
    done: "bg-green-300",
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className={`${columnColors[column]} rounded-2xl p-6 shadow-2xl min-h-[450px]`}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        {title} ({filteredTasks.length})
      </h2>

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Column;
