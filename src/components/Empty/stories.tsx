import { Story, Meta } from '@storybook/react/types-6-0'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta

export const Basic: Story<EmptyProps> = (args) => <Empty {...args} />

Basic.args = {
  title: 'Whoops: página não encontrada!',
  description: 'Volte e confira mais imóveis',
  hasLink: true
}
