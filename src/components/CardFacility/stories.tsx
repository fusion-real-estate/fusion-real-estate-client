import { Story, Meta } from '@storybook/react/types-6-0'
import { FacilitiesProps } from 'components/Facilities'
import CardFacility from '.'

import items from './mock'

export default {
  title: 'CardFacility',
  component: CardFacility,
  args: { items }
} as Meta

export const Basic: Story<FacilitiesProps[]> = (args) => (
  <CardFacility title="Facilidades" items={args} {...args} />
)
