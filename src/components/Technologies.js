import React from "react";

const technologies = [
  {
    title: "HTML",
    mdiClass: "language-html5",
    bgColor: "#e54c21",
    mdiColor: "#fff",
    textColor: "#fff",
  },
  {
    title: "CSS (Flex, Grid)",
    mdiClass: "language-css3",
    bgColor: "#254bdd",
    mdiColor: "#fff",
    textColor: "#fff",
  },
  {
    title: "SASS (SCSS)",
    mdiClass: "sass",
    bgColor: "#cd6799",
    mdiColor: "#fff",
    textColor: "#fff",
  },
  {
    title: "JavaScript (ES5, ES6)",
    mdiClass: "language-javascript",
    bgColor: "#efd81d",
    mdiColor: "#000",
    textColor: "#000",
  },
  {
    title: "Node.js",
    mdiClass: "nodejs",
    bgColor: "#88c249",
    mdiColor: "#3e3f34",
    textColor: "#3e3f34",
  },
  {
    title: "Webpack",
    mdiClass: "webpack",
    bgColor: "#61a1df",
    mdiColor: "#acdcf4",
    textColor: "#212121",
  },
  {
    title: "Parcel",
    mdiClass: "package-variant",
    bgColor: "#bd8e62",
    mdiColor: "#b63a3f",
    textColor: "#b63a3f",
  },
  {
    title: "Vue",
    mdiClass: "vuejs",
    bgColor: "#3fb27f",
    mdiColor: "#33475b",
    textColor: "#33475b",
  },
  {
    title: "React",
    mdiClass: "react",
    bgColor: "#212121",
    mdiColor: "#6ec6dc",
    textColor: "#6ec6dc",
  },
  {
    title: "Git",
    mdiClass: "git",
    bgColor: "#3b2c00",
    mdiColor: "#e94d32",
    textColor: "#e94d32",
  },
  {
    title: "Linux",
    mdiClass: "linux",
    bgColor: "#000",
    mdiColor: "#ffbc00",
    textColor: "#ffbc00",
  },
  {
    title: "jQuery",
    mdiClass: "jquery",
    bgColor: "#1b75bb",
    mdiColor: "#fff",
    textColor: "#fff",
  },
  {
    title: "PHP",
    mdiClass: "language-php",
    bgColor: "#7377ad",
    mdiColor: "#20222e",
    textColor: "#20222e",
  },
  {
    title: "MySQL",
    mdiClass: "database",
    bgColor: "#126e8d",
    mdiColor: "#e59131",
    textColor: "#e59131",
  },
  {
    title: "PostgreSQL",
    mdiClass: "database",
    bgColor: "#336791",
    mdiColor: "#000",
    textColor: "#000",
  },
  {
    title: "Bitrix",
    mdiClass: "alpha-b-circle",
    bgColor: "#c7042c",
    mdiColor: "#fff",
    textColor: "#fff",
  },
  {
    title: "Ruby on Rails",
    mdiClass: "language-ruby-on-rails",
    bgColor: "#ed4545",
    mdiColor: "#fff",
    textColor: "#fff",
  },
];

const Technologies = () => {
  return (
    <div className="about-technologies__list">
      {technologies.map((item, key) => (
        <div
          className="about-technologies__item"
          key={key}
          style={{ backgroundColor: item.bgColor, color: item.textColor }}
        >
          <span
            className={`mdi mdi-${item.mdiClass}`}
            style={{ color: item.mdiColor }}
          />
          {item.title}
        </div>
      ))}

      {/*// <!--        <div class="about-technologies__item">-->*/}
      {/*// <!--          <span class="mdi "></span>-->*/}
      {/*// <!--          English Intermediate-->*/}
      {/*// <!--        </div>-->*/}
    </div>
  );
};

export default Technologies;
