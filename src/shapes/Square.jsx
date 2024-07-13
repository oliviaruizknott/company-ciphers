import * as React from "react";
const Square = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <rect
      width={78}
      height={78}
      x={1}
      y={1}
      fill="#000"
      stroke="#fff"
      strokeWidth={2}
      rx={7}
    />
  </svg>
);
export default Square;
