import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItem";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
    
           onClick={handleClick}
           className={click ? 'dropdown-menu active' : 'dropdown-menu'}
      >
        {MenuItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className="dropmenu-link"
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;