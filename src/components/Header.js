import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
  // Get access to dispatch function
  const dispatch = useDispatch();
  // Access redux store using useSelector => then access auth slice and its isAuthenticated property
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    // create logout action object
    dispatch(authActions.logout());
  }

  const userAuthNavbar = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && userAuthNavbar}
    </header>
  );
};

export default Header;
