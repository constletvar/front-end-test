import { CartIcon } from "assets/svgs/CartIcon";
import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Icon = styled(CartIcon)`

`;

export const Quantity = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.background.minicart_quantity};
  margin-left: 5px;
`;

export const QuantityText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  color: ${({ theme }) => theme.colors.minicart_quantity_text};
`;