import { MagnifyingGlassIcon } from "assets/svgs/MagnifyingGlassIcon";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 718px;
  width: 100%;
`;

export const SearchInput = styled.input`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 13px;
  
  width: 100%;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 5px;
  border: 0;
  background: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const SearchIcon = styled(MagnifyingGlassIcon)`

`;