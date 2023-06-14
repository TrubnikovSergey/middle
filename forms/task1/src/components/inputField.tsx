import React from "react";
import "./inputField.css";

interface IconProps {
  size: string;
}

interface InputFieldProps {
  placeholder: string;
  label: string;
  description?: string;
  error?: string;
  name: string;
  value?: string;
  type?: string;
  icon?: null | React.ReactNode;
  radioTitle?: string[];
}

const InputField = ({ placeholder = "", label = "", description = "", error = "", name = "", type = "text", icon = null, value = "", radioTitle = [""] }: InputFieldProps) => {
  return (
    <div className="inputFieldWrapper">
      <p className="label">{label}</p>
      {description && <p className="description">{description}</p>}
      {type === "radio" ? (
        radioTitle.map((item: string, idx: number) => (
          <label key={`${item}${String(idx)}`}>
            <input className="inputRadio" type={type} name={name} value={item} defaultChecked={idx === 0} />
            <span className="labelRadio">{item}</span>
          </label>
        ))
      ) : (
        <div className="inputWrapper">
          {icon}
          <input className="input" type={type} placeholder={placeholder} name={name} />
        </div>
      )}
    </div>
  );
};

export default InputField;
