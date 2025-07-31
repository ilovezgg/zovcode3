import React from "react";
import z from "./MainContacts.module.css";
import { ReactComponent as TelegramIcon } from "./img/icons8-телеграм (1).svg";
import { ReactComponent as WhatsIcon } from "./img/icons8-whatsapp (2).svg";
import { ReactComponent as GmailIcon } from "./img/icons8-почта.svg";

const MainContacts = () => {
  return (
    <div className={z.main}>
      <div className={z.contactsMain}>
        <div className={z.imagesTitle}>Свяжитесь с нами:</div>
        <div className={z.allInfo}>
          <div className={z.workingTime}>
            <div className={z.containerForInfo}>
              <div className={z.bigContainer}>
                <div className={z.timeContainer}>
                  <div className={z.upTime}>
                    <div className={z.timeTitle}>Понедельник</div>
                  </div>
                  <div className={z.bottomTime}>
                    <div className={z.iconTime}></div>
                    <div className={z.timeSubTitle}>9:00 - 18:00</div>
                  </div>
                </div>
                <div className={z.timeContainer}>
                  <div className={z.upTime}>
                    <div className={z.timeTitle}>Вторник</div>
                  </div>
                  <div className={z.bottomTime}>
                    <div className={z.iconTime}></div>
                    <div className={z.timeSubTitle}>9:00 - 18:00</div>
                  </div>
                </div>
              </div>
               <div className={z.bigContainer}>
                <div className={z.timeContainer}>
                  <div className={z.upTime}>
                    <div className={z.timeTitle}>Среда</div>
                  </div>
                  <div className={z.bottomTime}>
                    <div className={z.iconTime}></div>
                    <div className={z.timeSubTitle}>9:00 - 18:00</div>
                  </div>
                </div>
                <div className={z.timeContainer}>
                  <div className={z.upTime}>
                    <div className={z.timeTitle}>Четверг</div>
                  </div>
                  <div className={z.bottomTime}>
                    <div className={z.iconTime}></div>
                    <div className={z.timeSubTitle}>9:00 - 18:00</div>
                  </div>
                </div>
              </div>
               <div className={z.bigContainer}>
                <div className={z.timeContainer}>
                  <div className={z.upTime}>
                    <div className={z.timeTitle}>Пятница</div>
                  </div>
                  <div className={z.bottomTime}>
                    <div className={z.iconTime}></div>
                    <div className={z.timeSubTitle}>9:00 - 18:00</div>
                  </div>
                </div>
                <div className={z.timeContainer}>
                  <div className={z.upTime}>
                    <div className={z.timeTitle}>Суббота</div>
                  </div>
                  <div className={z.bottomTime}>
                    <div className={z.iconTime}></div>
                    <div className={z.timeSubTitle}>9:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={z.socialMedia}>
            <div className={z.icons}>
              <button className={z.tg}>
                <TelegramIcon className={z.icon} />
              </button>
              <button className={z.whats}>
                <WhatsIcon className={z.icon} />
              </button>
              <button className={z.gmail}>
                <GmailIcon className={z.icon} />
              </button>
            </div>
          </div>
          <div className={z.contactInfo}>
            <div classNa me={z.containerForInfo}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContacts;
