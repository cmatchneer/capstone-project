import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to="/ ">
          <CrwnLogo className="logo"></CrwnLogo>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          <Link className="nav-link" to="/signin">
            signin
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
