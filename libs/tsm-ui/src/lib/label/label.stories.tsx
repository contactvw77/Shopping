import type { Meta, StoryObj } from '@storybook/react';
import $Label from './label';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof $Label> = {
  component: $Label,
};
export default meta;
type Story = StoryObj<typeof $Label>;

export const Primary = {
  name: 'Label',
  args: {
    label: 'Treo By Milton Cube Storage Glass Jar',
    wrap: false,
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to Label!/gi)).toBeTruthy();
//   },
// };
