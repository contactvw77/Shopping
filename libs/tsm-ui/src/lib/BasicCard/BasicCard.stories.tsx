import type { Meta, StoryObj } from '@storybook/react';

import BasicCard from './BasicCard';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

//import the required stories
import * as Image from '../image/image.stories';
import * as Label from '../label/label.stories';

const meta: Meta<typeof BasicCard> = {
  component: BasicCard,
  title: 'Design System/Molecules/BasicCard',
  argTypes: {
    shape: {
      control: 'radio',
      options: ['round', 'square'],
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    src: {
      control: 'file',
    },
  },
};
export default meta;
type Story = StoryObj<typeof BasicCard>;

export const Primary = {
  name: 'BasicCard',
  args: {
    shape: Image.Primary.args.shape,
    size: Image.Primary.args.size,
    alt: Image.Primary.args.alt,
    src: Image.Primary.args.src,
    label: Label.Primary.args.label,
    wrap: Label.Primary.args.wrap,
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to BasicCard!/gi)).toBeTruthy();
//   },
// };
