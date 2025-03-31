import React from 'react';
import z from './PackComponent.module.css'; 

const PackComponent = ({ title, images }) => {
  return (
    <div className={z.pack1}>
    <div className={z.topPack}>
      <div className={z.packImg}></div>
      <div className={z.packTitle}>{title}</div>
    </div>
    <div className={z.bottomPack}>
      <div className={z.pic1} style={{ backgroundImage: `url(${images.pic1})` }}>
        <div className={z.plusIcon}>+</div>
      </div>
      <div className={z.pic2} style={{ backgroundImage: `url(${images.pic2})` }}>
        <div className={z.plusIcon}>+</div>
      </div>
      <div className={z.pic3} style={{ backgroundImage: `url(${images.pic3})` }}>
        <div className={z.plusIcon}>+</div>
      </div>
    </div>
  </div>
  );
};

export default PackComponent;
