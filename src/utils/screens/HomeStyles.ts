import styled from "styled-components";

export const MobileLogoSection = styled.div`
img {
  width: 50px;
}
.title {
  font-size: 2rem;
  color: $main11;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  span { margin-top: 5px; }
}

@media (min-width: 768px) {
	display: none !important;
}
`;
export const MemberCover = styled.div`
padding: 5px;
img {
  margin-top: 7px;
  width: 45px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
`;
export const LogoutBtn = styled.button`
border: none;
background-color: transparent;
font-weight: 600;
max-width: 80px;
`;
export const Nickname = styled.div`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
line-height: 1.2;
`;

export const MainContent = styled.div`
margin: 2rem 0rem 3rem;
h2 {
  font-size: 1.6rem;
  color: $blackd;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
@media(min-width:768px) {
  margin: 2rem 1.2rem 3rem;
}
`;
