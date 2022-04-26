import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import items from './mock'

export default {
  title: 'Sidebar/ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items
  }
} as Meta

export const Basic: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
)
