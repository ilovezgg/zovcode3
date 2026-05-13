import React, { useState } from "react";
import z from "./CallUs.module.css";
import PhoneInput from "./PhoneInput";

const CallUs = () => {
  const [name, setName] = useState("");

  return (
    <section className={z.callUsBackground}>
      <div className={z.container}>
        <div className={z.callUsMain}>
          <div className={z.left}>
            <h2 className={z.title}>
              Остались вопросы?
            </h2>
            <p className={z.text}>
              Оставьте заявку. Перезвоним за 15 минут и подберем проект под ваш бюджет.
            </p>
          </div>
          
          <div className={z.right}>
            <div className={z.form}>
              <input
                type="text"
                className={z.input}
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <PhoneInput />
              <button className={z.submit}>
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallUs;