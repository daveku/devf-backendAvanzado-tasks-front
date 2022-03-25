import React, { useState } from "react";
import TaskList from "./scenes/TaskList";
import "./App.css";
import AuthView from "./scenes/AuthView";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        {token ? <TaskList token={token} /> : <AuthView setToken={setToken} />}
      </header>
    </div>
  );
}

export default App;
