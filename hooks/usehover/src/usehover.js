import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState();

  function mouseOver() {
    setHovered(true);
  }
  function mouseOut() {
    setHovered(false);
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseover", mouseOver);
      ref.current.addEventListener("mouseout", mouseOut);

      return () => {
        ref.current.removeEventListener("mouseover", mouseOver);
        ref.current.removeEventListener("mouseout", mouseOut);
      };
    }
  }, [ref]);

  return { hovered, ref };
};

export default useHover;
