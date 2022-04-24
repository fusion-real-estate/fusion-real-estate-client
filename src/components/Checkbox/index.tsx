import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor: 'primary' | 'black'
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'primary'
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
