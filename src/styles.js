import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const DeleteButtonStyled = styled.button`
  color: red;
  font-weight: bold;
  margin-left: 0px;
`;

export const AddButtonStyled = styled.button`
  color: red;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 20px;
`;

export const Description = styled.h4`
  text-align: center;
  margin-top: 35px;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ListForm = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;

export const Form = styled.form`
  width: 50%;
`;

export const FormButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const TwoButtons = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const H = styled.h1`
  margin-bottom: 50px;
`;

export const ProductWrapper = styled.div`
  margin-top: 20px;
  margin-right: 50px;
  margin-bottom: 20px;
  margin-left: 20px;
  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: red;
      font-weight: bold;
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  // padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 65px;
`;

export const TitleH = styled.h1`
  text-align: center;
`;
export const Logoimg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 30px;
`;
export const NavItem = styled(NavLink)`
  font-size: 25px;
  padding-right: 25px;
  &.active {
    color: ${(props) => props.theme.mainColor};
    font-weight: bold;
  }
`;

export const NavProduct = styled(NavLink)`
  font-size: 25px;
  margin-top: 15px;
  padding-right: 25px;
  color: orange;
  &.active {
    color: Red;
    font-weight: bold;
  }
`;

export const Logo = styled(Link)`
  text-align: center;
`;

export const LoadingWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 10%;
`;
