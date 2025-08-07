/*
 * DOOMER ROOT & ELEMENT
 */

let id = 0;

function _renderLoop(callback) {
  setTimeout(() => {
    callback();
    _renderLoop(callback);
  }, 1000);
}

function _diff(current, old) {
  const currentKeys = Object.keys(current);
  const oldKeys = Object.keys(old);

  if (currentKeys.length === 0 && oldKeys.length === 0) {
    return false;
  }

  if (currentKeys.length !== oldKeys.length) {
    return true;
  }

  currentKeys.forEach((key) => {
    const currentValue = current[key];
    const oldValue = old[key];

    if (!oldValue) {
      return true;
    }

    // TODO:
    // Add comparison for the non object type
    // Maybe with stringify and compare string

    if (typeof currentValue !== oldValue) {
      return true;
    }

    if (typeof currentValue === 'object' && typeof oldValue === 'object') {
      return _diff(currentValue, oldValue);
    }

    if (typeof currentValue === 'array' && typeof oldValue === 'array') {
      return _diff(currentValue, oldValue);
    }

    if (currentValue !== oldValue) {
      return true;
    }
  });

  return false;
}

export class Doomer {
  constructor() {}

  render(child) {
    const root = document.createElement('div');
    const childElement = child.mount();
    root.setAttribute('id', 'app');
    document.body.appendChild(root);
    root.appendChild(childElement);

    _renderLoop(() => {
      const diff = _diff(states, oldStates);
      if (diff) {
        root.innerHTML = '';
        const childElement = child.mount();
        root.appendChild(childElement);
        oldStates = JSON.parse(JSON.stringify(states));
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
      if (key === 'onclick') {
        element.addEventListener('click', this.attributes[key]);
        break;
      }

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

/*
 * DOOMER STATES
 */

let states = {};
let oldStates = {};
let stateId = -1;

export function useState(initial) {
  stateId++;

  const set = (value) => {
    states[stateId].value = value;
  };

  states[stateId] = { value: initial, set };

  return states[stateId];
}
