import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import z from "./Footer.module.css";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/catalog", label: "Каталог" },
    { to: "/we", label: "О нас" },
    { to: "/contacts", label: "Контакты" },
    { to: "/callback", label: "Личный кабинет" },
  ];

  return (
    <footer className={z.footerBackground}>
      <div className={z.container}>
        <div className={z.footerMain}>
          <div className={z.left}>
            <nav className={z.nav}>
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className={z.navLink}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className={z.contacts}>
              <div className={z.socials}>
                <span className={z.socialsTitle}>Мы в соцсетях</span>
                <div className={z.socialIcons}>
                  <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className={z.iconTelegram} />
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={z.iconWhatsapp} />
                </div>
              </div>

              <div className={z.contactItem}>
                174510, Новгородская область, г. Пестово, Устюженское шоссе, 4
              </div>
              <a href="mailto:srub-dom53@yandex.ru" className={z.contactLink}>
                srub-dom53@yandex.ru
              </a>
              <a href="tel:+79217302466" className={z.contactLink}>
                8 (921) 730-24-66
              </a>
              <a href="tel:+78162902466" className={z.contactLink}>
                8 (8162) 90-24-66
              </a>
            </div>
          </div>

          <div className={z.right}>
            <div ref={ref} className={`${z.map} ${inView ? z.mapVisible : ""}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1235.942109715081!2d35.826432435720555!3d58.602274552658024!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b07eabb7e823f9%3A0x58240d369c1a79a1!2z0KPRgdGC0Y7QttC10L3RgdC60L7QtSDRiC4sIDQsINCf0LXRgdGC0L7QstC-LCDQndC-0LLQs9C-0YDQvtC00YHQutCw0Y8g0L7QsdC7LiwgMTc0NTEx!5e0!3m2!1sru!2sru!4v1740080950443!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта"
              />
            </div>
          </div>
        </div>

        <div className={z.bottom}>
          <span className={z.copyright}>© 2026 СрубДом53</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;