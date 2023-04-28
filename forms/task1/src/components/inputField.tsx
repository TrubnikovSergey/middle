import React from "react";
import "./inputField.css";

// interface InputFieldProps {
//   placeholder: string;
//   label: string;
//   description?: string;
//   error?: string;
//   name: string;
//   type: string;
//   icon: React.ReactElement;
// }

const InputField = ({ placeholder = "", label = "", description = "", error = "", name = "", type = "", icon = "" }) => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <p className="label">{label}</p>
          {description && <p className="description">{description}</p>}
          <input className="input" type={type} placeholder={placeholder} name={name} />
        </div>
      </div>
    </>
  );
};

export default InputField;
