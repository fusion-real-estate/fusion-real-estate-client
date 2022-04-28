import PropertiesTemplate, {
  PropertiesTemplateProps
} from 'templates/Properties'

import filterItemsMock from 'components/ExploreSidebar/mock'
import propertiesMock from 'components/CardSlider/mock'

export default function PropertyPage(props: PropertiesTemplateProps) {
  return <PropertiesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      properties: propertiesMock,
      filterItems: filterItemsMock
    }
  }
}
