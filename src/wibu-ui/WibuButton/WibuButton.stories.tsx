// stories/MyButton.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';

import {WibuButton} from './WibuButton.tsx';

const meta = {
  title: 'wibu-ui/WibuButton',
  component: WibuButton,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['success', 'primary', 'danger', 'warning'],
    },
    appearance: {
      control: {
        type: 'radio',
      },
      options: ['filled', 'outline', 'text', 'tonal'],
    },
  },
} satisfies Meta<typeof WibuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Hello World',
    variant: 'primary',
    appearance: 'filled',
  },
};
