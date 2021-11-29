import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [colors, setColors] = useState("");
  const [hex, setHex] = useState(new Values("#f1f5f8").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newColor = new Values(colors).all(10);
      setHex(newColor);
      setColors("");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setError(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <>
      <section className=" section container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            id="color"
            type="text"
            placeholder="#f1f5f8"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
            className={error && "error"}
          />
          <button className="btn" type="submit">
            submit
          </button>
          {error && <p className="form-error">Enter a valid hex value</p>}
        </form>
      </section>
      <section className="colors">
        {hex.map((color, index) => {
          return (
            <SingleColor key={index} {...color} hex={color.hex} index={index} />
          );
        })}
      </section>
    </>
  );
}

export default App;
