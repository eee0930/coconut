import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import { ITrackInfo } from "../atoms";

// apis
import { IAlbumInfo, ITrack, fetchAlbumInfoById } 
  from "../apis/deezerMusicApi";

// utils
import { Loader } from "../utils/globalStyles";

// components
import Tracks from "../components/mixins/Tracks";

// services
import { getTrackList } from "../services/MusicServiceImpl";

// styles
import { AlbumInfoContainer, AlbumImgSection, AlbumImg, AlbumInfoSection, 
  AlbumTitle, AlbumArtist, AlbumInfo, AlbumDes, ButtonSection,
  AllPlayBtn, ButtonBack, ButtonFront, TracklistSection } 
  from "../utils/screens/AlbumStyles";
import { TrackEleTopSection, CheckList, TrackInfo } 
  from "../utils/components/MusicElementsStyles";
import { ChartInfo } from "../utils/screens/ListChartStyles";

function ViewAlbum() {
  const { id } = useParams();
  const { data: albumInfo, isLoading } = useQuery<IAlbumInfo>(
    "albumInfo",
    () => fetchAlbumInfoById(Number(id)),
    { retry: false }
  );
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  let albumTracks;
  if(!isLoading) {
    albumTracks = getTrackList(albumInfo?.tracks?.data as ITrack[]) as ITrackInfo[];
  }

  const handleCheckAll = () => setCheckAll(prev => !prev);

  return <>
  <Helmet>
    <title>{isLoading ? "Album" : albumInfo?.title} | Coconut</title>
  </Helmet>
  {isLoading ? 
    <Loader>
      <div><div></div><div></div></div>
    </Loader> : <>
    {/* [1. album info]----------------------------------------------------- */}
    <AlbumInfoContainer className="row">
      <AlbumImgSection className="col-12 col-md-auto">
        <AlbumImg src={`${process.env.PUBLIC_URL}/img/default_paper.png`}
          style={{ backgroundImage: `url(${albumInfo?.cover_big})` }}/>
      </AlbumImgSection>
      <AlbumInfoSection className="col-12 col-md">
        <AlbumTitle>{albumInfo?.title}</AlbumTitle>
        <AlbumArtist>{albumInfo?.artist.name}</AlbumArtist>
        <AlbumInfo>
          <span>{albumInfo?.release_date.split(" ")[0]}</span>
        </AlbumInfo>
        {albumInfo?.genres && 
          <AlbumDes>
          {albumInfo?.genres.data.map(genre => 
            <span key={genre.id}>{genre.name}</span>
          )}
          </AlbumDes>
        }
        {albumInfo?.contributors && 
          <AlbumDes>
          {albumInfo?.contributors.map(contributor => 
            <span key={contributor.id}>
              {contributor.name} ({contributor.type})
            </span>
          )}
          </AlbumDes>
        }
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
            Total {albumInfo?.nb_tracks}
          </ChartInfo>
        </TrackInfo>
      </TrackEleTopSection>
      {albumTracks?.map((track, index) => 
        <Tracks album={albumInfo?.title as string} track={track} 
          allChecked={checkAll} key={index} />)
      }
    </TracklistSection>
  </>}
  </>;
}

export default ViewAlbum;