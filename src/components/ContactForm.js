import React, { useCallback, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useHttp } from "../hooks/http.hook";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [, forceUpdate] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseError, setResponseError] = useState("");
  const simpleValidator = useRef(
    new SimpleReactValidator({
      messages: {
        email: "Некорректный формат Email адреса",
        required: "Поле обязательно для заполнения",
      },
    })
  );

  const { loading, request } = useHttp();

  const sendMessage = useCallback(async () => {
    const response = await request("/api/feedback", "POST", { ...formState });

    if (!response.errors) {
      setResponseMessage(response.message);
      setFormState(initialFormState);
    } else {
      setResponseError(response.message);
    }
  }, [request, formState]);

  function fieldChangeHandler(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    setResponseMessage("");
    setResponseError("");

    const formValid = simpleValidator.current.allValid();
    if (!formValid) {
      simpleValidator.current.showMessages();
      forceUpdate(1);
      return false;
    }

    simpleValidator.current.hideMessages();
    sendMessage();
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
              "required"
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
            value={formState.message}
            onChange={fieldChangeHandler}
            placeholder="Ваше сообщение"
          />
        </div>

        <div className="form-input form-submit">
          <div className="submit-message">
            <div className="success">{responseMessage}</div>
            <div className="error">{responseError}</div>
          </div>

          <div className="submit-button-block">
            {loading && <div className="loader" />}
            {!loading && <div />}

            <button type="submit" className="base-button" disabled={loading}>
              Отправить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
