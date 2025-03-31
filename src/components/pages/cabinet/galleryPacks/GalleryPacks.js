import React from "react";
import z from "./GalleryPacks.module.css";
import PackComponent from "./PackComponent";
const GalleryPacks = () => {
  return (
    <div className={z.packsMain}>
      <PackComponent
        title="Сруб дома из бруса 6х8. (Проект Д-12) Ленинградская область, г. Тосно"
        images={{
          pic1: require("./img/tosno1.jpg"),
          pic2: require("./img/tosno2.jpg"),
          pic3: require("./img/tosno3.jpg"),
        }}
      />
      <PackComponent
        title="Сруб дома из бруса 6х5м. (Проект Д-07) Владимирская область, пос. Радужный"
        images={{
          pic1: require("./img/rad1.jpg"),
          pic2: require("./img/rad2.jpg"),
          pic3: require("./img/rad3.jpg"),
        }}
      />
      <PackComponent
        title="Сруб дома из бруса 6х9 м. (Проект Д-31) Ленинградская область, пос. Синявино"
        images={{
          pic1: require("./img/sin1.jpg"),
          pic2: require("./img/sin2.jpg"),
          pic3: require("./img/sin3.jpg"),
        }}
      />
      <PackComponent
        title="Сруб дома из бруса 6х7,5 м. (Проект Д-11) Ленинградская область, пос. Синявино"
        images={{
          pic1: require("./img/sin21.jpg"),
          pic2: require("./img/sin22.jpg"),
          pic3: require("./img/sin23.jpg"),
        }}
      />
      <PackComponent
        title="Сруб дома из бруса 9х9 м. (Проект Д-52) ленинградская область, Гатчинский район"
        images={{
          pic1: require("./img/gat1.jpg"),
          pic2: require("./img/gat2.jpg"),
          pic3: require("./img/gat3.jpg"),
        }}
      />
      <PackComponent
        title="Сруб дома из бруса 6х8. (Проект Д-12) Ленинградская область, г. Тосно"
        images={{
          pic1: require("./img/tosno1.jpg"),
          pic2: require("./img/tosno2.jpg"),
          pic3: require("./img/tosno3.jpg"),
        }}
      />
      <PackComponent
        title="Сруб дома из бруса 6х8. (Проект Д-12) Ленинградская область, г. Тосно"
        images={{
          pic1: require("./img/tosno1.jpg"),
          pic2: require("./img/tosno2.jpg"),
          pic3: require("./img/tosno3.jpg"),
        }}
      />
      <PackComponent
        title="Сруб дома из бруса 6х8. (Проект Д-12) Ленинградская область, г. Тосно"
        images={{
          pic1: require("./img/tosno1.jpg"),
          pic2: require("./img/tosno2.jpg"),
          pic3: require("./img/tosno3.jpg"),
        }}
      />
      <PackComponent
        title="Сруб дома из бруса 6х8. (Проект Д-12) Ленинградская область, г. Тосно"
        images={{
          pic1: require("./img/tosno1.jpg"),
          pic2: require("./img/tosno2.jpg"),
          pic3: require("./img/tosno3.jpg"),
        }}
      />
      <PackComponent
        title="Сруб дома из бруса 6х8. (Проект Д-12) Ленинградская область, г. Тосно"
        images={{
          pic1: require("./img/tosno1.jpg"),
          pic2: require("./img/tosno2.jpg"),
          pic3: require("./img/tosno3.jpg"),
        }}
      />
    </div>
  );
};

export default GalleryPacks;
