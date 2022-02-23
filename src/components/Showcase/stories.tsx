import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from '.'
import cardsMock from 'components/CardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  cards: cardsMock
}

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutTitle.args = {
  title: 'Title',
  cards: cardsMock
}

export const WithoutSubtitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutSubtitle.args = {
  cards: cardsMock
}
