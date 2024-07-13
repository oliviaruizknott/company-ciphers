import { useState } from "react";

const shapes = ["circle", "quarter", "square"];

const Bit = ({ bit, index }) => {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    if (bit !== "1") return;
    setRotation((prevRotation) => prevRotation + 90);
  };

  return (
    <img
      key={`${bit}-${index}`}
      className={`Bit bit${bit}`}
      onClick={handleClick}
      src={`./${shapes[parseInt(bit)]}.svg`}
      alt={bit}
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
};

export default Bit;
