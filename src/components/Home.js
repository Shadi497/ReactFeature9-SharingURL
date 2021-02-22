import { Description, ShopImage, TitleH } from "../styles";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <TitleH>Life Pharamcy</TitleH>
      <Description>A better way to shop for health & beauty!</Description>

      <ShopImage
        alt="cookie shop"
        src="https://www.emporium.co.th/wp-content/uploads/2018/05/Cover-8-1024x682.jpg"
      />
      <Helmet>
        <title>Home Page </title>
      </Helmet>
    </>
  );
};

export default Home;
