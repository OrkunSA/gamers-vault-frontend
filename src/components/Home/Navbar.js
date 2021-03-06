import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const history = useHistory();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            GAMER VAULT <i className="fas fa-gamepad"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {loggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/collection"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Collection
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-links"
                    onClick={() => dispatch(logout(history))}
                  >
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
          {!loggedIn && button && (
            <Button buttonStyle="btn--outline">SIGN UP</Button>
          )}
        </div>
      </nav>
    </>
  );
}

// {
//   /* <Link to="/">Home</Link>
//         {this.props.loggedIn ? (
//           <>
//             <Link to="/dashboard">Dashboard</Link>
//             <Link to="#" onClick={() => this.props.logout(this.props.history)}>
//               Logout
//             </Link>
//           </>
//         ) : (
//           <>
//             <Link to="/signup">Signup</Link>
//             <Link to="/login">Login</Link>
//           </>
//         )} */
// }

// const mapStateToProps = (state) => {
//   return {
//     loggedIn: state.auth.loggedIn,
//   };
// };

// export default withRouter(connect(mapStateToProps, { logout })(Navbar));
export default withRouter(Navbar);
