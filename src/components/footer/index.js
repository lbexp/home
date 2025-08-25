import { DoomerElement } from '../../../libs/doomer/index.js';

const CONTACTS_ELEMENT_ID = 'contacts';

const Footer = new DoomerElement({
  type: 'div',
  attributes: {
    class: 'footer',
  },
  children: [
    new DoomerElement({
      type: 'div',
      attributes: {
        class: 'wrapper',
      },
      children: [
        new DoomerElement({
          type: 'div',
          attributes: {
            id: CONTACTS_ELEMENT_ID,
            class: 'social-media-wrapper',
          },
          children: [
            new DoomerElement({
              type: 'a',
              attributes: {
                class: 'linkedin-anchor',
              },
              children: [
                // TODO: Add mechanism to inject SVG
                'Linkedin',
              ],
            }),
            new DoomerElement({
              type: 'a',
              attributes: {
                class: 'github-anchor',
              },
              children: [
                // TODO: Add mechanism to inject SVG
                'Github',
              ],
            }),
          ],
        }),
        new DoomerElement({
          type: 'p',
          attributes: {
            class: '',
          },
          children: [
            'Contact me: ',
            new DoomerElement({
              type: 'a',
              attributes: {
                class: 'mail',
                href: 'mailto:fiqarapr@gmail.com',
              },
              children: ['fiqarapr@gmail.com'],
            }),
          ],
        }),
      ],
    }),
  ],
});

export default Footer;
