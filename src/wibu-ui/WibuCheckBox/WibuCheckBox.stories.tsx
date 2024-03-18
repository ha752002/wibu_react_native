import { Meta, type StoryObj } from '@storybook/react';
import WibuCheckBox from './WibuCheckBox.tsx';

const meta: Meta = {
  title: 'wibu-checkBox',
  component: WibuCheckBox,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof WibuCheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Checkbox',
  },
};
