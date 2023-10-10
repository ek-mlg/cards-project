import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography.tsx'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subTitle1',
        'subTitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Largest text option',
  },
}

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'H1 text option',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'H2 text option',
  },
}

export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'Link1 text option',
    as: 'a',
  },
}

export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'Link2 text option',
    as: 'a',
  },
}
