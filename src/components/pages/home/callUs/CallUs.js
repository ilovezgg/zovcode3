import React from "react";
import z from "./CallUs.module.css"; // Замените на путь к вашему файлу стилей
import PhoneInput from "./PhoneInput";

const CallUs = () => {
  return (
    <div className={z.callUsBackground}>
      <div className={z.callUsMain}>
        <div className={z.callUsLeft}>
          <div className={z.titleCallUs}>
            {" "}
            Не можете подобрать вариант для себя? Позвоните нам!
          </div>

          <div className={z.textCallUs}>
            Заполните форму и наш менеджер свяжется с вами в ближайшее время, а
            так же поможет с выбором идеального дома для вас и вашей семьи.
          </div>
        </div>
        <div className={z.callUsRight}>
          <div className={z.callUsForms}>
            <PhoneInput />
            <PhoneInput />
          </div>
          <div className={z.callUsButton}>
            <button className={z.callUsSubmit}>Заказать звонок</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
