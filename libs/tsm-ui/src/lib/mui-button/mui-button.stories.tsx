import type { Meta, StoryObj } from '@storybook/react';
import { MuiButton } from './mui-button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof MuiButton> = {
  component: MuiButton,
  title: 'Design System/Atoms/MuiButton',
};
export default meta;
type Story = StoryObj<typeof MuiButton>;

export const Primary = {
  args: {},
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to MuiButton!/gi)).toBeTruthy();
//   },
//};
