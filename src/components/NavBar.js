// Styling
import { ThemeButton, Logo, Logoimg, NavProduct } from "../styles";
import img from "../logo.jpg";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/">
        <Logoimg src={img} />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavProduct to="/products">Products</NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
