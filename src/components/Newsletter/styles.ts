import styled, { css } from "styled-components";

interface ErrorProps {
  error: boolean;
}

export const Container = styled.article`
  background: ${({ theme }) => theme.background.secondary};
  height: 146px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 69px;

  padding-top: 14px;

  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    min-height: 276px;
    height: auto;
    padding: 16px 16px;
    margin-top: 40px;
  }
`;

export const Title = styled.h2`

`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 16px;

  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    flex-direction: column;
    width: 100%;
    margin-top: 19px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-right: 8px;
  
  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 100%;
    margin-right: 0;

    & + label {
      margin-top: 22px;
    }
  }
`;

export const Input = styled.input<ErrorProps>`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.background.text_input_background};
  border: 0;
  border-radius: 5px;
  padding-left: 16px;
  
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 12px;

  ${({ error }) => error && css`
    border: 1px solid ${({ theme }) => theme.colors.attention};
  `}
`;

export const ErrorText = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  color: ${({ theme }) => theme.colors.attention};

  margin-top: 8px;
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 140px;
  height: 48px;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.background.tertiary};

  cursor: pointer;

  transition: background 300ms;

  &:hover {
    background: ${({ theme }) => theme.background.button_hover};
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.tablet}) {
    margin-top: 7px;
    width: 100%;
  }
`;

export const SubmitButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.button_text};
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const SuccessTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.primary};

  text-align: center;

`;

export const SuccessParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.tertiary};

  text-align: center;
`;

export const ReturnButton = styled.button`
  max-width: 328px;
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.background.tertiary};
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  margin-top: 15px;

  transition: background 300ms;

  &:hover {
    background: ${({ theme }) => theme.background.button_hover};
  }
`;

export const ReturnButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.button_text};
`;