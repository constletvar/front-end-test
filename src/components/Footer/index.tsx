import { HeadphoneIcon } from "assets/svgs/HeadphoneIcon"
import { MailIcon } from "assets/svgs/MailIcon"
import { VtexLogoIcon } from "assets/svgs/VtexLogoIcon"
import { WhiteLogoIcon } from "assets/svgs/WhiteLogoIcon"
import {
  AddressContainer,
  AddressText,
  AddressTextContainer,
  AddressTitle,
  CenterContainer,
  ContactAnchor,
  ContactAnchorText,
  ContactContainer,
  Container,
  CreatedByContainer,
  CreatedByItem,
  CreatedByText
} from "./styles"

export const Footer = () => {
  return (
    <Container>
      <CenterContainer>
        <AddressContainer>
          <AddressTitle>Localização</AddressTitle>
          <AddressTextContainer>
            <AddressText>Avenida Andrômeda, 2000. Bloco 6 e 8 </AddressText>
            <AddressText>Alphavile SP</AddressText>
            <AddressText>brasil@corebiz.ag</AddressText>
            <AddressText>+55 11 3090 1039</AddressText>
          </AddressTextContainer>
        </AddressContainer>
        <ContactContainer>
          <ContactAnchor to="/">
            <MailIcon />
            <ContactAnchorText>Entre em contato</ContactAnchorText>
          </ContactAnchor>
          <ContactAnchor to="/">
            <HeadphoneIcon />
            <ContactAnchorText>Fale com o nosso consultor online</ContactAnchorText>
          </ContactAnchor>
        </ContactContainer>
        <CreatedByContainer>
          <CreatedByItem>
            <CreatedByText>Created by</CreatedByText>
            <WhiteLogoIcon />
          </CreatedByItem>
          <CreatedByItem>
            <CreatedByText>Powered by</CreatedByText>
            <VtexLogoIcon />
          </CreatedByItem>
        </CreatedByContainer>
      </CenterContainer>
    </Container>
  )
}