import { Doomer, DoomerElement } from './doomer.js';

const app = new Doomer();
const element = new DoomerElement('p', {}, {});

app.render(element);
