import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState();

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseover", () => {
        setHovered(true);
      });
      ref.current.addEventListener("mouseout", () => {
        setHovered(false);
      });
    }
  }, [ref]);

  return { hovered, ref };
};

export default useHover;
