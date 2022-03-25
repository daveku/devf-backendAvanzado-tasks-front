import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { login } from "../../api";

import "./AuthView.css";

const AuthView = ({ isUser, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const makeLogin = () => {
    login(email, password).then((userData) => {
      setToken(userData.data.token);
    });
  };

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
      <Button onClick={() => makeLogin()}>Iniciar Sesión</Button>
    </div>
  );
};

export default AuthView;
