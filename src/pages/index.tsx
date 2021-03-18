import { FC } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import db from '../../db.json';

const Home: FC = () => (
  <Layout id='home' title='Tesla UI-Clone'>
    <Header />
    <Main sections={db} />
  </Layout>
);

export default Home;
