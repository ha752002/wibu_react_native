import type {Meta, StoryObj} from '@storybook/react';

import {WibuText} from './WibuText.tsx';

const meta = {
  title: 'wibu-ui/WibuText',
  component: WibuText,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: [
        'title',
        'textXXL',
        'textXL',
        'textL',
        'textM',
        'textS',
        'textXS',
      ],
    },
    appearance: {
      control: {
        type: 'radio',
      },
      options: ['semibold', 'medium', 'regular', 'regularItalic'],
    },
  },
} satisfies Meta<typeof WibuText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Wibu Text',
    variant: 'medium',
    appearance: 'textXXL',
  },
};
