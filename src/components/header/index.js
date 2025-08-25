import { DoomerElement } from '../../../libs/doomer/index.js';

export const CONTACTS_ELEMENT_ID = 'contacts';
export const COLOR_MODE_SEQUENCE = [
  { value: 'light', icon: '🌝' },
  { value: 'dark', icon: '🌚' },
];

const Header = new DoomerElement({
  type: 'div',
  attributes: {
    class: 'header',
  },
  children: [
    new DoomerElement({
      type: 'div',
      attributes: {
        class: 'wrapper',
      },
      children: [
        new DoomerElement({
          type: 'a',
          attributes: {
            class: 'logo-wrapper',
          },
          children: [
            new DoomerElement({
              type: 'h1',
              attributes: {
                class: 'logo',
              },
              children: ['lbexp'],
            }),
          ],
        }),
        new DoomerElement({
          type: 'div',
          attributes: {
            class: 'nav',
          },
          children: [
            new DoomerElement({
              type: 'a',
              attributes: {
                href: `#${CONTACTS_ELEMENT_ID}`,
              },
              children: ['Contacts'],
            }),
          ],
        }),
      ],
    }),
    new DoomerElement({
      type: 'div',
      attributes: {
        class: 'pin',
      },
      children: [
        new DoomerElement({
          type: 'div',
          attributes: {
            role: 'button',
            'tab-index': '0',
            class: 'pin-dot',
          },
        }),
      ],
    }),
  ],
});

export default Header;
