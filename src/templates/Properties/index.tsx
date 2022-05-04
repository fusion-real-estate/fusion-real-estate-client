import { useQuery } from '@apollo/client'
import Card, { CardProps } from 'components/Card'
import { Grid } from 'components/Grid'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'

import Base from 'templates/Base'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import {
  QueryProperties,
  QueryPropertiesVariables
} from 'graphql/generated/QueryProperties'

import { QUERY_PROPERTIES } from 'graphql/queries/properties'

import * as S from './styles'

export type PropertiesTemplateProps = {
  properties?: CardProps[]
  filterItems: ItemProps[]
}

const PropertiesTemplate = ({ filterItems }: PropertiesTemplateProps) => {
  const { data, loading, fetchMore } = useQuery<
    QueryProperties,
    QueryPropertiesVariables
  >(QUERY_PROPERTIES, {
    variables: { limit: 1 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 1, start: data?.properties.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <section>
            <Grid>
              {data?.properties.map((item) => (
                <Card
                  key={item.name}
                  title={item.name}
                  slug={item.slug}
                  address={item.street}
                  img={item.cover!.url}
                  beds={item.bathrooms}
                  bath={item.rooms}
                  garage={item.garage}
                  sqt={item.sqt}
                  price={item.price}
                />
              ))}
            </Grid>
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Carregar Mais</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default PropertiesTemplate
