import { LogoIcon } from 'assets/svgs/LogoIcon';
import { HeaderButton } from 'components/HeaderButton';
import { MinicartButton } from 'components/MinicartButton';
import { MobileMenuButton } from 'components/MobileMenuButton';
import { SearchBar } from 'components/SearchBar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 23px;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    padding: 0 20px 23px;
  }
`;

export const CenterContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.max_width};
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    grid-template-areas:
    "menu logo cart"
    "search search search";
  }
`;


export const MenuButton = styled(MobileMenuButton)`
  grid-area: menu;
  height: 25px;
  align-items: flex-end;
`;

export const LogoLink = styled(Link)`
  @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    grid-area: logo;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`;

export const LogoLinkIcon = styled(LogoIcon)`
  @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    max-width: 109px;
    height: 25px;
  }
`;

export const Search = styled(SearchBar)`
  margin: 0 20px;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    grid-area: search;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 15px auto 0;
  }
`;

export const MyAccountButton = styled(HeaderButton)`
  margin: 0 20px;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: none;
  }
`;

export const Minicart = styled(MinicartButton)`
  @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    grid-area: cart;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 25px;
  }
`;


