import { useState } from "react";
import "./App.css";
import { TRINARY } from "./letterLookup";
import Bit from "./Bit";
import Palette from "./Palette";

function App() {
  const [letters, setLetters] = useState("");

  // an in put that takes exactly 3 characters
  const renderInput = () => {
    return (
      <input
        type="text"
        maxLength={3}
        onChange={(e) => {
          if (e.target.value.length > 3) {
            e.target.value = e.target.value.slice(0, 3);
          }
          // don’t allow anything but letters
          if (!/^[a-zA-Z]*$/.test(e.target.value)) {
            e.target.value = e.target.value.slice(0, -1);
          }
          setLetters(e.target.value);
        }}
        placeholder="XXX"
      />
    );
  };

  const renderLetters = () => {
    // add class "bordered" if letters is 3 characters long
    const bordered = letters.length === 3 ? "bordered" : "";

    return (
      <div className={`letters ${bordered}`}>
        {letters.split("").map((letter, i) => renderLetter(letter, i))}
      </div>
    );
  };

  const renderLetter = (letter, i) => {
    const bits = TRINARY[letter.toLowerCase()];
    return (
      <div key={`${letter}-${i}`} className="letter">
        {bits.split("").map((bit, j) => {
          return <Bit key={`${bit}-${j}`} bit={bit} index={j} />;
        })}
      </div>
    );
  };

  const renderShapes = () => {
    return (
      <div className="shapes-palette">
        <img src="./circle.svg" alt="circle" />
        <img src="./quarter.svg" alt="quarter" />
        <img src="./square.svg" alt="square" />
      </div>
    );
  };

  return (
    <div className="App">
      {renderInput()}
      {renderLetters()}
      {/* <Palette /> */}
    </div>
  );
}

export default App;
