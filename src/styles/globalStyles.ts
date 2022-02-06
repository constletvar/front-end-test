import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  /* lato-regular - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/lato/lato-v22-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/lato/lato-v22-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/lato/lato-v22-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/lato/lato-v22-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/lato/lato-v22-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/lato/lato-v22-latin-regular.svg#Lato') format('svg'); /* Legacy iOS */
  }

  /* lato-700 - latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/lato/lato-v22-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/lato/lato-v22-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/lato/lato-v22-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/lato/lato-v22-latin-700.woff') format('woff'), /* Modern Browsers */
        url('/fonts/lato/lato-v22-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/lato/lato-v22-latin-700.svg#Lato') format('svg'); /* Legacy iOS */
  }


  /* nunito-regular - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/nunito/nunito-v22-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/nunito/nunito-v22-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/nunito/nunito-v22-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/nunito/nunito-v22-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/nunito/nunito-v22-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/nunito/nunito-v22-latin-regular.svg#Nunito') format('svg'); /* Legacy iOS */
  }

  /* nunito-600 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/nunito/nunito-v22-latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/nunito/nunito-v22-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/nunito/nunito-v22-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/nunito/nunito-v22-latin-600.woff') format('woff'), /* Modern Browsers */
        url('/fonts/nunito/nunito-v22-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/nunito/nunito-v22-latin-600.svg#Nunito') format('svg'); /* Legacy iOS */
  }

  /* nunito-700 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/nunito/nunito-v22-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/nunito/nunito-v22-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/nunito/nunito-v22-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/nunito/nunito-v22-latin-700.woff') format('woff'), /* Modern Browsers */
        url('/fonts/nunito/nunito-v22-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/nunito/nunito-v22-latin-700.svg#Nunito') format('svg'); /* Legacy iOS */
  }

  /* nunito-900 - latin */
  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/nunito/nunito-v22-latin-900.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/nunito/nunito-v22-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/nunito/nunito-v22-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/nunito/nunito-v22-latin-900.woff') format('woff'), /* Modern Browsers */
        url('/fonts/nunito/nunito-v22-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/nunito/nunito-v22-latin-900.svg#Nunito') format('svg'); /* Legacy iOS */
  }

  /* ubuntu-500 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/ubuntu/ubuntu-v19-latin-500.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/ubuntu/ubuntu-v19-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/ubuntu/ubuntu-v19-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/ubuntu/ubuntu-v19-latin-500.woff') format('woff'), /* Modern Browsers */
        url('/fonts/ubuntu/ubuntu-v19-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/ubuntu/ubuntu-v19-latin-500.svg#Ubuntu') format('svg'); /* Legacy iOS */
  }



  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input {
    &:focus {
      outline: none;
    }
  }

  svg {
    overflow: visible;
  }

  button {
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.background.bullets};
    opacity: 1;
    width: 10px;
    height: 10px;

    @media screen and (max-width: ${({ theme }) => theme.sizes.mobile}) {
      width: 7px;
      height: 7px;
    }
  }
  
  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.background.bullets_active};
  }

`;