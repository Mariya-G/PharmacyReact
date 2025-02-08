import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const sidebarWidthWindow = `sidebar ${
    props.isOpenSidebar ? "" : "sidebar-toggle"
  }
${
  props.windowWidth < 700 && props.isOpenSidebar ? "sidebar-toggle-mobile" : ""
}`;
  return (
    <section className={sidebarWidthWindow}>
      <div className="sidebar__wrap">
        <Link to="/" className="sidebar__logo">
          Логотип
        </Link>
        <button
          onClick={props.onChange}
          className="sidebar__button-toggle"
        ></button>
      </div>
      <NavBar onMenuClick={props.handleMenuClick}  currentTitle={props.currentTitle} currentSubTitle={props.currentSubTitle}/>
    </section>
  );
}

export default Sidebar;
