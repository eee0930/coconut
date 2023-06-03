import { Link } from "react-router-dom";
import { AlbumContainer, ImageSection, Image, 
  TitleSection, AuthorSection } 
  from "../../utils/components/AlbumElementStyles";

function Albums(album: any) {
  return <>
  <div className="col-6 col-md-3">
    <AlbumContainer>
      <ImageSection>
        <Link to={`/mixtape/${album.alid}`}>
          <Image src={`${process.env.PUBLIC_URL}/img/default_paper.png`}
            style={{ backgroundImage: `url(${album.image})` }}/>
        </Link>
      </ImageSection>
      <TitleSection>
        {album.title}
      </TitleSection>
      <AuthorSection>
        {album.author}
      </AuthorSection>
    </AlbumContainer>
  </div>
  </>;
};

export default Albums;