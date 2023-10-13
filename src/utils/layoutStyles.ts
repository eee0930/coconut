import styled from 'styled-components';

export const BaseLayoutContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const CocoContainer = styled.div`
  padding: ${(props) => props.theme.padding.sm};
  min-height: 80vh;
  margin-bottom: 4rem;
  @media (min-width: 768px) {
    padding: ${(props) => props.theme.padding.md};
    margin-bottom: 2rem;
  }
  @media (min-width: 1200px) {
    padding: ${(props) => props.theme.padding.lg};
  }
`;

export const CocoMainContainer = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - ${(props) => props.theme.sideMenu.sm});
  @media (min-width: 768px) {
    max-height: calc(100vh - ${(props) => props.theme.playerH.md});
  }
  @media (min-width: 1200px) {
    max-height: calc(100vh - ${(props) => props.theme.playerH.lg});
  }
`;

export const BaseLayoutMenu = styled.div`
  width: ${(props) => props.theme.sideMenu.md};
  @media (min-width: 1200px) {
    width: ${(props) => props.theme.sideMenu.lg};
  }
`;

export const MobileSideMenuContainer = styled.div`
  @media (min-width: 768px) {
    display: none !important;
  }
`;

export const PageFadeIn = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0;
  background-color: ${(props) => props.theme.main4.side};
  width: 100vw;
  height: 0;
  transform: translate(-50%, -50%);
  -webkit-animation: cocoPageFadeIn 1s ease-in-out;
  animation: cocoPageFadeIn 1s ease-in-out;

  @keyframes cocoPageFadeIn {
    0%,
    10% {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      opacity: 1;
    }
    80% {
      width: 200vw;
      height: 200vw;
      border-radius: 0;
      opacity: 1;
    }
    100% {
      width: 200vw;
      height: 200vw;
      border-radius: 0;
      opacity: 0;
    }
  }
`;
