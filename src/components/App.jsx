import { Layout } from 'components/Layout/Layout';
import { Component } from 'react';
import { IdeasList } from './IdeasList/IdeasList';
import { Search } from 'components/Search/Search';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from 'components/api.js';
import { collection, getDocs } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export class App extends Component {
  state = {
    ideas: [],
    search: '',
  };

  async componentDidMount() {
    if (this.state.search === '') {
      const querySnapshot = await getDocs(collection(db, 'ideas'));

      querySnapshot.forEach(doc => {
        let data = doc.data();
        this.setState(prevState => {
          return {
            ideas: [...prevState.ideas, data],
          };
        });
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      console.log('search');
    }
  }

  onSearch = e => {
    e.preventDefault();
    let searchText = e.currentTarget.elements.searchbar.value;
    this.setState({
      search: searchText,
    });
    const allIdeas = this.state.ideas;
    const filteredIdeas = allIdeas.filter(idea =>
      idea.title.includes(searchText)
    );
    this.setState({
      ideas: filteredIdeas,
      search: '',
    });
  };

  render() {
    return (
      <Layout>
        <IdeasList ideas={this.state.ideas} />
        <Search onSubmit={this.onSearch} />
      </Layout>
    );
  }
}
