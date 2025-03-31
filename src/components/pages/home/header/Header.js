import React from "react";
import z from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <div className={z.mainHeaderBackground}>
        <div className={z.mainHeader}>
          <div className={z.mainHeaderTwo}></div>

          <div className={z.headerTitle}>
            Качественные дома из профилированного бруса. Мы - синоним слову
            "Надежность"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
