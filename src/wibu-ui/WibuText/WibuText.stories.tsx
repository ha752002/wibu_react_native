import { Meta, type StoryObj } from '@storybook/react';
import WibuText from './WibuText.tsx';
import { ESize } from '~/enums/size.enums.ts';

const meta = {
  title: 'wibu-text',
  component: WibuText,
  argTypes: {
    fontSize: {
      control: {
        type: 'radio',
      },
      options: [ESize.S, ESize.M, ESize.L, ESize.XL, ESize.XXL],
    },
  },
} satisfies Meta<typeof WibuText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'text',
    fontSize: ESize.M,
    color: 'bgPrimary',
  },
};
