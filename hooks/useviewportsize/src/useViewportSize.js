import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";
import { useEffect } from "react";

const useViewportSize = () => {
  const [size, setSize] = useState({ height: 0, width: 0 });
  const resizeInnerSize = (e) => {
    setSize({ width: e.target.innerWidth, height: e.target.innerHeight });
  };

  useWindowEvent("resize", resizeInnerSize);

  return size;
};

export default useViewportSize;
