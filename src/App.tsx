import { useState } from "react";
import Login from "./components/Login";
import Board from "./components/Board";
import { BoardProvider } from "./context/BoardContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("user")),
  );

  return (
    <BoardProvider>
      {loggedIn ? <Board /> : <Login onLogin={() => setLoggedIn(true)} />}
    </BoardProvider>
  );
}

export default App;
