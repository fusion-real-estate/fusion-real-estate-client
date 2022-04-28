import PropertiesTemplate, {
  PropertiesTemplateProps
} from 'templates/Properties'

export default function PropertyPage(props: PropertiesTemplateProps) {
  return <PropertiesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      properties: []
    }
  }
}
