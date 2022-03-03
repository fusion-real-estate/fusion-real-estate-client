import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent, { TextContentProps } from '.'

import textMock from './mock'

export default {
  title: 'Page Single/TextContent',
  component: TextContent,
  args: textMock
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
