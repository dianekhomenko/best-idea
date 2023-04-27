import { Layout } from 'components/Layout/Layout';
import { Component } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWdR7hKe6pXQ0DlTgQeCQcGONqh7-NUnQ",
  authDomain: "ideas-5fbbe.firebaseapp.com",
  projectId: "ideas-5fbbe",
  storageBucket: "ideas-5fbbe.appspot.com",
  messagingSenderId: "133534844303",
  appId: "1:133534844303:web:e516bb34b201533aac37fa",
  measurementId: "G-CY3TKY5E6S"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function addData() {
  await setDoc(doc(db, 'ideas', 'LA'), {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA',
  });
}

export class App extends Component {


  render() {
    addData();
    return <Layout></Layout>;
  }
}
