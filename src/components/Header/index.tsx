import {
  Container,
  CenterContainer,
  MenuButton,
  LogoLink,
  LogoLinkIcon,
  Search,
  MyAccountButton,
  Minicart,
  LogoHeading,
  LogoHeadingText
} from "./styles"

export const Header = () => {
  return (
    <Container>
      <CenterContainer>
        <MenuButton />
        <LogoHeading>
          <LogoLink to="/">
            <LogoHeadingText>Corebiz</LogoHeadingText>
            <LogoLinkIcon />
          </LogoLink>
        </LogoHeading>
        <Search />
        <MyAccountButton />
        <Minicart />
      </CenterContainer>
    </Container>
  )
}