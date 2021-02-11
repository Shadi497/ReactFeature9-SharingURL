// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for a product"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
