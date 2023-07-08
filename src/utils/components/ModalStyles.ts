import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const ModalBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  z-index: 100;
`;
export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 280px;
  text-align: center;
  z-index: 500;
  border: ${(props) => props.theme.boxLine.sm};
  background-color: ${(props) => props.theme.white.lighter};
  transform: translate(-50%, -50%);
  @media (min-width: 768px) {
    border: ${(props) => props.theme.boxLine.md};
    max-width: 320px;
  }
  @media (min-width: 1200px) {
    border: ${(props) => props.theme.boxLine.lg};
  }
`;
export const ModalTitle = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.main2.main1};
  padding: 15px;
  font-size: 20px;
  font-family: ${(props) => props.theme.title};
  color: ${(props) => props.theme.main2.side};
`;
export const CloseButton = styled.button`
  color: ${(props) => props.theme.black.darker};
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
`;
export const ModalBody = styled.div`
  padding: 15px;
  font-size: 12px;
  color: ${(props) => props.theme.black.lighter};
`;
