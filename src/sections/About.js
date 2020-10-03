import React from "react";

const About = () => {
  return (
    <section className="section-about">
      <div className="section-title">Обо мне</div>

      <div className="about-advantages grid">
        <div className="about-advantages__item">
          <div className="about-advantages__hexagon">
            <span className="mdi mdi-account-switch" />
          </div>

          <div className="about-advantages__title">Работа в команде</div>

          <div className="about-advantages__description">
            Взаимодействие с командой. Использование Gitflow
          </div>
        </div>

        <div className="about-advantages__item">
          <div className="about-advantages__hexagon">
            <span className="mdi mdi-microsoft-visual-studio-code" />
          </div>

          <div className="about-advantages__title">Full-Stack</div>

          <div className="about-advantages__description">
            Разработка серверной и клиентской части сайта
          </div>
        </div>

        <div className="about-advantages__item">
          <div className="about-advantages__hexagon">
            <span className="mdi mdi-api" />
          </div>

          <div className="about-advantages__title">API</div>

          <div className="about-advantages__description">
            Настройка работы с API, либо разработка API интрефейсов
          </div>
        </div>

        <div className="about-advantages__item">
          <div className="about-advantages__hexagon">
            <span className="mdi mdi-devices" />
          </div>

          <div className="about-advantages__title">Адаптивность</div>

          <div className="about-advantages__description">
            Страницы будут подстраиваться под любой размер экрана
          </div>
        </div>
      </div>

      <div className="grid about-description">
        <div className="about-introduction">
          <div className="about-introduction__photo">
            <img
              src="./assets/images/stub/HexagonPhoto.png"
              alt="Maxim Davydov"
            />
          </div>

          <div className="about-introduction__title">Кто этот парень?</div>

          <div className="about-introduction__description">
            Я <span className="important">Full-Stack</span> разрабочик в
            компании{" "}
            <a href="//sinergo.ru" rel="noopener noreferrer" target="_blank">
              Синерго&nbsp;
            </a>
            (Кемерово &mdash; Кузбасс) и хочу переехать в Москву. Я занимаюсь
            Web разработкой с начала 2019 года. У меня есть несколько
            завершенных проектов, сделанных на&nbsp;
            <span className="important">Bitrix</span> и&nbsp;
            <span className="important">Ruby on Rails</span>. В последнее время
            я стал тяготеть в сторону&nbsp;
            <span className="important">Full-Stack JavaScript</span>&nbsp;
            разработчика (React, Vue, NodeJS).
            <br />
            <a href="/">Свяжитесь со мной, если у вас есть предложение.</a>
          </div>
        </div>
        <div className="about-technologies">
          <div className="about-technologies__list">
            <div className="about-technologies__item html-orange">
              <span className="mdi mdi-language-html5" />
              HTML
            </div>

            <div className="about-technologies__item css-blue">
              <span className="mdi mdi-language-css3" />
              CSS (Flex, Grid)
            </div>

            <div className="about-technologies__item sass-purple">
              <span className="mdi mdi-sass" />
              SASS (SCSS)
            </div>

            <div className="about-technologies__item js-yellow">
              <span className="mdi mdi-language-javascript" />
              JavaScript (ES5, ES6)
            </div>

            <div className="about-technologies__item nodejs-green">
              <span className="mdi mdi-nodejs" />
              Node.js
            </div>

            <div className="about-technologies__item webpack-blue">
              <span className="mdi mdi-webpack" />
              Webpack
            </div>

            <div className="about-technologies__item parcel-brown">
              <span className="mdi mdi-package-variant" />
              Parcel
            </div>

            <div className="about-technologies__item vue-green">
              <span className="mdi mdi-vuejs" />
              Vue
            </div>

            <div className="about-technologies__item react-blue">
              <span className="mdi mdi-react" />
              React
            </div>

            {/*// <!--        <div class="about-technologies__item">-->*/}
            {/*// <!--          <span class="mdi "></span>-->*/}
            {/*// <!--          English Intermediate-->*/}
            {/*// <!--        </div>-->*/}

            <div className="about-technologies__item git-orange">
              <span className="mdi mdi-git" />
              Git
            </div>

            <div className="about-technologies__item linux-black">
              <span className="mdi mdi-linux" />
              Linux
            </div>

            <div className="about-technologies__item jquery-blue">
              <span className="mdi mdi-jquery" />
              jQuery
            </div>

            <div className="about-technologies__item php-blue">
              <span className="mdi mdi-language-php" />
              PHP
            </div>

            <div className="about-technologies__item bitrix-red">
              <span className="mdi mdi-alpha-b-circle" />
              Bitrix
            </div>

            <div className="about-technologies__item ruby-red">
              <span className="mdi mdi-language-ruby-on-rails" />
              Ruby on Rails
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
