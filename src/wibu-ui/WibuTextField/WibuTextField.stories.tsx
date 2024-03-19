import { Meta, type StoryObj } from '@storybook/react';
import WibuTextField from './WibuTextField.tsx';

const meta: Meta = {
  title: 'wibu-textField',
  component: WibuTextField,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    message: { control: 'text' },
    disabled: { control: 'boolean' },
    Size: {
      control: {
        type: 'radio',
      },
      options: ['S', 'M', 'L', 'XL'],
    },
  },
} satisfies Meta<typeof WibuTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'textField',
    label: 'textField',
  },
};
