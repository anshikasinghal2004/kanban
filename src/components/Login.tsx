import { useState } from "react";

interface Props {
  onLogin: () => void;
}

const Login = ({ onLogin }: Props) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (!username.trim()) return;
    localStorage.setItem("user", username);
    onLogin();
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-200">
      <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome 👋
        </h2>

        <input
          className="border w-full p-3 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full p-3 rounded-xl transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
