import { useState } from 'react'
import Link from 'next/link'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile aria-label="Logo" />
      </S.LogoWrapper>

      <S.MenuGroup>
        <MediaMatch greaterThan="medium">
          <S.MenuNav>
            <Link href="/" passHref>
              <S.MenuLink href="#">Home</S.MenuLink>
            </Link>
            <S.MenuLink href="#">Sobre</S.MenuLink>
            <Link href="/properties" passHref>
              <S.MenuLink>Imóveis</S.MenuLink>
            </Link>
            <S.MenuLink href="#">Faq</S.MenuLink>
            <S.MenuLink href="#">Contato</S.MenuLink>
          </S.MenuNav>
        </MediaMatch>
        <S.IconWrapper>
          <Whatsapp aria-label="Whatsapp" />
        </S.IconWrapper>
        <S.IconWrapper>
          <EmailOutline aria-label="Email" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Sobre</S.MenuLink>
          <Link href="/properties" passHref>
            <S.MenuLink>Imóveis</S.MenuLink>
          </Link>
          <S.MenuLink href="#">Faq</S.MenuLink>
          <S.MenuLink href="#">Contato</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
