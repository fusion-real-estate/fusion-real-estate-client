import { Story, Meta } from '@storybook/react/types-6-0'

import { ShowcaseProps } from 'components/Showcase'
import ShowcaseSlider from '.'

import items from './mock'

export default {
  title: 'ShowcaseSlider',
  component: ShowcaseSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<ShowcaseProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ShowcaseSlider items={args} {...args} />
  </div>
)
