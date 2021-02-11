import { LoadingWrapper, Title } from "../styles";
import DotLoader from "react-spinners/DotLoader";

export default function Loading() {
  return (
    <LoadingWrapper>
      <Title style={{ marginRight: "2%" }}>
        Fetching products from store...
      </Title>
      <DotLoader color="blue" size={100} />
    </LoadingWrapper>
  );
}
