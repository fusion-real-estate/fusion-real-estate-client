import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'

import * as S from './styles'

const ExploreSidebar = () => (
  <S.Wrapper>
    <Heading lineBottom>Preço</Heading>

    <Checkbox name="under-200" label="Abaixo de R$200" labelFor="under-200" />
    <Checkbox name="under-300" label="Abaixo de R$300" labelFor="under-300" />
    <Checkbox name="under-400" label="Abaixo de R$400" labelFor="under-400" />
    <Checkbox name="under-500" label="Abaixo de R$500" labelFor="under-500" />
    <Checkbox name="under-600" label="Abaixo de R$600" labelFor="under-600" />

    <Heading lineBottom>Ordenar</Heading>
    <Radio
      id="high-to-low"
      name="sort-by"
      label="Menor Preço"
      labelFor="high-to-low"
      value="high-to-low"
    />
    <Radio
      id="low-to-high"
      name="sort-by"
      label="Maior Preço"
      labelFor="low-to-high"
      value="low-to-high"
    />

    <Heading lineBottom>Categoria</Heading>
    <Checkbox name="house" label="Casa" labelFor="house" />
    <Checkbox name="apartment" label="Apartamento" labelFor="apartment" />

    <Heading lineBottom>Localidade</Heading>
    <Checkbox name="sao-paulo" label="São Paulo" labelFor="sao-paulo" />
    <Checkbox
      name="minas-gerais"
      label="Minas Gerais"
      labelFor="minas-gerais"
    />
  </S.Wrapper>
)

export default ExploreSidebar
