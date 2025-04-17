import React, { useState } from "react";
import style from "./PhoneInput.module.css";

const PhoneInput = () => {
  const [mask, setMask] = useState("+7 900 000 00 00");
  const [cursorPosition, setCursorPosition] = useState(9.9);
  const [phoneValue, setPhoneValue] = useState(""); 
  const [label, setLabel] = useState(false);

  const handlePhone = (event) => {
    let result = event.target.value.replace(/\D/g, "");
    if (result.length === 0) {
      setCursorPosition(11);
    }
    if (result.length > 0) {
      setMask(`+7 9${result[0]}0 000 00 00`);
      setCursorPosition(11);
    }
    if (result.length > 1) {
      setMask(`+7 9${result.slice(0, 2)} 000 00 00`);
      setCursorPosition(12.7);
    }
    if (result.length > 2) {
      setMask(`+7 9${result.slice(0, 2)} ${result[2]}00 00 00`);
      setCursorPosition(14.5);
    }
    if (result.length > 3) {
      setMask(`+7 9${result.slice(0, 2)} ${result.slice(2, 4)}0 00 00`);
      setCursorPosition(16.3);
    }
    if (result.length > 4) {
      setMask(`+7 9${result.slice(0, 2)} ${result.slice(2, 5)} 00 00`);
      setCursorPosition(19.3);
    }
    if (result.length > 5) {
      setMask(
        `+7 9${result.slice(0, 2)} ${result.slice(2, 5)} ${result[5]}0 00`
      );
      setCursorPosition(21.2);
    }
    if (result.length > 6) {
      setMask(
        `+7 9${result.slice(0, 2)} ${result.slice(2, 5)} ${result.slice(
          5,
          7
        )} 00`
      );
      setCursorPosition(23.8);
    }
    if (result.length > 7) {
      setMask(
        `+7 9${result.slice(0, 2)} ${result.slice(2, 5)} ${result.slice(
          5,
          7
        )} ${result[7]}0`
      );
      setCursorPosition(25.8);
    }
    if (result.length > 8) {
      setMask(
        `+7 9${result.slice(0, 2)} ${result.slice(2, 5)} ${result.slice(
          5,
          7
        )} ${result.slice(7, 9)}`
      );
      setCursorPosition(10000);
    }
    if (result.length === 0) {
      setMask(`+7 900 000 00 00`);
      setCursorPosition(5.2);
    }

    event.target.value = result.slice(0, 9);

    setPhoneValue("phone", result.slice(0, 9));
  };
  return (
<label className={style.phone} htmlFor="phone" onClick={() => setLabel(true)}>
      {mask}
      <input
        id="phones"
        className={style.phones}
        type="text"
        onChange={handlePhone}
      />
      <span
        className={label ? style.cursor : style.cursorHidden}
        style={{ left: `${cursorPosition * 10}px` }}
      />
    </label>
  );
};

export default PhoneInput;
