// Styling
import { ThemeButton, Logo, Logoimg, NavProduct } from "../styles";
import { FaSignOutAlt } from "react-icons/fa";
import img from "../logo.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout } from "../store/actions/authActions";

const NavBar = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/">
        <Logoimg src={img} />
      </Logo>
      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "25px 25px 0 0",
              }}
            >
              <b>Welcome, {user.firstname} !</b>
              <FaSignOutAlt onClick={() => dispatch(signout())} />
            </p>
          </>
        ) : (
          <>
            <Link to={"/signup"}>
              <button type="button" class="btn btn-outline-success mt-3 mr-4">
                Sign Up
              </button>
            </Link>

            <Link to={"/signin"}>
              <button type="button" class="btn btn-outline-success mt-3 mr-4">
                Sign In
              </button>
            </Link>
          </>
        )}

        {/* <NavProduct to="/shops/">Products</NavProduct> */}
        {user && <NavProduct to="/shops">Shops</NavProduct>}
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
