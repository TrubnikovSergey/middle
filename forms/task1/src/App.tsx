import React, { useState } from "react";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import "./App.css";

interface SubmitDataSignUp {
  name: string;
  nik: string;
  email: string;
  sex: string;
  password: string;
  repitPassword: string;
}

function App() {
  const [toggle, setToggle] = useState(true);

  const signInSubmit = (email: string, password: string) => {
    console.log("signInSubmit\n", { email, password });
  };
  const signUpSubmit = (data: SubmitDataSignUp) => {
    console.log("signUpSubmit\n", data);
  };

  return (
    <div className="appwrapper">
      <div className="appcontainer">
        {toggle ? <SignUp submit={signUpSubmit} /> : <SignIn submit={signInSubmit} />}
        <a className="link" href="#" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? "Зарегистрироваться" : "Уже есть аккаунт"}
        </a>
      </div>
    </div>
  );
}

export default App;
