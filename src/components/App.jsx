import { Layout } from 'components/Layout/Layout';
import { Component } from 'react';
import { IdeasList } from './IdeasList/IdeasList';
import { Search } from 'components/Search/Search'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from 'components/api.js';
import { collection, getDocs } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export class App extends Component {
  state = {
    ideas: [],
  };

  async componentDidMount() {
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

  render() {
    return (
      <Layout>
        <IdeasList ideas={this.state.ideas} />
        <Search ideas={this.state.ideas} />
      </Layout>
    );
  }
}
