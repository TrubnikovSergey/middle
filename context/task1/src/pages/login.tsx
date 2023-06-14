import { Link, useNavigate } from "react-router-dom";
import Card from "../components/card";
import React from "react";
import "./login.css";
import { useAuthContext } from "../components/authProvider";

const Login = () => {
  const auth = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login();
    navigate("/");
  };

  return (
    <Card>
      <div className="login-content">
        <form className="form-login" onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">login</button>
        </form>
      </div>
    </Card>
  );
};

export default Login;
