import { DoomerElement } from '../../libs/doomer/index.js';

import Header from '../components/header/index.js';
import Footer from '../components/footer/index.js';

const Home = new DoomerElement({
  type: 'div',
  children: [Header, 'Body', Footer],
});

export default Home;
