import { Doomer, DoomerElement } from './doomer.js';

const app = new Doomer();
const child = new DoomerElement({
  type: 'p',
  children: ['Hello world!'],
});
const element = new DoomerElement({
  type: 'p',
  children: [child],
});

app.render(element);
