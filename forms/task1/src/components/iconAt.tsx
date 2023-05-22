import "./iconAt.css";

interface IconAtProps {
  size: string;
}

const IconAt = ({ size }: IconAtProps) => {
  return (
    <div className="wrapperIcon">
      <span className="charAt" style={{ fontSize: `${size}` }}>
        @
      </span>
    </div>
  );
};

export default IconAt;
