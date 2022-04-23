import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor: 'primary' | 'black'
}

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'primary'
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" />
    {!!label && (
      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default Checkbox
