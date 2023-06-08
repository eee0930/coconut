import { useQuery } from "react-query";
import { IAlbum, IArtist, IPlayList, ITopChart, Itrack, fetchTopTracks } from "../apis/deezerMusicApi";
import { getTopTrackList } from "../services/MusicServiceImpl";
import { ITrackInfo } from "../atoms";
import { MainContent } from "../utils/screens/HomeStyles";
import { Loader, TitleSection } from "../utils/globalStyles";
import Musics from "../components/mixins/Musics";
import { CheckList, TrackEleCover } from "../utils/components/MusicElementsStyles";
import { ChartInfo, TrackEleSection } from "../utils/screens/ListChartStyles";
import { useEffect, useState } from "react";
import { getTopAlbumList, getTopPlaylistList } from "../services/AlbumServiceImpl";
import Albums from "../components/mixins/Albums";
import Artists from "../components/mixins/Artists";
import { getTopArtistList } from "../services/ArtistServiceImpl";
import Playlists from "../components/mixins/Playlists";
import { Helmet } from "react-helmet";

function Chart() {
  const { data, isLoading } = useQuery<ITopChart>(
    "topChart", 
    () => fetchTopTracks(), 
    { retry: 0 }
  );
  const [trackChecked, setTrackChecked] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  let topTracks, topAlbums, topArtists, topPlaylists;
  
  if(!isLoading) {
    topTracks = getTopTrackList(data?.tracks.data as Itrack[]) as ITrackInfo[];
    topAlbums = getTopAlbumList(data?.albums.data as IAlbum[]);
    topArtists = getTopArtistList(data?.artists.data as IArtist[]);
    topPlaylists = getTopPlaylistList(data?.playlists.data as IPlayList[]);
  }

  const handleAllTrackChecked = () => setTrackChecked(prev => !prev);
  
  return <>
  <Helmet>
    <title>Chart | Coconut</title>
  </Helmet>
  <TitleSection>
    <h1 className="title">
      <i className="fa-solid fa-trophy" />
      <span>chart</span>
    </h1>
  </TitleSection>
  {isLoading ? 
    <Loader>
      <div><div></div><div></div></div>
    </Loader> : <>

    {/* [1. playlist]------------------------------------------------------- */}
    <MainContent>
      <h2 className="title">
        <span>top playlist</span>
      </h2>
      <div className="row">
        {topPlaylists?.map(album => 
          <div className="col-6 col-md-3" key={album.id} >
            <Playlists playlist={album} />
          </div>)}
      </div>
    </MainContent>

    {/* [2. artist]--------------------------------------------------------- */}
    <MainContent>
      <h2 className="title">
        <span>top artists</span>
      </h2>
      <div className="row">
        {topArtists?.map(artist => 
          <div className="col-6 col-md-3" key={artist.id} >
            <Artists artist={artist} />
          </div>)}
      </div>
    </MainContent>

    {/* [3. album]---------------------------------------------------------- */}
    <MainContent>
      <h2 className="title">
        <span>top albums</span>
      </h2>
      <div className="row">
        {topAlbums?.map(album => 
          <div className="col-6 col-md-3" key={album.id} >
            <Albums album={album} />
          </div>)}
      </div>
    </MainContent>

    {/* [4. track]---------------------------------------------------------- */}
    <MainContent>
      <h2 className="title">
        <span>top tracks</span>
      </h2>
      <TrackEleSection>
        <TrackEleCover className="row">
          <CheckList className="col-auto align-self-center">
            <input checked={trackChecked} onChange={handleAllTrackChecked} 
              type="checkbox" className="option-input checkbox" />
          </CheckList>
          <ChartInfo className="col align-self-center">
            <span>Total 10</span>
          </ChartInfo>
        </TrackEleCover>
      </TrackEleSection>
      <div>
        {topTracks?.map(track => 
          <Musics track={track} check={true} allChecked={trackChecked} 
            key={track.tid} />)}
      </div>
    </MainContent>
    
  </>}
  </>;
}

export default Chart;