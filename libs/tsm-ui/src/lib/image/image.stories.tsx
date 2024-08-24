import type { Meta, StoryObj } from '@storybook/react';
import $Image from './image';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof $Image> = {
  component: $Image,
  title: 'Design System/Atoms/Image',
  argTypes: {
    shape: {
      control: 'radio',
      options: ['round', 'square'],
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof $Image>;

export const Primary = {
  name: 'Image',
  args: {
    alt: 'Alt text',
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to Image!/gi)).toBeTruthy();
//   },
// };
