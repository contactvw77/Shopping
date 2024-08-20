import type { Meta, StoryObj } from '@storybook/react';
import { TsmUi } from './tsm-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TsmUi> = {
  component: TsmUi,
  title: 'TsmUi',
};
export default meta;
type Story = StoryObj<typeof TsmUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TsmUi!/gi)).toBeTruthy();
  },
};
