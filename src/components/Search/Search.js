import {
  SearchBar,
  SearchInput,
  SearchIcon,
  SearchButton,
} from 'components/Search/Search.styled';

export const Search = ({onSubmit}) => {
  return (
    <SearchBar onSubmit={onSubmit}>
      <SearchInput placeholder="Search ideas" name="searchbar" type="text" />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchBar>
  );
};