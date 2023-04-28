import { Component } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from 'components/api.js';
import { collection, getDocs } from 'firebase/firestore';
import { Idea } from 'components/Idea/Idea';
import {List} from 'components/IdeasList/IdeasList.styled'

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export class IdeasList extends Component {
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
      <List>
        {this.state.ideas.map(idea => (
          <Idea
            key={idea.id}
            title={idea.title}
            difficulty={idea.difficulty}
            description={idea.description}
            images={idea.images}
          />
        ))}
      </List>
    );
  }
}
