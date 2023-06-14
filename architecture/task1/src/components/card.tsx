import React from "react";

interface CardProps {
  children: React.ReactNode;
  withoutWrapp: Boolean;
}

const Card = ({ withoutWrapp = false, children }: CardProps) => {
  const classCard = withoutWrapp ? "wrapperCardWithoutAll" : "wrapperCard";

  return <div className={classCard}>{children}</div>;
};

export default Card;
