import Property, { PropertyTemplateProps } from 'templates/Property'

import galleryMock from 'components/Gallery/mock'

export default function Index(props: PropertyTemplateProps) {
  return <Property {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'luxury-family-loft-by-victoria-park' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  const descriptionHTML = `<p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
      tempore. Nulla accusamus tempora quaerat repellat accusantium
      voluptatem reprehenderit iste dolorem quam rerum laboriosam architecto
      eos, fugiat ab vero facilis soluta.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
      tempore. Nulla accusamus tempora quaerat repellat accusantium
      voluptatem reprehenderit iste dolorem quam rerum laboriosam architecto
      eos, fugiat ab vero facilis soluta.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
      tempore. Nulla accusamus tempora quaerat repellat accusantium
      voluptatem reprehenderit iste dolorem quam rerum laboriosam architecto
      eos, fugiat ab vero facilis soluta.
    </p>
    `

  return {
    props: {
      propertyInfo: {
        title: 'Luxury Family Loft by Victoria Park',
        subtitle: 'Quincy St, Brooklyn, NY, USA',
        feature: 'Destaque',
        status: 'Venda',
        offer: 'Oferta',
        beds: '4 Quartos',
        bath: '1 Banheiros',
        garage: '1 Garagem',
        sqt: '150 Metros',
        price: '1200.000,00',
        type: 'Apartamento'
      },
      gallery: galleryMock,
      description: descriptionHTML
    }
  }
}
