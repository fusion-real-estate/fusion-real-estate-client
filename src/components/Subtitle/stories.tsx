import { Story, Meta } from '@storybook/react/types-6-0'
import Subtitle, { SubtitleProps } from '.'

export default {
  title: 'Subtitle',
  component: Subtitle,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<SubtitleProps> = (args) => <Subtitle {...args} />

Default.args = {
  children: 'Realize seu sonho'
}
