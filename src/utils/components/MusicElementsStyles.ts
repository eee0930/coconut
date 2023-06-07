import styled from "styled-components";

export const TrackEleSection = styled.div`
padding: 5px;
background-color: transparent;
margin-bottom: 5px;
&:hover {
  background-color: ${props => props.theme.white.darker};
}
&:hover .play-btn {
  opacity: 1;
}
`;

export const TrackEleCover = styled.div`
color: ${props => props.theme.black.darker};
@media(min-width: 768px) {
  padding-right: 0.5rem;
}
`;
export const AlbumImage = styled.div`
position: relative;
`;
export const PlayBtn = styled.button`
opacity: 0;
border: none;
cursor: pointer;
transition: opacity 0.2s ease;
position: absolute;
width: 55px;
height: 55px;
border-radius: 3px;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 1;
background-color: rgba(0, 0, 0, 0.2);
font-size: 1.5rem;
color: ${props => props.theme.white.lighter};
`;
export const CheckList = styled.div`
width: 30px;
`;
export const TrackRank = styled.div`
width: 30px;
text-align: center; 
font-size: 1rem;
font-weight: 600;
`;
export const AlbumInfo = styled.div`
max-width: calc(100% - 115px);
> div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2;
}
`;

export const NameCover = styled.div`
font-size: 1.05rem;
font-weight: 600;
margin-bottom: 3px;
`;
export const ArtistCover = styled.div`
font-size: 0.85rem;
`;
export const PlaylistAlbumImg = styled.img`
width: 55px;
border-radius: 3px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-color: ${props => props.theme.main1.main1};
border: none;
padding: 0;
`;