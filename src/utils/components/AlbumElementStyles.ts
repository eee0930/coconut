import styled from "styled-components";

export const AlbumContainer = styled.div`
padding: 4px;
color: ${props=> props.theme.black.darker};
`;
export const ImageSection = styled.div`
margin-bottom: 5px;
`;
export const Image = styled.img`
width: 100%;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;
export const TitleSection = styled.div`
font-size: 1rem;
font-weight: 600;
margin-bottom: 5px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
line-height: 1.2;
`;

export const AuthorSection = styled.div`
font-size: 0.8rem;
color: ${props=> props.theme.black.lighter};
`;