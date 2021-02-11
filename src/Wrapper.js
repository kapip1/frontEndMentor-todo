import styled, { css } from 'styled-components';

import BannerDesktopDark from './assets/bg-desktop-dark.jpg';
import BannerDesktopLight from './assets/bg-desktop-light.jpg';
import BannerMobileDark from './assets/bg-mobile-dark.jpg';
import BannerMobileLight from './assets/bg-mobile-light.jpg';

const Wrapper = styled.div`
  background-color: hsl(236, 33%, 92%);
  background-image: url(${BannerMobileLight});
  background-repeat: no-repeat;
  background-size: 100vw 20rem;
  min-height: 100vh;
  transition: 0.4s;
  @media (min-width: 1440px) {
    background-image: url(${BannerDesktopLight});
    background-size: 100vw 30rem;
  }
  ${({ darkMode }) =>
    darkMode
      ? css`
          background-color: hsl(235, 21%, 11%);
          background-image: url(${BannerMobileDark});
          @media (min-width: 1440px) {
            background-image: url(${BannerDesktopDark});
          }
        `
      : null}
`;
export default Wrapper;
