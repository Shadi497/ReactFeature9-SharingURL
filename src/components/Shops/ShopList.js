// Styling
import { ListWrapper } from "../../styles";
// Components
import ShopItem from "./ShopItem";
import SearchBar from "../SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import AddButton from "../Buttons/AddButton";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

const ShopList = () => {
  const [query, setQuery] = useState("");

  const shops = useSelector((state) => state.shopReducer.shops);

  const user = useSelector((state) => state.authReducer.user);

  if (!user) {
    return <Redirect to="/signin" />;
  }

  const shopList = shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopItem shop={shop} key={shop.id} />);

  return (
    <div>
      <Helmet>
        <title>Shops List </title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <Link to="/shops/new">
        <AddButton />
      </Link>
      <ListWrapper>{shopList}</ListWrapper>
    </div>
  );
};

export default ShopList;
