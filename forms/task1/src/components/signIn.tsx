import { useRef } from "react";
import ButtonField from "./buttonField";
import InputField from "./inputField";
import "./signIn.css";

interface SignInProps {
  submit: (email: string, password: string) => void;
}

const SignIn = ({ submit }: SignInProps) => {
  const dataRef = useRef({ email: "", password: "" });
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (dataRef.current) {
      const { email, password } = dataRef.current;
      submit(email, password);
    }
  };

  const handleChange: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    if (e.target instanceof HTMLInputElement) {
      const { name, value } = e.target;

      dataRef.current = { ...dataRef.current, [name]: value };
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <InputField name="email" label="Email" type="email" placeholder="Введите email" />
          <InputField name="password" label="Пароль" type="password" placeholder="Введите пароль" />
          <ButtonField type={"submit"} title="Вход" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
