import React from 'react';
import z from './MaterialsMain.module.css';
import BrusBlock from './BrusBlock';
import { brusData } from './brusData';

const MaterialsMain = () => {
  return (
    <div className={z.main}>
      <div className={z.titleMaterials}>
        Материалы для строительства сруба дома из бруса под усадку: фундамент надёжности
      </div>
      
      <BrusBlock {...brusData.brus} />
      
      <BrusBlock {...brusData.jute} />
    </div>
  );
};

export default MaterialsMain;