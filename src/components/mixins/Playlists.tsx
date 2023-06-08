import { Link } from "react-router-dom";
import { AlbumContainer, ImageSection, Image, 
  TitleSection, AuthorSection } 
  from "../../utils/components/AlbumElementStyles";
import { IPlayList } from "../../apis/deezerMusicApi";

interface IPlaylists {
  playlist: IPlayList;
}
function Playlists({ playlist }: IPlaylists) {
  return <>
    <AlbumContainer>
      <ImageSection>
        <Link to={`/album/${playlist.id}`}>
          <Image src={`${process.env.PUBLIC_URL}/img/default_paper.png`}
            style={{ backgroundImage: `url(${playlist.picture_big})` }}/>
        </Link>
      </ImageSection>
      <TitleSection>
        {playlist.title}
      </TitleSection>
      <AuthorSection>
        {playlist.creation_date.split(" ")[0]}
      </AuthorSection>
    </AlbumContainer>
  </>;
};

export default Playlists;