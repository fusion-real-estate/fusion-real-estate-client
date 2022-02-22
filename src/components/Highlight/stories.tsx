import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg',
    title: 'Casa',
    subtitle: '700 Imóveis'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Highlight {...args} />
  </div>
)
