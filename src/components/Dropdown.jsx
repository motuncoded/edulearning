import menuItems from "../components/MenuItem.jsx"
import { Link, useLocation, useNavigate } from "react-router-dom";



const Dropdown = () => {
  const location = useLocation(); 


    return (
      <ul className="dropdown">
        {menuItems.map((submenu, index) => (
          <li key={index} className="menu-items">
            <Link className={location.pathname === "/resources/courses" ? "activeClass" : "inactiveClass"} to={submenu.url}>{submenu.title}</Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;