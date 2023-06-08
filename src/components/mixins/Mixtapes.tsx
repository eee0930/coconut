import { Link } from "react-router-dom";
import { IMixtape } from "../../apis/localApi";
import { AlbumContainer, ImageSection, Image, 
  TitleSection, AuthorSection } 
  from "../../utils/components/AlbumElementStyles";

interface IMixtapes {
  data: IMixtape;
}

function Mixtapes({ data } : IMixtapes) {
  return <>
  <div className="col-6 col-md-3">
    <AlbumContainer>
      <ImageSection>
        <Link to={`/mixtape/${data._id}`}>
          <Image src={`${process.env.PUBLIC_URL}/img/default_paper.png`}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${data.tapeImage})` }}/>
        </Link>
      </ImageSection>
      <TitleSection>
        {data.title}
      </TitleSection>
      <AuthorSection>
        {data.author}
      </AuthorSection>
    </AlbumContainer>
  </div>
  </>;
};

export default Mixtapes;