import { Link } from "react-router-dom";
import { IPlayList } from "../../apis/deezerMusicApi";
import { AlbumContainer, ImageSection, Image, TitleSection, AuthorSection } 
  from "../../utils/components/AlbumElementStyles";

interface IPlaylists {
  playlist: IPlayList;
}
function Playlists({ playlist }: IPlaylists) {
  return <>
    <AlbumContainer>
      <ImageSection>
        <Link to={`/playlist/${playlist.id}`}>
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