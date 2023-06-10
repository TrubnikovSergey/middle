import { useRef } from "react";
import ButtonField from "./buttonField";
import InputField from "./inputField";
import IconAt from "./iconAt";

interface SubmitData {
  name: string;
  nik: string;
  email: string;
  sex: string;
  password: string;
  repitPassword: string;
}

interface SignUpProps {
  submit: (data: SubmitData) => void;
}

const SignUp = ({ submit }: SignUpProps) => {
  const submitDataRef = useRef({ name: "", nik: "", email: "", sex: "male", password: "", repitPassword: "" });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(submitDataRef.current);
  };

  const handleChange: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    if (e.target instanceof HTMLInputElement) {
      const { name, value } = e.target;

      submitDataRef.current = { ...submitDataRef.current, [name]: value };
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <InputField name="name" label="Имя" placeholder="Введите имя" />
          <InputField name="nik" label="Your email" placeholder="Your email" icon={<IconAt size="0.9rem" />} />
          <InputField name="email" label="Email" type="email" placeholder="Введите почту" />
          <InputField name="sex" label="Пол" type="radio" radioTitle={["male", "female"]} placeholder="Введите пол" />
          <InputField name="password" label="Пароль" placeholder="Введите пароль" />
          <InputField name="repitPassword" label="Повторить пароль" placeholder="Повторите ввод пароля" />
          <ButtonField title="Зарегистрироваться" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
