import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  args: {
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/ep1.jpg',
    title: 'Casa',
    subtitle: '700 Imóveis'
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Showcase {...args} />
  </div>
)
