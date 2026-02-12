import { useEffect } from "react";

interface Props {
  message: string;
  clear: () => void;
}

const Toast = ({ message, clear }: Props) => {
  useEffect(() => {
    const timer = setTimeout(clear, 3000);
    return () => clearTimeout(timer);
  }, [clear]);

  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  );
};

export default Toast;
