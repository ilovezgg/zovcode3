import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import z from './EcoHouseWood.module.css'

const WoodCard = ({ title, text, bgClass, isActive, onClick }) => {
  return (
    <div className={`${z.card} ${z[bgClass]} ${isActive ? z.active : ''}`} onClick={onClick}>
      <div className={z.cardTitle}>{title}</div>
      <div className={z.cardText}>{text}</div>
    </div>
  );
};

const EcoHouseWood = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(null);

  const woods = [
    {
      title: 'Ель',
      bgClass: 'bgElka',
      text: 'Главное преимущество ели — ее превосходные теплоизоляционные свойства благодаря рыхлой структуре древесины. Она создает в доме светлую и гипоаллергенную атмосферу, так как содержит меньше смолы, чем сосна. Еловый сруб обеспечит особое ощущение уюта и тепла.'
    },
    {
      title: 'Сосна',
      bgClass: 'bgSosna',
      text: 'Самый популярный и доступный материал для срубов, предлагающий лучшее соотношение цены и качества. Она обладает хорошей прочностью, красивой текстурой и активно выделяет полезные для воздуха фитонциды. Сосна — это надежный и проверенный временем вариант.'
    },
    {
      title: 'Лиственница',
      bgClass: 'bgListv',
      text: 'Идеальный выбор для долговечности и стойкости к влаге. При контакте с водой ее древесина не гниет, а каменеет, что делает ее незаменимой для нижних венцов сруба и бань. Это инвестиция в дом, который простоит века.'
    },
    {
      title: 'Кедр',
      bgClass: 'bgKedr',
      text: 'Элитная древесина с непревзойденными целебными свойствами и роскошным внешним видом. Его аромат создает в доме уникальный микроклимат, благотворно влияющий на дыхательную и нервную систему. Кедровый сруб — это готовый оздоровительный курорт у вас дома.'
    }
  ];

  return (
    <section ref={ref} className={`${z.section} ${inView ? z.visible : ''}`}>
      <div className={z.container}>
        {woods.map((wood, i) => (
          <WoodCard 
            key={i} 
            {...wood} 
            isActive={active === i}
            onClick={() => setActive(active === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}
export default EcoHouseWood