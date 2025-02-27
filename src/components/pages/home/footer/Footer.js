import React from "react";
import { useInView } from "react-intersection-observer";
import z from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  return (
    <div>
      <div className={z.footerBackground}>
        <div className={z.footerMain}>
          <div className={z.footLeft}>
            <div className={z.urls}>
            <Link to="/" className={z.mainPageUrl}>Главная</Link>
    <Link to="/contacts" className={z.contactsPageUrl}>Контакты</Link>
    <Link to="/catalog" className={z.catalogPageUrl}>Каталог</Link>
    <Link to="/we" className={z.aboutUsPageUrl}>О нас</Link>
    <Link to="/callback" className={z.callbackPageUrl}>Личный кабинет</Link>
            </div>
            <div className={z.infoFooter}>
              <div className={z.socialMedia}>
               <div className={z.titleMedia}>
                Наши соцсети:
               </div>
               <div className={z.icons}>
               <div className={z.telegram}>

</div>
<div className={z.whatsapp}>

</div>
               </div>
              </div>
              <div className={z.adress}>
              174510, Новгородская область, г. Пестово, Устюженское шоссе, 4
              </div>
              <div className={z.email}>
              srub-dom53@yandex.ru
              </div>
              <div className={z.phoneNumber1}>
              8 (921) 730-24-66
              </div>
              <div className={z.phoneNumber2}>
              8 (8162) 90-24-66
              </div>
            </div>
          </div>
          <div className={z.footRight}>
            <div ref={ref} className={`${z.map} ${inView ? z.mapVisible : ""}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1235.942109715081!2d35.826432435720555!3d58.602274552658024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b07eabb7e823f9%3A0x58240d369c1a79a1!2z0KPRgdGC0Y7QttC10L3RgdC60L7QtSDRiC4sIDQsINCf0LXRgdGC0L7QstC-LCDQndC-0LLQs9C-0YDQvtC00YHQutCw0Y8g0L7QsdC7LiwgMTc0NTEx!5e0!3m2!1sru!2sru!4v1740080950443!5m2!1sru!2sru"
                width="100%"
                height="400"
                style={{
                  border: "0",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                  borderRadius: "10px",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта Google Maps с локацией Москвы"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
