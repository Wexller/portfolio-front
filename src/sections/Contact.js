import React from "react";
import { Element } from "react-scroll";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="additional-block" />
      <section className="section-triangle">
        <div className="triangle" />
      </section>

      <section className="section-contact">
        <div className="section-title">Связаться</div>

        <p className="form-info">Есть предложение?</p>

        <ContactForm />
      </section>
    </Element>
  );
};

export default Contact;
