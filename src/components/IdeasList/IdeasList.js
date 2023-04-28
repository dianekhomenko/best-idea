import { Component } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from 'components/api.js';
import { collection, getDocs } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export class IdeasList extends Component {
  state = {
    ideas: [],
  };

  async componentDidMount() {
    console.log('read');

    const querySnapshot = await getDocs(collection(db, 'ideas'));

    querySnapshot.forEach(doc => {
      let data = doc.data();
      this.setState(prevState => {
          return {
              ideas: [...prevState.ideas, data]
          };
      });
    });
  }

  render() {
    return <></>;
  }
}
