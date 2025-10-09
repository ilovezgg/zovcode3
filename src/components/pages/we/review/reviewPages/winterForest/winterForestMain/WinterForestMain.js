import React from 'react'
import z from './WinterForestMain.module.css'
const WinterForestMain = () => {
  return (
    <div className={z.main}>
      <div className={z.containerForPic}>
       <div className={z.pic}>
         <div className={z.blackCube}>
          <div className={z.title}>
           Зимний лес для сруба: мифы и реальность
          </div>
          <div className={z.subTitle}>
Преимущества зимней заготовки древесины и особенности строительства
          </div>
         </div>
       </div>
      </div>
      <div className={z.containerForText}>
<div className={z.textFirst}>
  В сфере деревянного домостроения давно укрепилось мнение, что для строительства качественного сруба идеально подходит древесина, заготовленная в зимний период. Но что из этого правда, а что — устоявшийся миф? Давайте разберемся, какие реальные преимущества имеет зимний лес и на что стоит обратить внимание при строительстве сруба из бруса в холодное время года.
      </div>
      </div>
      <div className={z.containerForTextTwo}>
        <div className={z.containerForTwo}>
<div className={z.picWork}>

        </div>
        <div className={z.textTwo}>
      <div className={z.titleParts}>
    Преимущества зимней древесины:
      </div>
      <div className={z.subTitleParts}>
 • Естественная низкая влажность — дерево "спит", сокодвижение остановлено
      </div>
      <div className={z.subTitleParts}>
  • Повышенная плотность волокон — мороз делает структуру древесины более однородной
      </div>
      <div className={z.subTitleParts}>
• Защита от грибка и плесени — низкие температуры предотвращают развитие микроорганизмов
      </div>
      <div className={z.subTitleParts}>
• Равномерная усадка — минимальное образование трещин и деформаций
      </div>
        </div>
        </div>
      </div>
      <div className={z.containerForTextSecond}>
<div className={z.textSecond}>
  Однако важно понимать: преимущества зимней древесины не отменяют необходимости профессионального подхода к строительству. Даже самый качественный материал требует правильной обработки, сборки и последующего ухода. Современные технологии сушки позволяют достичь оптимальных показателей влажности и у летнего леса, но именно зимняя древесина сохраняет природную структуру волокон, что положительно сказывается на прочности и теплоизоляционных свойствах готового сруба.
      </div>
      </div>
      <div className={z.infoPart}>
        <div className={z.containerInfo}>
<div className={z.infoPic}>

      </div>
      <div className={z.infoStatistic}> 
        <div className={z.upInfo}>
<div className={z.titleGraph}>
Сравнительный анализ влажности разной древесины (%)
</div>
<div className={z.containerForGraph}>
<div className={z.glueWood}>
<div className={z.numberGlue}>
10
</div>
</div>
<div className={z.dryWood}>
<div className={z.numberDry}>
15
</div>
</div>
<div className={z.winterWood}>
<div className={z.numberWinter}>
35
</div>
</div>
<div className={z.summerWood}>
<div className={z.numberSummer}>
60
</div>
</div>
</div>
        </div>
        <div className={z.bottomInfo}>
       <div className={z.bottomTitle}>
       На графике предоставлены проценты влажности для:
       </div>
       <div className={z.legendGrid}>
    <div className={z.legendRow}>
      <div className={z.legendItem}>
        <div className={z.colorCircle} style={{background: '#a8a08a'}}></div>
        <span>Клееный брус</span>
      </div>
      <div className={z.legendItem}>
        <div className={z.colorCircle} style={{background: '#d2b48c'}}></div>
        <span>Зимний брус</span>
      </div>
    </div>
    <div className={z.legendRow}>
      <div className={z.legendItem}>
        <div className={z.colorCircle} style={{background: 'rgb(95, 180, 115)'}}></div>
        <span>Летний брус</span>
      </div>
      <div className={z.legendItem}>
        <div className={z.colorCircle} style={{background: '#ffffffff'}}></div>
        <span>Сушеный брус</span>
      </div>
    </div>
  </div>
        </div>
      </div>
      <div className={z.infoText}>
 Многолетние исследования подтверждают, что оптимальная влажность древесины для строительства составляет 12-18%. Именно в этом диапазоне материал проявляет свои лучшие качества: минимальную усадку, устойчивость к деформациям и максимальную долговечность. 
  
  Зимний брус естественным образом приближается к этим идеальным значениям благодаря особенностям сезонной заготовки. Естественная сушка сохраняет уникальную структуру древесных волокон и природную прочность значительно лучше многих современных технологичных методов.
      </div>
        </div>
      </div>
      <div className={z.lastPart}>
       <div className={z.containerLastPart}>
        <div className={z.lastPicOne}>

        </div>
        <div className={z.lastText}>
Строительство сруба из зимнего леса — это разумный выбор для тех, кто ценит натуральность, долговечность и здоровый микроклимат. Природные преимущества зимней древесины в сочетании с современными технологиями создают идеальный симбиоз традиций и инноваций.
  
  Правильный зимний брус сохраняет все преимущества дерева и обеспечивает стабильность конструкции. Ваш дом — это не просто жилье, а наследие для поколений.
        </div>
        <div className={z.lastPicTwo}>

        </div>
       </div>
      </div>
    </div>
  )
}

export default WinterForestMain