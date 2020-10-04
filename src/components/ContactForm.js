import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [, forceUpdate] = useState(null);
  const simpleValidator = useRef(
    new SimpleReactValidator({
      messages: {
        email: "Некорректный формат Email адреса",
        required: "Поле обязательно для заполнения",
        alpha: "В поле должны присутствовать только буквы",
      },
    })
  );

  function fieldChangeHandler(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    const formValid = simpleValidator.current.allValid();
    if (!formValid) {
      simpleValidator.current.showMessages();
      forceUpdate(1);
      return;
    }

    console.log(formState);
  }

  return (
    <div className="grid form-block">
      <form onSubmit={formSubmitHandler}>
        <div className="form-input">
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={fieldChangeHandler}
            placeholder="Имя"
          />
          <label className="invalid">
            {simpleValidator.current.message(
              "name",
              formState.name,
              "required|alpha"
            )}
          </label>
        </div>

        <div className="form-input">
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={fieldChangeHandler}
            placeholder="Email"
          />
          <label className="invalid">
            {simpleValidator.current.message(
              "email",
              formState.email,
              "required|email"
            )}
          </label>
        </div>

        <div className="form-input">
          <textarea
            name="message"
            value={formState.text}
            onChange={fieldChangeHandler}
            placeholder="Ваше сообщение"
          />
        </div>

        <div className="form-input form-submit">
          <button type="submit" className="base-button">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
