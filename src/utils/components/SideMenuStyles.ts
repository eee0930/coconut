import styled from "styled-components";

export const SideMenuContainer = styled.div`
  padding: 1.2rem 1.2rem 0.3rem 0.8rem;
  width: 100%;
  height: calc(100vh - ${props => props.theme.playerH.md});
  @media(min-width: 1200px) {
    padding: 1.2rem 1.2rem 0.8rem 1rem;
    height: calc(100vh - ${props => props.theme.playerH.lg});
  }
`;

export const SideMenuCover = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LogoImg = styled.img`
  position: absolute;
  top: -1.2rem;
  right: -2.5rem;
  width: 70px;
  transform: rotate(20deg);
  z-index: 5;
  @media(min-width: 1200px) {
    right: -2.8rem;
    width: 75px;
  }
`;
const BoxStyle = styled.div`
  background-color: ${props => props.theme.main3.main2};
  border: ${props => props.theme.boxLine.md};
  overflow: hidden;
  height: 100%;
  transition: color 1s ease-in-out 0s, background-color 1s ease-in-out 0s;
  @media(min-width: 1200px) {
    border: ${props => props.theme.boxLine.lg};
  }
`;
export const AnimationBoxCover = styled(BoxStyle)`
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
  width: 100%;
`;
export const AnimationBox = styled.span`
  position: absolute;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  top: -20px;
  left: -20px;
  pointer-events: none;
  background-image: radial-gradient(rgb(26, 26, 26) 30%, transparent 30%), 
    radial-gradient(rgb(26, 26, 26) 30%, transparent 30%);
  background-position: 0px 0px, 20px 20px;
  background-size: 8px 8px;
  transition: inherit;
  animation: 4s linear 0s infinite normal none running bURGXq;
`;
export const SideMenu = styled(BoxStyle)`
  position: relative;
  max-height: 100%;
  z-index: 4;
`;
export const TitleCover = styled.div`
  margin: 1.5rem 0;
  .title {
    font-size: 2.6rem;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.theme.main1.main1};
  }
  @media(min-width: 1200px) {
    .title {
      font-size: 2.7rem;
    }
  }
`;
export const UserSection = styled.div`
  padding: 0 1rem;
  margin-bottom: 1.5rem;
`;
export const UserCover = styled.div`
  color: $blackd;
  padding: 0.2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  .profile {
    width: 45px;
  }
  img {
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }
  @media(min-width: 1200px) {
    .profile {
      width: 50px;
    }
  }
`;
export const Nickname = styled.div`
  padding-left: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
`;
export const DropdownBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px 8px;
  font-size: 1rem;
`;
export const DropdownMenu = styled.div`
  position: absolute;
  opacity: 0;
  display: none;
  top: 50px;
  left: -70px;
  width: 80px;
  height: 30px;
  padding: 0;
  background-color: ${props => props.theme.white.lighter};
  border-radius: 5px;
  text-align: center;
  transform: translateX(50%);
  button {
    background-color: transparent;
    border: none;
    padding: 5px;
    font-size: 1rem;
  }
  &.active {
    opacity: 1;
    top: 25px;
    display: block;
  }
`;
export const LoginCover = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  div { 
    align-self: center;
    padding: 0 0.2rem;
  }
  a {
    color: ${props => props.theme.main1.main1};
    font-size: 1.1rem;
  }
  .button { 
    color: ${props => props.theme.white.lighter};
    width: 95px; 
  }
`;
export const SideMenus = styled.ul`
  padding: 2rem 1.2rem;
  position: relative;
  margin-bottom: 1.5rem;
  &:before, &:after {
    position: absolute;
    left: 1rem;
    right: 1rem;
    width: calc(100% - 2rem);
    border-top: solid 2px rgba(255, 255, 255, 0.5);
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
  li {
    font-family: ${props => props.theme.title};
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: ${props => props.theme.black.darker};
    text-transform: uppercase;
    i, a {transition: color 0.3s ease;}
    i {font-size: 1.2em;}
    span { margin-left: 0.5rem; }
    &:last-child { margin-bottom: 0;}
    &:hover, &.active { color: ${props => props.theme.main1.main2}; }
    .fa-music {
      position: absolute;
      font-size: 0.6em;
      padding: 1px;
      background-color: ${props => props.theme.main3.main2};
      bottom: 1px;
      right: 0px;
    }
  }
  .icon-cover {
    width: 32px;
    text-align: center;
    display: inline-block;
    position: relative;
  }
`;

export const SearchSection = styled.div`
  position: absolute;
  bottom: 1.2rem;
  left: 1rem;
  right: 1rem;
  width: calc(100% - 2rem);
  form, input { height:100%; }
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 5px;
    &::placeholder { color: rgba(0, 0, 0, 0.3); }
  }
`;
export const SearchCover = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  border: solid 3px ${props => props.theme.black.veryDark};
  padding-left: 1.7rem;
  background-color: ${props => props.theme.white.lighter};
  i {
    position: absolute;
    top: 50%;
    left: 5px;
    font-size: 1.2rem;
    transform: translateY(-50%);
  }
`;