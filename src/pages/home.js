import { DoomerElement } from '../../libs/doomer/index.js';

import Header from '../components/header.js';
import Footer from '../components/footer.js';

const Home = new DoomerElement({
  type: 'div',
  children: [Header, 'Body', Footer],
});

export default Home;
