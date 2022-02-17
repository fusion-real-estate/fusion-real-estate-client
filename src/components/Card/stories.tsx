import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
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
} as Meta

export const Basic: Story<CardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Card {...args} />
  </div>
)
