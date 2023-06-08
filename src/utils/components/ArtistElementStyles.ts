import styled from "styled-components";

export const ArtistContainer = styled.div`
padding: 0 8px 8px;
margin-bottom: 0.5rem;
padding-left: 0;
color: ${props=> props.theme.black.darker};
`;
export const ImageSection = styled.div`
padding: 0 1rem;
`;
export const Image = styled.img`
width: 100%;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
border-radius: 50%;
`;
export const ArtistSection = styled.div`
font-size: 1rem;
font-weight: 600;
margin-bottom: 5px;
text-align: center;
line-height: 1.2;
color: ${props=> props.theme.black.darker};
`;