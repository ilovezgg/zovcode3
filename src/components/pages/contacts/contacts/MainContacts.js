import React from "react";
import z from "./MainContacts.module.css";
const MainContacts = () => {
  return (
    <div className={z.main}>
      <div className={z.contactsMain}>
        <div className={z.imagesTitle}>Свяжитесь с нами:</div>
        <div className={z.allInfo}>
          <div className={z.workingTime}></div>
          <div className={z.socialMedia}></div>
          <div className={z.contactInfo}></div>
        </div>
      </div>
    </div>
  );
};

export default MainContacts;
