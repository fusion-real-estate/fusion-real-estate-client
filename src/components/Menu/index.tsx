import { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'

import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile aria-label="Logo" />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <Whatsapp aria-label="Whatsapp" />
        </S.IconWrapper>
        <S.IconWrapper>
          <EmailOutline aria-label="Email" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
