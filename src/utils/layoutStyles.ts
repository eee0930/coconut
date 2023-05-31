import styled from "styled-components";

export const BaseLayoutContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const CocoContainer = styled.div`
  padding: ${props => props.theme.padding.sm};
  @media (min-width: 768px) {
    padding: ${props => props.theme.padding.md};
  }
  @media (min-width: 1200px) {
    padding: ${props => props.theme.padding.lg};
  }
`;

export const CocoMainContainer = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - ${props => props.theme.sideMenu.sm});
  @media (min-width: 768px) {
    max-height: calc(100vh - ${props => props.theme.playerH.md});
  }
  @media (min-width: 1200px) {
    max-height: calc(100vh - ${props => props.theme.playerH.lg});
  } 
`;

export const BaseLayoutMenu = styled.div`
  width: ${props => props.theme.sideMenu.md};
  @media (min-width: 1200px) {
    width: ${props => props.theme.sideMenu.lg};
  } 
`;

export const MobileSideMenuContainer = styled.div`
  @media (min-width: 768px) {
    display: none !important;
  }
`;