import { DoomerElement } from '../../../libs/doomer/index.js';

import Header from '../../components/header/index.js';
import Footer from '../../components/footer/index.js';
import Introduction from './components/introduction/index.js';
import Experiences from './components/experiences/index.js';

const Home = new DoomerElement({
  type: 'div',
  attributes: {
    class: 'home-page',
  },
  children: [
    Header,
    new DoomerElement({
      type: 'div',
      attributes: {
        class: '',
      },
      children: [
        new DoomerElement({
          type: 'div',
          attributes: {
            class: 'section',
          },
          children: [Introduction],
        }),
        new DoomerElement({
          type: 'div',
          attributes: {
            class: 'section',
          },
          children: [Experiences],
        }),
      ],
    }),
    Footer,
  ],
});

export default Home;
