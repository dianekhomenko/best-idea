import {
  SearchBar,
  SearchInput,
  SearchIcon,
  SearchButton,
} from 'components/Search/Search.styled';

export const Search = ({ideas}) => {
        return (
          <SearchBar>
            <SearchInput
              placeholder="Search ideas"
              name="searchbar"
              type="text"
            />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchBar>
        );
    }