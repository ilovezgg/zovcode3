import React from "react";
import z from "./MainContacts.module.css";
import { ReactComponent as TelegramIcon } from "./img/icons8-телеграм (1).svg";
import { ReactComponent as WhatsIcon } from "./img/icons8-whatsapp (2).svg";
import { ReactComponent as GmailIcon } from "./img/icons8-почта.svg";
import {ReactComponent as DocumentsIcon} from "./img/document-add-svgrepo-com (1).svg"
import {ReactComponent as PhoneIcon} from "./img/phone-outgoing-svgrepo-com (1).svg"
import {ReactComponent as MailIcon} from "./img/email-svgrepo-com (1).svg"
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
              <div className={z.bigContainerOne}>
                <div className={z.timeContainerOne}>
                  <div className={z.upTime}>
                    <div className={z.timeTitle}>Воскресенье</div>
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
            <div className={z.containerForInfoTwo}>
              <div className={z.documentsIcon}>
             <DocumentsIcon className={z.docIcon}/>
              </div>
              <div className={z.documents}>
               <div className={z.inn}>
ИНН 531300377926
               </div>
               <div className={z.ogrn}>
ОГРН 315533100001310
               </div>
               <div className={z.adress}>
174510, Новгородская область, г. Пестово, Устюженское шоссе, 4
               </div>
               <div className={z.ip}>
ИП Долгачёв И.А.
               </div>
               <div className={z.schet}>
Р/счет 40802810501090000458
               </div>
              </div>
            </div>
            <div className={z.containerForPhones}>
<div className={z.phoneNumberOne}>
             <div className={z.number}>
8 (921) 730-24-66
             </div>
              <PhoneIcon className={z.phoneIcon}/>
            </div>
            <div className={z.phoneNumberTwo}>
<div className={z.number}>
8 (8162) 90-24-66
             </div>
             <PhoneIcon className={z.phoneIcon}/>
            </div>
            </div>
            <div className={z.containerForMail}>
            <div className={z.mail}>
           <div className={z.mailAdress}>
            srub-dom53@yandex.ru
           </div>
           <MailIcon className={z.mailIcon}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContacts;
