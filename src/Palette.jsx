import useStore from "./store";
import Circle from "./shapes/Circle";
import Quarter from "./shapes/Quarter";
import Square from "./shapes/Square";
import { COLORS } from "./colors";

const SIZE = 40;

const Palette = () => {
  const [shapeColors, setShapeColors] = useStore((state) => [
    state.shapeColors,
    state.setShapeColors,
  ]);

  const incrementColorAtIndex = (index) => {
    const newColors = [...shapeColors];
    newColors[index] = newColors[index] + 1;
    if (newColors[index] >= COLORS.length) newColors[index] = 0;
    setShapeColors(newColors);
  };

  return (
    <div className="Palette">
      <Circle
        color={COLORS[shapeColors[0]]}
        size={SIZE}
        onClick={() => incrementColorAtIndex(0)}
      />
      <Quarter
        color={COLORS[shapeColors[1]]}
        size={SIZE}
        onClick={() => incrementColorAtIndex(1)}
      />
      <Square
        color={COLORS[shapeColors[2]]}
        size={SIZE}
        onClick={() => incrementColorAtIndex(2)}
      />
    </div>
  );
};

export default Palette;
