import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSidebar from '.'

export default {
  title: 'Sidebar/ExploreSidebar',
  component: ExploreSidebar
} as Meta

export const Basic: Story = () => <ExploreSidebar />
