import React from "react";

const advantages = [
  {
    mdiClass: "account-switch",
    title: "Работа в команде",
    description: "Взаимодействие с командой. Использование Gitflow",
  },
  {
    mdiClass: "microsoft-visual-studio-code",
    title: "Full-Stack",
    description: "Разработка серверной и клиентской части сайта",
  },
  {
    mdiClass: "api",
    title: "API",
    description: "Настройка работы с API и разработка API интрефейсов",
  },
  {
    mdiClass: "devices",
    title: "Адаптивность",
    description: "Страницы будут подстраиваться под любой размер экрана",
  },
];

const Advantages = () => {
  return (
    <div className="about-advantages grid">
      {advantages.map((item, index) => (
        <div className="about-advantages__item" key={index}>
          <div className="about-advantages__hexagon">
            <span className={`mdi mdi-${item.mdiClass}`} />
          </div>

          <div className="about-advantages__title">{item.title}</div>

          <div className="about-advantages__description">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
