import React, { useState } from "react";
import z from "./CallUs.module.css"; // Замените на путь к вашему файлу стилей

const CallUsForm = () => {
  const [phone, setPhone] = useState("");
  const [placeholder, setPlaceholder] = useState("+7 000 000 00 00");

  // Обработчик изменения номера телефона
  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Удаляем все нецифровые символы
    let formattedPhone = input.slice(0, 11); // Ограничиваем длину номера 11 цифрами

    // Формируем placeholder
    let newPlaceholder = "+7 000 000 00 00".split("");
    for (let i = 0; i < formattedPhone.length; i++) {
      if (i < 1) continue; // Пропускаем +7
      if (newPlaceholder[3 + i - 1] === " ") continue; // Пропускаем пробелы
      newPlaceholder[3 + i - 1] = formattedPhone[i]; // Заменяем 0 на введенную цифру
    }
    setPlaceholder(newPlaceholder.join(""));

    // Форматируем номер телефона для отображения
    let displayedPhone = "+7 ";
    if (formattedPhone.length > 1) {
      displayedPhone +=
        formattedPhone.slice(1, 4) +
        " " +
        formattedPhone.slice(4, 7) +
        " " +
        formattedPhone.slice(7, 9) +
        " " +
        formattedPhone.slice(9, 11);
    }
    setPhone(displayedPhone.trim());
  };

  return (
    <div className={z.callUsBackground}>
      <div className={z.callUsMain}>
        <div className={z.callUsLeft}>
          <div className={z.titleCallUs}></div>
          <div className={z.textCallUs}></div>
        </div>
        <div className={z.callUsRight}>
          <form className={z.formNumber}>
            <div className={z.inputContainer}>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                className={z.formInput}
              />
              <div className={z.placeholder}>
                {placeholder.split("").map((char, index) => (
                  <span
                    key={index}
                    style={{
                      visibility:
                        phone.length > index && char !== " " ? "hidden" : "visible",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallUsForm;