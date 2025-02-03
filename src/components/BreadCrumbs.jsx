import React from "react";

function BreadCrumbs() {
  return (
      <div className="content__bread-crumbs">
        <nav className="content__bread-crumbs-links">
          <a href="#" className="content__bread-crumbs-link">
            Главная
          </a>
          <a href="#" className="content__bread-crumbs-link">
            Пункт меню 4
          </a>
          <a href="#" className="content__bread-crumbs-link">
            Подпункт меню
          </a>
        </nav>
      </div>
  );
}

export default BreadCrumbs;