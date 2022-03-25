import React, { useState } from "react";
import TaskList from "./scenes/TaskList";
import "./App.css";
import AuthView from "./scenes/AuthView";

function App() {
  const [isUser, setIsUser] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        {isUser ? (
          <TaskList isUser={isUser} />
        ) : (
          <AuthView isUser={setIsUser} />
        )}
      </header>
    </div>
  );
}

export default App;
