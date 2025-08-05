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
  constructor(params) {
    const { type, props = {}, attributes = {}, children = [] } = params;

    this.id = id + 1;
    this.type = type;
    this.props = props;
    this.attributes = attributes;
    this.state = {};
    this.children = children;

    return this.create({
      type: this.type,
      attributes: this.attributes,
      children: this.children,
    });
  }

  create({ type, attributes, children }) {
    const element = document.createElement(type);

    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    children.forEach((child) => {
      console.log(child);
      if (child?.nodeType === Node.ELEMENT_NODE) {
        element.appendChild(child);
      } else {
        element.textContent += child;
      }
    });

    return element;
  }
}
