import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import menuItems from "../utils/utils";

function NavBar(props) {
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const toggleMenu = (index) => {
      setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

  return (
    <nav className="sidebar__navigation">
      <ul className="sidebar__navigation-links">
        <li className="sidebar__navigation-item">
          <NavLink to="/" className="sidebar__navigation-link">
            Главная
          </NavLink>
        </li>
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar__navigation-item">
            <NavLink
              onClick={() => toggleMenu(index)}
              className={`sidebar__navigation-link ${openMenuIndex === index ? 'open' : ''}`}
            >
              <span className="sidebar__navigation-link--arrow"></span>
              {item.title}
            </NavLink>
            {openMenuIndex === index && (
              <ul className="sidebar__navigation-links_sub">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="sidebar__navigation-item_sub">
                    <NavLink
                      to={subItem.path}
                      className={({ isActive }) =>
                        `sidebar__navigation-link_sub ${
                          isActive ? "sidebar__navigation-link_sub-active" : ""
                        }`
                      }
                    >
                      {subItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        
      </ul>
    </nav>
  );
}

export default NavBar;
