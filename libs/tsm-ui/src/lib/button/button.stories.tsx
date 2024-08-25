import type { Meta, StoryObj } from '@storybook/react';
import $Button from './button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof $Button> = {
  component: $Button,
  title: 'Design System/Atoms/Button',
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'success', 'warnings', 'danger', 'neutral'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof $Button>;

export const Primary = {
  name: 'Button',
  args: {
    label: 'Button',
    color: 'primary', //default value
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
//   },
// };
