import { Story, Meta } from '@storybook/react/types-6-0'
import SingleInfo, { SingleInfoProps } from '.'

import mockSingleInfo from './mock'

export default {
  title: 'Page Single/SingleInfo',
  component: SingleInfo,
  args: mockSingleInfo
} as Meta

export const Basic: Story<SingleInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: '0 auto' }}>
    <SingleInfo {...args} />
  </div>
)
