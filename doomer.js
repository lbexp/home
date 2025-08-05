let states = {};
let oldStates = null;
let id = 0;

function _renderLoop(callback) {
  setTimeout(() => {
    callback();
    _renderLoop(callback);
  }, 1000);
}

export class Doomer {
  constructor() {}

  render(child) {
    const root = document.createElement('div');
    root.setAttribute('id', 'app');
    document.body.appendChild(root);

    _renderLoop(() => {
      if (states !== oldStates) {
        const childElement = child.mount();
        root.appendChild(childElement);
        oldStates = states;
      }
    });
  }
}

export class DoomerElement {
  constructor(params) {
    const { type, attributes = {}, children = [] } = params;

    this.id = id + 1;
    this.type = type;
    this.attributes = attributes;
    this.children = children;
  }

  mount() {
    const element = document.createElement(this.type);

    for (const key in this.attributes) {
      element.setAttribute(key, this.attributes[key]);
    }

    this.children.forEach((child) => {
      if (typeof child === 'string') {
        element.textContent += child;
      } else {
        const childElement = child.mount();
        element.appendChild(childElement);
      }
    });

    return element;
  }
}
