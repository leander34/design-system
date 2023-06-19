import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/leander34.png',
    alt: 'Leander Silveira',
  },
  argTypes: {
    src: {
      description: 'Image',
      table: {
        type: {
          summary: 'Olá',
          details: 'ok',
        },
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const Withfallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
