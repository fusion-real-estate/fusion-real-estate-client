import { Story, Meta } from '@storybook/react/types-6-0'
import Facilities, { FacilitiesProps } from '.'

import item from './mock'

export default {
  title: 'Facilities',
  component: Facilities,
  args: { ...item }
} as Meta

export const Basic: Story<FacilitiesProps> = (args) => <Facilities {...args} />
