import { Layout } from 'components/Layout/Layout';
import { Component } from 'react';
import { IdeasList } from './IdeasList/IdeasList';



export class App extends Component {

  render() {
    return <Layout>
      <IdeasList/>
    </Layout>;
  }
}
