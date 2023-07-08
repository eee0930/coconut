import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  min-width: 50px;
  position: relative;
  display: block;
  border: none;
  background-color: transparent;
  padding: 1.125em 2.5em 0.9375em;
  font-family: ${(props) => props.theme.title}, cursive;
  letter-spacing: -0.04em;
  word-spacing: 0.03em;
  font-stretch: 0.05em;
  font-size: 1.2rem;
  color: ${(props) => props.theme.white.lighter};

  &:hover .button-front,
  &:focus .button-front {
    top: 1px;
    left: 1px;
  }
`;
const ButtonStyle = styled.span`
  width: 100%;
  height: 100%;
  border: ${(props) => props.theme.boxLine.sm};
  display: block;
  padding: 0.3rem 0 0.4rem;
  border-radius: 8px;
  position: absolute;
  @media (min-width: 768px) {
    border: ${(props) => props.theme.boxLine.md};
  }
  @media (min-width: 1200px) {
    border: ${(props) => props.theme.boxLine.lg};
  }
`;

const ButtonBack = styled(ButtonStyle)`
  background-color: ${(props) => props.theme.black.veryDark};
  top: 3px;
  left: 3px;
  z-index: 0;
`;
const ButtonFront = styled(ButtonStyle)`
  background-color: ${(props) => props.theme.main1.main1};
  text-align: center;
  top: 0;
  left: 0;
  z-index: 2;
  transition: top 0.3s ease, left 0.3s ease;
`;

interface ICocoButton {
  text: string;
}

const CocoButton = ({ text }: ICocoButton) => {
  return (
    <Button>
      <ButtonBack></ButtonBack>
      <ButtonFront className="button-front">{text}</ButtonFront>
    </Button>
  );
};

export default CocoButton;
