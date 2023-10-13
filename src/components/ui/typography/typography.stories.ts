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

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'H3 text option',
  },
}

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body1 text option',
  },
}

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body2 text option',
  },
}

export const SubTitle1: Story = {
  args: {
    variant: 'subTitle1',
    children: 'SubTitle1 text option',
  },
}

export const SubTitle2: Story = {
  args: {
    variant: 'subTitle2',
    children: 'SubTitle2 text option',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text option',
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Overline text option',
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
