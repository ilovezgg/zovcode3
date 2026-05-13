import React, { useState } from "react";
import style from "./PhoneInput.module.css";

const PhoneInput = () => {
  const [value, setValue] = useState("");

  const formatPhone = (input) => {
    const digits = input.replace(/\D/g, "").slice(0, 10);
    let result = "+7 ";
    
    if (digits.length > 0) result += digits.slice(0, 3);
    if (digits.length > 3) result += " " + digits.slice(3, 6);
    if (digits.length > 6) result += " " + digits.slice(6, 8);
    if (digits.length > 8) result += " " + digits.slice(8, 10);
    
    return result;
  };

  const handleChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setValue(formatted);
  };

  return (
    <input
      type="tel"
      className={style.phone}
      placeholder="+7 900 000 00 00"
      value={value}
      onChange={handleChange}
      maxLength={16}
    />
  );
};

export default PhoneInput;