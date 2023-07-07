import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";

// components
import Musics from "../components/mixins/Musics";

// services
import { getMixtapeById } from "../services/AlbumServiceImpl";

// styles
import { Loader } from "../utils/globalStyles";
import { AlbumInfoContainer, AlbumImgSection, AlbumImg, AlbumInfoSection, 
  AlbumTitle, AlbumArtist, AlbumInfo, AlbumDes, ButtonSection,
  AllPlayBtn, ButtonBack, ButtonFront, TracklistSection } 
  from "../utils/screens/AlbumStyles";
import { TrackEleTopSection, CheckList, TrackInfo } 
  from "../utils/components/MusicElementsStyles";
import { ChartInfo } from "../utils/screens/ListChartStyles";
import { IMixtape, ITapeDatas, fetchTapeDatas } from "../apis/localApi";

function ViewMixtape() {
  const { id } = useParams();
  const { data, isLoading } = useQuery<ITapeDatas>(
    "tapeList", 
    fetchTapeDatas, 
    { retry: 0 }
  );
  const [checkAll, setCheckAll] = useState(false);
  
  useEffect(() => window.scrollTo(0, 0), []);

  let tapeInfo;
  if(!isLoading) {
    tapeInfo = getMixtapeById(data?.data as IMixtape[], id as string);
  }
  const handleCheckAll = () => setCheckAll(prev => !prev);

  return <>
  {isLoading ? 
    <Loader>
      <div><div></div><div></div></div>
    </Loader> : <>
    {/* [1. album info]----------------------------------------------------- */}
    <AlbumInfoContainer className="row">
      <AlbumImgSection className="col-12 col-md-auto">
        <AlbumImg src={`${process.env.PUBLIC_URL}/img/default_paper.png`}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${tapeInfo?.tapeImage})` }}/>
      </AlbumImgSection>
      <AlbumInfoSection className="col-12 col-md">
        <AlbumTitle>{tapeInfo?.title}</AlbumTitle>
        <AlbumArtist>{tapeInfo?.author}</AlbumArtist>
        <AlbumInfo>
          <span>Since {tapeInfo?.creation_date.split(" ")[0]}</span>
        </AlbumInfo>
        <AlbumDes>
          <span>{tapeInfo?.description}</span>
        </AlbumDes>
        <ButtonSection>
          <AllPlayBtn>
            <ButtonBack></ButtonBack>
            <ButtonFront className="button-front">
              <i className="fa-solid fa-play fa-fw" />
              <span>Play All</span>
            </ButtonFront>
          </AllPlayBtn>
        </ButtonSection>
      </AlbumInfoSection>
    </AlbumInfoContainer>

    {/* [2. track list]----------------------------------------------------- */}
    <TracklistSection>
      <TrackEleTopSection className="row">
        <CheckList className="col-auto align-self-center">
          <input type="checkbox" checked={checkAll} onChange={handleCheckAll} />
        </CheckList>
        <TrackInfo className="col align-self-center">
          <ChartInfo>
            Total {tapeInfo?.songList?.length}
          </ChartInfo>
        </TrackInfo>
      </TrackEleTopSection>
      {tapeInfo?.songList?.map((track, index) => 
        <Musics track={track} allChecked={checkAll} check={true} key={index} />)
      }
    </TracklistSection>
  </>}
  </>;
}

export default ViewMixtape;