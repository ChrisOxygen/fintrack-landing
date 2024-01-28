import { IoIosArrowDown } from "react-icons/io";
import MobileNavToggle from "./MobileNavToggle";

function Header() {
  return (
    <header className="header">
      <img src="/assets/header-logo.png" alt="" className="site-logo" />
      <menu className="header-nav-list">
        <li className="header-nav-list__item header-nav-list__item--active">
          Home
        </li>
        <li className="header-nav-list__item">Pricing</li>
        <li className="header-nav-list__item">Services</li>
        <li className="header-nav-list__item">
          Blogs
          <span className="item-icon">
            <IoIosArrowDown />
          </span>
        </li>
      </menu>
      <div className="auth-block">
        <button className="login-btn">Login</button>
        <button className="sign-up-btn">SIGN UP</button>
      </div>
      <MobileNavToggle />
    </header>
  );
}

export default Header;
