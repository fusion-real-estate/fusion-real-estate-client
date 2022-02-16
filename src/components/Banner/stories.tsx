import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://creativelayers.net/themes/houzing-html/images/home/1.jpg',
    title: 'É muito bom estar em casa!',
    subtitle: '<h3>Encontre sua casa perfeita</h3>'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
