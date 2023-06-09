import { Link } from "react-router-dom";
import { IArtist } from "../../apis/deezerMusicApi";
import { ArtistContainer, ImageSection, Image, ArtistSection } 
  from "../../utils/components/ArtistElementStyles";

interface IArtists {
  artist: IArtist;
}
function Artists({ artist } : IArtists) {
  return <ArtistContainer>
    <Link to={`/artist/${artist.id}`}>
      <ImageSection>
        <Image src={`${process.env.PUBLIC_URL}/img/default_paper.png`}
          style={{ backgroundImage: `url(${artist.picture_big})` }}/>
      </ImageSection>
      <ArtistSection>{artist.name}</ArtistSection>
    </Link>
  </ArtistContainer>;
}

export default Artists;