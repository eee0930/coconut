import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  min-width: 50px;
  position: relative;
  display: block;
  border: none;
  background-color: transparent;
  padding: 1.125em 2.5em 0.9375em;

  font-family: ${props => props.theme.title}, cursive;
  letter-spacing: -0.04em;
  word-spacing: 0.03em;
  font-stretch: 0.05em;
  font-size: 1.2rem;
  color: $white;

  .button-back, .button-front {
    width: 100%;
    height: 100%;
    border: $box-line-sm;
    display: block;
    padding: 0.3rem 0 0.4rem;
    border-radius: 8px;
    position: absolute;
  }.button-back {
    background-color: $black;
    top: 3px;
    left: 3px;
    z-index: 0;
  }
  .button-front {
    background-color: $main11;
    text-align: center;
    top: 0;
    left: 0;
    z-index: 2;
    transition: top 0.3s ease, left 0.3s ease;
  }
  &:hover .button-front,
  &:focus .button-front {
    top: 1px;
    left: 1px;
  }

  @media (min-width: 768px) {
    .button-back, .button-front {
      border: $box-line;
    }
  }
`;

interface ICocoButton {
  text: string;
  handleClick: () => void;
}

const CocoButton = ({ text, handleClick }: ICocoButton) => {
  return (
    <Button onClick={handleClick}>{text}</Button>
  );
}

export default CocoButton;