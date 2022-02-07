import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.footer`
  height: 223px;

  background: ${({ theme }) => theme.background.tertiary};
  padding: 25px 16px 10px;

  border-bottom: 10px solid ${({ theme }) => theme.background.footer_border};

  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    height: auto;
  }
`;

export const CenterContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.max_width};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    flex-direction: column;
  }
`;

export const AddressContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 100%;
  }
`;

export const AddressTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.footer_text_color};

  &::after {
    content: '';
    display: block;
    width: 45px;
    height: 5px;
    background: ${({ theme }) => theme.colors.footer_text_color};
    margin: 16px 0 4px;
  }
`;

export const AddressTextContainer = styled.address`
  display: flex;
  flex-direction: column;
  font-style: normal;
`;

export const AddressText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 13px;
  line-height: 12px;

  color: ${({ theme }) => theme.colors.footer_text_color};
  margin-top: 14px;
`;

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    margin-top: 50px;
  }
`;

export const ContactAnchor = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 195px;
  height: 38px;
  border-radius: 5px;
  margin-bottom: 25px;

  background: ${({ theme }) => theme.background.primary};

  text-decoration: none;

  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    margin-bottom: 0;

    & + a {
      margin-top: 26px;
    }
  }

`;

export const ContactAnchorText = styled.span`
  width: 127px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  margin-left: 17px;
`;

export const CreatedByContainer = styled.section`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 100%;
    justify-content: space-between;
    padding: 0 48px;
    margin-top: 24px;
  }
`;

export const CreatedByItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;

  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    margin-left: 0;
  }
`;

export const CreatedByText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.footer_text_color};
`;