import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from '.'
import item from './mock'

export default {
  title: 'Showcase',
  component: Showcase,
  args: { ...item }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Showcase {...args} />
  </div>
)
