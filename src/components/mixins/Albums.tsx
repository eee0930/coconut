import { Link } from "react-router-dom";
import { AlbumContainer, ImageSection, Image, 
  TitleSection, AuthorSection } 
  from "../../utils/components/AlbumElementStyles";
import { IAlbum } from "../../apis/deezerMusicApi";

interface IAlbums {
  album: IAlbum;
}
function Albums({ album }: IAlbums) {
  return <>
    <AlbumContainer>
      <ImageSection>
        <Link to={`/album/${album.id}`}>
          <Image src={`${process.env.PUBLIC_URL}/img/default_paper.png`}
            style={{ backgroundImage: `url(${album.cover_big})` }}/>
        </Link>
      </ImageSection>
      <TitleSection>
        {album.title}
      </TitleSection>
      <AuthorSection>
        {album.artist?.name}
      </AuthorSection>
    </AlbumContainer>
  </>;
};

export default Albums;