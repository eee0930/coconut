import styled from "styled-components";

export const AlbumInfoContainer = styled.div`
  margin: 0 0 1.5rem;
  padding: 0 0 1.5rem;
  border-bottom: 1px solid rgb(227 231 236);
  @media(min-width: 768px) {
    margin: 1rem 0;
    padding: 1rem;
  }
`;
export const AlbumImgSection = styled.div`
padding: 1rem;
text-align: center;
@media(min-width: 768px) {
  padding: 0;
  width: 180px;
}  
@media(min-width: 992px) {
  width: 200px;
} 
@media(min-width: 1200px) {
  width: 220px;
}
`;

export const AlbumImg = styled.img`
width: 100%;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;

export const AlbumInfoSection = styled.div`
color: ${props => props.theme.black.veryDark};
@media(min-width: 768px) {
  padding-left: 1rem;
} 
`;
const AlbumDefault = styled.div`
font-weight: 600;
margin-bottom: 1rem;
color: ${props => props.theme.black.veryDark};
`;
const AlbumSide = styled.div`
font-weight: 500;
font-size: 0.8rem;
margin-bottom: 0.5rem;
color: ${props => props.theme.black.lighter};
`;
export const AlbumTitle = styled(AlbumDefault)`
font-size: 2rem;
`;
export const AlbumArtist = styled(AlbumDefault)`
font-size: 1.2rem;
`;
export const AlbumInfo = styled(AlbumSide)`
 span {
  margin-right: 5px;
 }
`;
export const AlbumDes = styled(AlbumSide)`
line-height: 1.2;
`;
export const MoreBtn = styled.button`
border: 1px solid ${props => props.theme.white.veryDark};
font-size: 12px;
background-color: transparent;
color: ${props => props.theme.black.lighter};
border-radius: 5px;
height: 25px;
width: 50px;
margin-left: 5px
`;
export const ButtonSection = styled.div`
 margin-top: 1rem;
`;
export const AllPlayBtn = styled.button`
cursor: pointer;
min-width: 50px;
width: 130px;
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
color: ${props => props.theme.main2.side};

&:hover .button-front,
&:focus .button-front {
  top: 1px;
  left: 1px;
}
`;
const ButtonStyle = styled.span`
  width: 100%;
  height: 100%;
  border: ${props => props.theme.boxLine.sm};
  display: block;
  padding: 0.3rem 0 0.4rem;
  border-radius: 8px;
  position: absolute;
  @media (min-width: 768px) {
    border: ${props => props.theme.boxLine.md};
  }
  @media (min-width: 1200px) {
    border: ${props => props.theme.boxLine.lg};
  }
`;
export const ButtonBack = styled(ButtonStyle)`
  background-color: ${props => props.theme.black.veryDark};
  top: 3px;
  left: 3px;
  z-index: 0;
`;
export const ButtonFront = styled(ButtonStyle)`
  background-color: ${props => props.theme.main2.main2};
  text-align: center;
  top: 0;
  left: 0;
  z-index: 2;
  transition: top 0.3s ease, left 0.3s ease;
`;

export const TracklistSection = styled.div`
@media(min-width: 768px) {
  padding: 0 0.5rem;
  margin-bottom: 2rem;
}   

`;