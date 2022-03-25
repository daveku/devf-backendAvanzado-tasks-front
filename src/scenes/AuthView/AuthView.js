import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

import "./AuthView.css";

const AuthView = ({ isUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-view">
      <div className="auth-view__input-container">
        <TextInput
          value={email}
          type="email"
          placeholder="Ingresa tu correo"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          value={password}
          type="password"
          placeholder="Ingresa tu contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={() => isUser(email)}>Iniciar Sesión</Button>
    </div>
  );
};

export default AuthView;
