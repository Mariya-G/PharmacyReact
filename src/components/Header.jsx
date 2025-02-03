import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/photo.png";
function Header(props) {
  return (
    <header
      className={`header ${!props.isStreachHeader ? "" : "header-streach"}`}
    >
      <form className="header__form" method="get">
        <button className="header__form-btn" type="submit"></button>
        <input
          className="header__input"
          type="text"
          placeholder="Поиск.."
          name="search"
        />
      </form>
      <div className="header__user-menu">
        <Link to="cabinet" className="header__user-menu-link">Мария Городилова</Link>
        <Link to="cabinet" className="header__user-menu-link-avatar">
          <img
            src={avatar}
            className="header__user-menu-photo"
            alt="Аватар пользователя"
          />
        </Link>
        <Link className="header__user-menu-logout">
          Выйти
        </Link>
      </div>
    </header>
  );
}

export default Header;
