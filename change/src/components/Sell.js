import React from "react";
import "./Style.css";
import { useState, useEffect } from "react";

export function Sell() {
  const [value, setValue] = useState(1);
  const [select, setSelect] = useState("usd");
  const [result, setResult] = useState(0);
  function res() {
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ils.json",
      { method: "GET" }
    ).then((res) =>
      res.json().then((data) => {
        const ils = data.ils;
        for (var k in ils) {
          if (select === k) {
            setResult((value / ils[k]) * 0.99);
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
      <h1>Sell </h1>

      <form>
        <select onChange={(e) => setSelect(e.target.value)}>
          <option>usd</option>
          <option>eur</option>
        </select>
        <span> to ils</span>
        <br />

        <input
          type="number"
          placeholder="0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <br></br>
        <h3>{result.toFixed(2)}</h3>
      </form>
    </div>
  );
}
