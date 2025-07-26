import React from "react";
import z from "./MainContacts.module.css";
const MainContacts = () => {
  return (
    <div className={z.main}>
      <div className={z.contactsMain}>
        <div className={z.imagesTitle}>Свяжитесь с нами:</div>
        <div className={z.allInfo}>
          <div className={z.workingTime}>
            <div className={z.containerForInfo}>

            </div>
          </div>
          <div className={z.socialMedia}>
            <div className={z.icons}>
<div className={z.whats}>
            <div className={z.icon}>

            </div>
            </div>
            <div className={z.tg}>
<div className={z.iconTwo}>

            </div>
            </div>
            </div>
          </div>
          <div className={z.contactInfo}>
            <div className={z.containerForInfo}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContacts;
