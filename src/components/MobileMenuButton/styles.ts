import { HamburgerIcon } from "assets/svgs/HamburgerIcon";
import styled from "styled-components";

export const Container = styled.button`
  display: none;
  border: 0;
  background: none;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: flex;
  }
`;

export const Icon = styled(HamburgerIcon)`

`;