import Card, { CardProps } from 'components/Card'
import { Grid } from 'components/Grid'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'

import Base from 'templates/Base'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import * as S from './styles'

export type PropertiesTemplateProps = {
  properties: CardProps[]
  filterItems: ItemProps[]
}

const PropertiesTemplate = ({
  filterItems,
  properties = []
}: PropertiesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />
        <section>
          <Grid>
            {properties.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </Grid>
          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Carregar Mais</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default PropertiesTemplate
