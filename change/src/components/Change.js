import React, { useState } from "react";
import "./Style.css";
import { Sell } from "./Sell";
import { Buy } from "./Buy";

export function Change() {
  const [choice, setChoice] = useState(false);

  function SellChoice() {
    setChoice(true);
  }
  function BuyChoice() {
    setChoice(false);
  }
  return (
    <div>
      <button onClick={SellChoice} className="choice">
        Sell
      </button>
      <button onClick={BuyChoice} class="choice">
        Buy
      </button>
      {choice ? <Sell /> : <Buy />}
    </div>
  );
}
