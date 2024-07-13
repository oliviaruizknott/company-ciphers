import { useState } from "react";
import Circle from "./shapes/Circle";
import Quarter from "./shapes/Quarter";
import Square from "./shapes/Square";
import { COLORS } from "./colors";
import useStore from "./store";

const shapes = [Circle, Quarter, Square];

const Bit = ({ bit, index }) => {
  const shapeColors = useStore((state) => state.shapeColors);
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    if (bit !== "1") return;
    setRotation((prevRotation) => prevRotation + 90);
  };

  const Shape = shapes[parseInt(bit)];

  return (
    <Shape
      key={`${bit}-${index}`}
      className={`Bit bit${bit}`}
      color={COLORS[shapeColors[bit]]}
      onClick={handleClick}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default Bit;
