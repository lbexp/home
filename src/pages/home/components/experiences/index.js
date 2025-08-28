import { DoomerElement } from '../../../../../libs/doomer/index.js';

const Item = new DoomerElement({
  type: 'div',
  attributes: {
    class: 'item-journey',
    'tab-index': '0',
  },
  children: [
    new DoomerElement({
      type: 'div',
      children: [
        new DoomerElement({
          type: 'span',
          attributes: {
            class: 'item-journey-circle',
          },
        }),
        new DoomerElement({
          type: 'span',
          attributes: {
            class: 'item-journey-line',
          },
        }),
      ],
    }),
    new DoomerElement({
      type: 'div',
      attributes: {
        class: 'item-journey-content-wrapper',
      },
      children: [
        new DoomerElement({
          type: 'div',
          attributes: {
            class: 'item-journey-content-value',
          },
          children: [
            new DoomerElement({
              type: 'h3',
              attributes: {
                class: 'item-journey-title',
              },
              children: ['TODO: title'],
            }),
            new DoomerElement({
              type: 'h4',
              attributes: {
                class: 'item-journey-subtitle',
              },
              children: ['TODO: subtitle'],
            }),
            new DoomerElement({
              type: 'p',
              attributes: {
                class: 'item-journey-time',
              },
              children: ['TODO: date'],
            }),
          ],
        }),
        new DoomerElement({
          type: 'span',
          attributes: {
            class: 'item-journey-content-line',
          },
        }),
      ],
    }),
  ],
});

const Experiences = new DoomerElement({
  type: 'section',
  attributes: {
    class: 'experiences',
  },
  children: [
    new DoomerElement({
      type: 'h2',
      attributes: {
        class: 'title',
      },
      children: [
        'My journey',
        new DoomerElement({
          type: 'br',
          attributes: {
            class: 'title-break',
          },
        }),
        'so far:',
      ],
    }),
    new DoomerElement({
      type: 'div',
      attributes: {
        class: 'content',
      },
      children: [
        new DoomerElement({
          type: 'div',
          attributes: {
            class: 'item-wrapper',
          },
          children: [Item],
        }),
        new DoomerElement({
          type: 'div',
          attributes: {
            class: 'item-wrapper',
          },
          children: [Item],
        }),
        new DoomerElement({
          type: 'div',
          attributes: {
            class: 'item-wrapper',
          },
          children: [Item],
        }),
      ],
    }),
  ],
});

export default Experiences;
