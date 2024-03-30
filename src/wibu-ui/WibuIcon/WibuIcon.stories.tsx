import { Meta, type StoryObj } from '@storybook/react';
import { ESize } from '~/enums/size.enums.ts';
import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
import { Colors } from '~/themes/Variable.ts';
import { EIconName } from '~/enums/icon.enum.ts';

const meta = {
  title: 'wibu-icon',
  component: WibuIcon,

  argTypes: {
    size: {
      options: ESize,
      control: {
        type: 'select',
      },
    },
    name: {
      options: EIconName,
      control: { type: 'select' },
    },
    color: {
      options: Colors,
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof WibuIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: EIconName.AIRPLAY,
    size: ESize.XXXL,
    color: Colors.fgTextColor,
  },
};
