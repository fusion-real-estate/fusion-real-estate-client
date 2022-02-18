import { Story, Meta } from '@storybook/react/types-6-0'

import { CardProps } from 'components/Card'
import CardSlider from '.'

const items = [
  {
    title: 'New Apartment Nice Wiew',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 'R$ 1200.000,00'
  },
  {
    title: 'New Apartment Nice Wiew',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 'R$ 1200.000,00'
  },
  {
    title: 'New Apartment Nice Wiew',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 'R$ 1200.000,00'
  },
  {
    title: 'New Apartment Nice Wiew',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 'R$ 1200.000,00'
  },
  {
    title: 'New Apartment Nice Wiew',
    address: '4 W 21st St Flatiron District, New York, NY',
    beds: '4',
    bath: '1',
    garage: '1',
    sqt: '150',
    img:
      'https://creativelayers.net/themes/houzing-html/images/property/fl1.jpg',
    price: 'R$ 1200.000,00'
  }
]

export default {
  title: 'CardSlider',
  component: CardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<CardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CardSlider items={args} {...args} />
  </div>
)
