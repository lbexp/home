import { Doomer, DoomerElement, useState } from '../libs/doomer/index.js';

const counter = useState(1);
const button = new DoomerElement({
  type: 'button',
  children: ['invoke'],
  attributes: {
    onclick: () => {
      counter.set(counter.value + 1);
    },
  },
});
const counterResult = new DoomerElement({
  type: 'p',
  children: [() => `${counter.value}`],
});
const text = new DoomerElement({
  type: 'p',
  children: ['Counts: ', button, counterResult],
});

const app = new Doomer();
app.render(text);
