import { useEffect } from "react";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import { ITrackInfo } from "../atoms";

// apis
import { IAlbum, IArtist, IPlayList, ITopChart, ITrack, fetchTopTracks } 
  from "../apis/deezerMusicApi";

//styles
import { MainContent } from "../utils/screens/HomeStyles";
import { Loader, TitleSection } from "../utils/globalStyles";

// services
import { getTopAlbumList, getTopPlaylistList } from "../services/AlbumServiceImpl";
import { getTopArtistList } from "../services/ArtistServiceImpl";
import { getTopTrackList } from "../services/MusicServiceImpl";

// components
import Playlists from "../components/mixins/Playlists";
import Artists from "../components/mixins/Artists";
import Albums from "../components/mixins/Albums";
import Musics from "../components/mixins/Musics";

function Chart() {
  const { data, isLoading } = useQuery<ITopChart>(
    "topChart", 
    fetchTopTracks, 
    { retry: 0 }
  );
  useEffect(() => window.scrollTo(0, 0), []);

  let topTracks, topAlbums, topArtists, topPlaylists;
  
  if(!isLoading) {
    topTracks = getTopTrackList(data?.tracks.data as ITrack[]) as ITrackInfo[];
    topAlbums = getTopAlbumList(data?.albums.data as IAlbum[]);
    topArtists = getTopArtistList(data?.artists.data as IArtist[]);
    topPlaylists = getTopPlaylistList(data?.playlists.data as IPlayList[]);
  }

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
    <MainContent id="playlist">
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
    <MainContent id="artist">
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
    <MainContent id="album">
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
    <MainContent id="track">
      <h2 className="title">
        <span>top tracks</span>
      </h2>
      <div>
        {topTracks?.map(track => 
          <Musics track={track} check={false} allChecked={false} 
            key={track.tid} />)}
      </div>
    </MainContent>
    
  </>}
  </>;
}

export default Chart;