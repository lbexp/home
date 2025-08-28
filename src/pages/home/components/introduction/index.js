import { DoomerElement } from '../../../../../libs/doomer/index.js';

const Introduction = new DoomerElement({
  type: 'section',
  attributes: {
    class: 'introduction',
  },
  children: [
    new DoomerElement({
      type: 'h2',
      attributes: {
        class: 'title',
      },
      children: Array.from("Fiqar 'lbexp' Aprialim").map((char, index) => {
        return new DoomerElement({
          type: 'span',
          attributes: {
            style: `display: inline-block; animation: textdrop 0.5s ease ${index / 20}s normal both`,
          },
          children: [char],
        });
      }),
    }),
    new DoomerElement({
      type: 'p',
      attributes: {
        class: 'desc',
      },
      children: [
        new DoomerElement({
          type: 'span',
          attributes: {
            class: 'desc-value',
          },
          children: [
            'Software Engineer who works around web technologies, based in Indonesia.',
          ],
        }),
      ],
    }),
  ],
});

export default Introduction;
