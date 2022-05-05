import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'

import Card from 'components/Card'
import { Grid } from 'components/Grid'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'

import Base from 'templates/Base'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useQueryProperties } from 'graphql/queries/properties'

import * as S from './styles'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'

export type PropertiesTemplateProps = {
  filterItems: ItemProps[]
}

const PropertiesTemplate = ({ filterItems }: PropertiesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryProperties({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 9,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>Carregando...</p>

  const { properties, propertiesConnection } = data

  const hasMoreProperties =
    properties.length < (propertiesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/properties',
      query: items
    })
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 9, start: data?.properties.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
        <section>
          {data?.properties.length ? (
            <>
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
              {hasMoreProperties && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg/"
                      alt="Carregando..."
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Carregar Mais</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <h1>Criar Componente de Empty</h1>
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default PropertiesTemplate
