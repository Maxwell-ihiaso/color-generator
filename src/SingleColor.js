import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [copy, setCopy] = useState(false);

  const hexValue = `#${hex}`;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCopy(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, [copy]);

  return (
    <article
      onClick={() => {
        setCopy(true);
        navigator.clipboard.writeText(hexValue);
      }}
      className={`color  ${index > 10 && "color-light"}`}
      style={{ backgroundColor: hexValue }}
    >
      <h3 className="percent-value">{weight}%</h3>
      <p className="color-value">{hexValue}</p>
      {copy && <p>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
