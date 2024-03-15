import type {Meta, StoryObj} from '@storybook/react';

import {WibuText} from './WibuText.tsx';
import {ESize} from '../../enums/size.enum.ts';

const meta = {
  title: 'wibu-ui/WibuText',
  component: WibuText,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: [ESize.S, ESize.M, ESize.L, ESize.XL, ESize.XXL, ESize.XXXL],
    },
  },
} satisfies Meta<typeof WibuText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Wibu Text',
    size: ESize.S,
  },
};
