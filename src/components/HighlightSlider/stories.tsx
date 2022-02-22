import { Story, Meta } from '@storybook/react/types-6-0'

import { HighlightProps } from 'components/Highlight'
import HighlightSlider from '.'

import items from './mock'

export default {
  title: 'HighlightSlider',
  component: HighlightSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<HighlightProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <HighlightSlider items={args} {...args} />
  </div>
)
