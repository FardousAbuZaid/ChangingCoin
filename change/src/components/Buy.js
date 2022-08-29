import React from "react";
import "./Style.css";
import { useState, useEffect } from "react";

export function Buy() {
  const [value, setValue] = useState(1);
  const [result, setResult] = useState(0);
  const [select, setSelect] = useState("usd");

  function res() {
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ils.json",
      { method: "GET" }
    ).then((res) =>
      res.json().then((data) => {
        const ils = data.ils;
        for (var k in ils) {
          if (select === k) {
            setResult((value / ils[k]) * 1.01);
          }
        }
      })
    );
  }

  useEffect(() => {
    res();
  }, [value, select]);

  return (
    <div>
      <h1>Buy</h1>

      <select onChange={(e) => setSelect(e.target.value)}>
        <option>usd</option>
        <option>eur</option>
      </select>
      <span>to ils</span>
      <br />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <h3>{result.toFixed(4)}</h3>
    </div>
  );
}
