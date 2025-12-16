import React from "react";
import z from "./Header.module.css";

const Header = () => {
  return (
    <div className={z.mainHeaderBackground}>
      <div className={z.mainHeader}>

        <div className={z.blackCube}>
          <div className={z.cubeTitle}>
            Дом — это не проект.<br />
            Это жизнь.
          </div>
          <div className={z.cubeSubtitle}>
            Мы строим пространства,<br />
            в которых рождаются истории.
          </div>
          <a href="/catalog" className={z.cubeButton}>
            Выбрать свой проект
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;