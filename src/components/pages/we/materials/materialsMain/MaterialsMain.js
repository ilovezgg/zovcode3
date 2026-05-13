import React from 'react';
import z from './MaterialsMain.module.css';
import BrusBlock from './BrusBlock';
import { brusData } from './brusData';

const MaterialsMain = () => {
  const blocks = [
    brusData.brus,
    brusData.jute,
    brusData.nagels,
    brusData.krep,
    brusData.kr,
    brusData.svai,
    brusData.anti
  ];

  return (
    <section className={z.section}>
      <div className={z.container}>
        <h2 className={z.title}>
          Материалы для строительства сруба из бруса под усадку
        </h2>
        <p className={z.subtitle}>
          Фундамент надёжности вашего будущего дома
        </p>
        
        <div className={z.blocksWrapper}>
          {blocks.map((block, index) => (
            <BrusBlock key={index} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsMain;