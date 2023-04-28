import { Layout } from 'components/Layout/Layout';
import { Component } from 'react';
import { IdeasList } from './IdeasList/IdeasList';
import {Search} from 'components/Search/Search'



export class App extends Component {

  render() {
    return <Layout>
      <IdeasList />
      <Search/>
    </Layout>;
  }
}
