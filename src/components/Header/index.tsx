import {
  Container,
  CenterContainer,
  MenuButton,
  LogoLink,
  LogoLinkIcon,
  Search,
  MyAccountButton,
  Minicart
} from "./styles"

export const Header = () => {
  return (
    <Container>
      <CenterContainer>
        <MenuButton />
        <LogoLink to="/">
          <LogoLinkIcon />
        </LogoLink>
        <Search />
        <MyAccountButton />
        <Minicart />
      </CenterContainer>
    </Container>
  )
}