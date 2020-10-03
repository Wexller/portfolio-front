import React from "react";

const Contact = () => {
  return (
    <section className="section-contact">
      <div className="section-title">Связаться</div>

      <p className="form-info">Есть предложение?</p>

      <div className="grid form-block">
        <form>
          <div className="form-input">
            <input type="text" name="name" placeholder="Имя" />
          </div>
          <div className="form-input">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="form-input">
            <textarea name="message" placeholder="Ваше сообщение" />
          </div>
          <div className="form-input form-submit">
            <button type="submit" className="base-button">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
