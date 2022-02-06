import { BannerSlider } from "components/BannerSlider";
import styled from "styled-components";

export const DesktopBannerSlider = styled(BannerSlider)`
  @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: none;
  }
`;

export const MobileBannerSlider = styled(BannerSlider)`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: flex;
  }
`;

