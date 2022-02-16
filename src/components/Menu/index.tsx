import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'

import Logo from 'components/Logo'

import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <Whatsapp />
      </S.IconWrapper>
      <S.IconWrapper>
        <EmailOutline />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu
