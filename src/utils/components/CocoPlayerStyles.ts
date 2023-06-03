import styled from "styled-components";

export const PlayerContainer = styled.div`
  position: fixed;
  bottom: ${props => props.theme.sideMenu.sm};
  left: 0;
  right: 0;
  width: 100vw;
  height: ${props => props.theme.playerH.sm};
  background-color: rgba(97, 96, 154, 0.85);
  backdrop-filter: blur(15px);

  @media (min-width: 768px) {
    position: static;
    height: ${props => props.theme.playerH.md};
    background-color: ${props => props.theme.main1.main1};
    backdrop-filter: none;
  }
  @media(min-width: 1200px) {
    height: ${props => props.theme.playerH.lg};
  }
`;

export const ProgressSection = styled.div`
  border-top: ${props => props.theme.boxLine.sm};
  border-bottom: ${props => props.theme.boxLine.sm};
  width: 100%;
  background-color: #ffffff4d;
  height: 8px;

  @media (min-width: 768px) {
    border-top: ${props => props.theme.boxLine.md};
    border-bottom:  ${props => props.theme.boxLine.md};
    height: 10px;
  }
`;
export const ProgressBar = styled.div`
  height: 100%;
  width: 0%;
  background-color: ${props => props.theme.main2.side};
  transition: width 01s linear;
`; 

export const ControllerSection = styled.div`
  height: calc(100% - 8px);
  width: 100%;

  .btn {
    color: ${props => props.theme.white.darker};
    font-size: 1.4rem;
    background-color: transparent;
    width: 40px;
    height: 40px;
    text-align: center;
  }
  .btn.play, .btn.pause { 
    color: ${props => props.theme.main1.main2};
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    height: calc(100% - 10px);
    .btn.play, .btn.pause { 
      font-size: 2.5rem;
      width: 60px;
      height: 60px;
    }
  }
`;
export const SongInfo = styled.div`
  text-align: left;
  padding: 0 0.5rem;
  > div {
    padding: 0 0.3rem;
  }
  .info {
    color: ${props => props.theme.white.darker};
    .name-cover {
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .artist-cover {
      font-size: 0.7rem;
    }
  } 
`;
export const ControllerCover = styled.div`
  text-align: center;
  .loop-btn {
    color: ${props=> props.theme.main2.main1};
    font-size: 1.1em;
  }
  .loop-btn.active {
    color: ${props=> props.theme.main1.main2};
  }
  button {
    position: relative;
  }
  .btn-text {
    position: absolute;
    display: block;
    width: 15px;
    height: 15px;
    padding: 2px;
    border-radius: 50%;
    background-color: ${props=> props.theme.main1.main2};
    color: ${props=> props.theme.main2.main1};
    top: 2px;
    right: 2px;
    font-size: 11px;
    font-width: 600;
  }
  @media (min-width: 768px) {
    text-align: center;
    .btn {margin: 0 5px;}
    .btn.play i {margin-left: 5px;}
  }
`;
export const ControlOthers = styled.div`
  text-align: right;
  color: ${props => props.theme.white.darker};
  font-size: 0.8rem;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

export const PlayerAlbumImg = styled.img`
  width: 45px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.main1.main1};
  border: none;
  padding: 0;
`;