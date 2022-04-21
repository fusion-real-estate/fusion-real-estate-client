import { Story, Meta } from '@storybook/react/types-6-0'
import Facilities, { FacilitiesProps } from '.'

import mockFacilities from './mock'

export default {
  title: 'Facilities',
  component: Facilities,
  args: mockFacilities
} as Meta

export const Basic: Story<FacilitiesProps> = (args) => <Facilities {...args} />
