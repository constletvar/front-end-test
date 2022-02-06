import { UserIcon } from "assets/svgs/UserIcon";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  
`;

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.secondary};

  white-space: nowrap;
`;

export const Icon = styled(UserIcon)`
  margin-right: 5px;
  display: flex;
`;