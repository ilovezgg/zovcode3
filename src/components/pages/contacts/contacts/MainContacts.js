import React from "react";
import { useInView } from 'react-intersection-observer';
import z from "./MainContacts.module.css";
import { ReactComponent as TelegramIcon } from "./img/icons8-телеграм (1).svg";
import { ReactComponent as WhatsIcon } from "./img/icons8-whatsapp (2).svg";
import { ReactComponent as GmailIcon } from "./img/icons8-почта.svg";
import { ReactComponent as DocumentsIcon } from "./img/document-add-svgrepo-com (1).svg";
import { ReactComponent as PhoneIcon } from "./img/phone-outgoing-svgrepo-com (1).svg";
import { ReactComponent as MailIcon } from "./img/email-svgrepo-com (1).svg";

const TimeCard = ({ day, time }) => (
  <div className={z.timeCard}>
    <div className={z.timeDay}>{day}</div>
    <div className={z.timeHours}>{time}</div>
  </div>
);

const MainContacts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const schedule = [
    { day: 'Понедельник', time: '9:00 - 18:00' },
    { day: 'Вторник', time: '9:00 - 18:00' },
    { day: 'Среда', time: '9:00 - 18:00' },
    { day: 'Четверг', time: '9:00 - 18:00' },
    { day: 'Пятница', time: '9:00 - 18:00' },
    { day: 'Суббота', time: '9:00 - 18:00' },
    { day: 'Воскресенье', time: '9:00 - 18:00' },
  ];

  return (
    <section ref={ref} className={z.section}>
      <div className={z.container}>
        <h2 className={`${z.title} ${inView ? z.visible : ''}`}>
          Свяжитесь с нами
        </h2>
        
        <div className={z.grid}>
          <div className={`${z.card} ${inView ? z.visible : ''}`} style={{ transitionDelay: '100ms' }}>
            <h3 className={z.cardTitle}>Режим работы</h3>
            <div className={z.scheduleGrid}>
              {schedule.map((item, i) => (
                <TimeCard key={i} day={item.day} time={item.time} />
              ))}
            </div>
          </div>

          <div className={`${z.card} ${inView ? z.visible : ''}`} style={{ transitionDelay: '200ms' }}>
            <h3 className={z.cardTitle}>Мессенджеры</h3>
            <div className={z.socialButtons}>
              <a 
                href="https://t.me/your_username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={z.socialBtn}
              >
                <TelegramIcon />Telegram
              </a>
              <a 
                href="https://wa.me/79217302466" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={z.socialBtn}
              >
                <WhatsIcon />WhatsApp
              </a>
              <a href="mailto:srub-dom53@yandex.ru" className={z.socialBtn}>
                <GmailIcon />Email
              </a>
            </div>
            <div className={z.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2078.5915107928895!2d35.827!3f0!3m2!1i1024!2i1000!4f13.1!2m1!1zLy8g0JrQvtC-0YDQtNC40L3QsNGC0Ysg0YLQstC-0LXQs9C-INC80LXRgdGC0LAgKNCf0LXRgdGC0L7QstC-LCDQo9GB0YLRjtC20LXQvdGB0LrQvtC1INGI0L7RgdGB0LUsIDQp!5e0!3m2!1sru!2sru!4v1756593854006!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '16px', filter: 'grayscale(30%) invert(92%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </div>

          <div className={`${z.card} ${inView ? z.visible : ''}`} style={{ transitionDelay: '300ms' }}>
            <h3 className={z.cardTitle}>
              <DocumentsIcon className={z.titleIcon} />
              Реквизиты
            </h3>
            <div className={z.requisites}>
              <div>ИНН 531300377926</div>
              <div>ОГРН 315533100001310</div>
              <div>ИП Долгачёв И.А.</div>
              <div>Р/счет 40802810501090000458</div>
              <div className={z.address}>174510, Новгородская область, г. Пестово, Устюженское шоссе, 4</div>
            </div>
            
            <div className={z.contactRow}>
              <PhoneIcon className={z.contactIcon} />
              <div>
                <a href="tel:+79217302466">8 (921) 730-24-66</a>
                <a href="tel:+78162902466">8 (8162) 90-24-66</a>
              </div>
            </div>
            
            <div className={z.contactRow}>
              <MailIcon className={z.contactIcon} />
              <a href="mailto:srub-dom53@yandex.ru">srub-dom53@yandex.ru</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContacts;