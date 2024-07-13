import { useState } from "react";
import useStore from "./store";

const Palette = () => {
  const [shapeColors, setShapeColors] = useStore((state) => [
    state.shapeColors,
    state.setShapeColors,
  ]);

  return (
    <div className="Palette">
      <img src="./circle.svg" alt="circle" />
      <img src="./quarter.svg" alt="quarter" />
      <img src="./square.svg" alt="square" />
    </div>
  );
};

export default Palette;
