let id = 0;

export class Doomer {
  constructor() {}

  render(child) {
    const root = document.createElement('div');
    root.setAttribute('id', 'app');
    root.appendChild(child);

    document.body.appendChild(root);
  }
}

export class DoomerElement {
  constructor(type, props, attributes) {
    this.id = id + 1;
    this.type = type;
    this.props = props;
    this.attributes = attributes;
    this.state = {};
    this.children = {};

    return this.create(this.type, this.attributes);
  }

  create(type, attributes) {
    const element = document.createElement(type);
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    return element;
  }
}
