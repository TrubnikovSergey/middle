import "./buttonField.css";

interface ButtonFieldProps {
  title: string;
  type: string;
}

const ButtonField = ({ title, type }: ButtonFieldProps) => {
  return (
    <div className="battonWrapper">
      <button className="buttonField" type={type}>
        {title}
      </button>
    </div>
  );
};

export default ButtonField;
