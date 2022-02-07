import { RatingStars } from "components/RatingStars";
import styled from "styled-components";

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: background 300ms;

  padding: 7px 0 14px;
`;

export const BuyButton = styled.button`
  opacity: 0;
  transition: opacity 300ms;
  width: 125px;
  height: 32px;
  background: ${({ theme }) => theme.background.tertiary};
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px auto 0;
  cursor: pointer;
`;

export const Container = styled.div`
  max-width: 216px;
  position: relative;

  margin: 0 auto;

  &:hover {
    ${DataContainer} {
      background: ${({ theme }) => theme.background.product_hover};
    }
    
    ${BuyButton} {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.shelf_product_mobile}) {
    max-width: 140px;

    ${BuyButton} {
      opacity: 1;
    }
  }
`;


export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const PromotionLabel = styled.div`
  width: 81px;
  height: 72px;
  background-image: url("data:image/svg+xml,%3Csvg width='82' height='73' viewBox='0 0 82 73' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M82 72.0408L0.639969 7.62939e-06L82 7.62939e-06L82 72.0408Z' fill='%23F8475F'/%3E%3C/svg%3E");

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  @media screen and (max-width: ${({ theme }) => theme.sizes.shelf_product_mobile}) {
    width: 50px;
    height: 44px;
  }
`;

export const PromotionText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 900;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.shelf_promotion_text};

  margin: 12px 8px 0 0;

  @media screen and (max-width: ${({ theme }) => theme.sizes.shelf_product_mobile}) {
    font-weight: 600;
    font-size: 10px;
    line-height: 13px;
    margin: 7px 5px 0 0;
  }
  
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 12px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.sizes.shelf_product_mobile}) {
    font-size: 10px;
    min-height: 28px;
  }
`;

export const Ratings = styled(RatingStars)`
  display: flex;
  margin: 6px auto 0;

  @media screen and (max-width: ${({ theme }) => theme.sizes.shelf_product_mobile}) {
    margin: 0 auto;
  }
`;

export const ListPrice = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  margin-top: 6px;
  min-height: 16px;

  text-decoration: line-through;

  @media screen and (max-width: ${({ theme }) => theme.sizes.shelf_product_mobile}) {
    font-size: 11px;
    line-height: 15px;
  }
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.sizes.shelf_product_mobile}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Installments = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  min-height: 12px;
`;



export const BuyButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.button_text};
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) => theme.sizes.shelf_product_mobile}) {
    font-family: ${({ theme }) => theme.fonts.tertiary};
    font-weight: 500;
    font-size: 15px;
    line-height: 17px;
  }
`;
