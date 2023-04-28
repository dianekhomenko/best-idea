import { Component } from "react";
import {
  SearchBar,
  SearchInput,
  SearchIcon,
  SearchButton,
} from 'components/Search/Search.styled';

export class Search extends Component {
    state = {
        search: '',
    }

    render() {
        return (
          <SearchBar>
            <SearchInput />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchBar>
        );
    }
}