import { Doomer, DoomerElement, useState } from './doomer.js';

const counter = useState(1);
const button = new DoomerElement({
  type: 'button',
  children: ['click me'],
  attributes: {
    onclick: () => {
      counter.set(counter.value + 1);
    },
  },
});
const text = new DoomerElement({
  type: 'p',
  children: ['Clicks: ', button],
});

const app = new Doomer();
app.render(text);
