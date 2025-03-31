import React from "react";
import z from "./GalleryMain.module.css";
const GalleryMain = () => {
  return (
    <div className={z.galleryMain}>
      <div className={z.mainPhoto}>
        <div className={z.imageMain}>
          <div className={z.black}>
            <div className={z.titleMain}>
              Фото срубов: процесс и готовый результат
            </div>
            <div className={z.subTitle}>
              Фотографии построенных деревянных домов из клееного бруса
              собственного производства и каменных блоков. Если, вам понравилась
              фотография построенного нашей компанией дома - мы с радостью
              выполним индивидуальный проект для вас с учетом всех пожеланий!
              Нажмите на кнопку заказать дом как на картинке и заполните форму
              заказа.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryMain;
