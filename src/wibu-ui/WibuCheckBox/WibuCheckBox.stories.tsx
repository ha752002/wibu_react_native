import { Meta, type StoryObj } from '@storybook/react';
import WibuCheckBox from './WibuCheckBox.tsx';

const meta: Meta = {
  title: 'wibu-checkBox',
  component: WibuCheckBox,
  argTypes: {
    checked: {
      control: {
        type: 'radio',
      },
      options: ['default', 'selected', 'unselected'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof WibuCheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: 'default',
    disabled: false,
    label: 'Checkbox',
  },
};
