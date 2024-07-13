import * as React from "react";
const Square = ({ size = 80, color, onClick = null, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    width={size}
    height={size}
    fill="none"
    onClick={onClick}
    {...props}
  >
    <rect
      width={78}
      height={78}
      x={1}
      y={1}
      fill={color || "#000"}
      stroke="#fff"
      strokeWidth={2}
      rx={7}
    />
  </svg>
);
export default Square;
