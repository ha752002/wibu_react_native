import {Meta, type StoryObj} from '@storybook/react';
import WibuText from './WibuText.tsx';
import {ESize} from '../../enums/wibiSize.enums.ts';

const meta = {
  title: 'wibu-text',
  component: WibuText,
  argTypes: {
    fontSize: {},
  },
} satisfies Meta<typeof WibuText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'text',
    fontSize: ESize.M,
  },
};
