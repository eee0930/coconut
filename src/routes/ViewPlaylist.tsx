import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { ITrackInfo } from "../atoms";

// apis
import { IPlaylistInfo, ITrack, fetchPlaylistInfoById } from "../apis/deezerMusicApi";

// utils
import { Loader } from "../utils/globalStyles";

// components
import Musics from "../components/mixins/Musics";

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


function ViewPlaylist() {
  const { id } = useParams();
  const { data: playlist, isLoading } = useQuery<IPlaylistInfo>(
    "playlistInfo",
    () => fetchPlaylistInfoById(Number(id)),
    { retry: false }
  );
  const [checkAll, setCheckAll] = useState(false);
  
  useEffect(() => window.scrollTo(0, 0), []);

  let playlistTracks;
  if(!isLoading) {
    playlistTracks = getTrackList(playlist?.tracks?.data as ITrack[]) as ITrackInfo[];
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
          style={{ backgroundImage: `url(${playlist?.picture_big})` }}/>
      </AlbumImgSection>
      <AlbumInfoSection className="col-12 col-md">
        <AlbumTitle>{playlist?.title}</AlbumTitle>
        <AlbumArtist>{playlist?.creator.name}</AlbumArtist>
        <AlbumInfo>
          <span>Since {playlist?.creation_date.split(" ")[0]}</span>
        </AlbumInfo>
        <AlbumDes>
          <span>{playlist?.description}</span>
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
            Total {playlist?.nb_tracks}
          </ChartInfo>
        </TrackInfo>
      </TrackEleTopSection>
      {playlistTracks?.map((track, index) => 
        <Musics track={track} allChecked={checkAll} check={true} key={index} />)
      }
    </TracklistSection>
  </>}
  </>;
}

export default ViewPlaylist;