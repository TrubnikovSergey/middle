import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="wrapperCard">{children}</div>;
};

export default Card;
