import React from "react";
import avatar from "../images/photo.png";

function Cabinet(props) {
  function handleChangeName(evt) {
    props.setInputName(evt.target.value);
  }
  function handleChangeText(evt) {
    props.setInputTextArea(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleSaveName(evt) {
    evt.preventDefault();
    localStorage.setItem("inputName", props.inputName);
  }

  function handleSaveText(evt) {
    evt.preventDefault();
    localStorage.setItem("textArea", props.inputTextArea);
  }

  function hadleClearName(e) {
    props.setInputName("");
    localStorage.removeItem("inputName", props.inputName);
  }
  function hadleClearText() {
    props.setInputTextArea("");
    localStorage.removeItem("textArea", props.inputTextArea);
  }
  return (
    <section className="cabinet">
      <img src={avatar} className="cabinet__photo" alt="Аватар пользователя" />
      <form className="cabinet__form" onSubmit={handleSubmit}>
        <label className="cabinet__label" name="name">
          Ваше ФИО
        </label>
        <div className="cabinet__form-row">
          <input
            value={props.inputName}
            onChange={handleChangeName}
            name="name"
            type="text"
            className="cabinet__input"
            placeholder="Иванов Иван Иванович"
          />
          <button
            onClick={hadleClearName}
            type="button"
            className="cabinet__btn-clear"
          >
            X
          </button>
          <button
            onClick={handleSaveName}
            className="cabinet__btn-save"
          ></button>
        </div>
        <label className="cabinet__label" name="name">
          О себе
        </label>
        <div className="cabinet__form-row">
          <input
            value={props.inputTextArea}
            onChange={handleChangeText}
            type="text"
            name="name"
            className="cabinet__input cabinet__input-text"
            placeholder="Расскажите о себе.."
          />
          <button
            onClick={hadleClearText}
            type="button"
            className="cabinet__btn-clear"
          >
            X
          </button>
          <button
            onClick={handleSaveText}
            className="cabinet__btn-save"
          ></button>
        </div>
      </form>
      <p className="cabinet__title">{props.inputName}</p>
      <p className="cabinet__text">{props.inputTextArea}</p>
    </section>
  );
}

export default Cabinet;
