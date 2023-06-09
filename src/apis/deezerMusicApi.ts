const API_ROOT = "https://api.deezer.com/";

interface IContributor {
  id: number;
  name: string;
  picture_small: string;
  picture_big: string;
  type: string;
}
interface IGenreData {
  id: number;
  name: string;
}
interface ICreator {
  id: number;
  name: string;
}

// [for artist]-----------------------------------------------------------------
export interface IArtist {
  id: number;
  name: string;
  picture_big?: string;
}
export interface IArtistInfo {
  id: number;
  name: string;
  picture_small: string;
  picture_big: string;
  type: string;
  nb_album: number;
}

// [for album]------------------------------------------------------------------
export interface IAlbum {
  id: number;
  title: string;
  cover_small: string;
  cover_big: string;
  artist?: IArtist;
}
export interface IAlbumInfo {
  id: number;
  title: string;
  cover_small: string;
  cover_big: string;
  release_date: string;
  nb_tracks: number;
  duration: number;
  genres: {
    data: IGenreData[];
  };
  contributors: IContributor[];
  artist: IArtist;
  tracks: {
    data: ITrack[];
  };
}

// [for playlist]---------------------------------------------------------------
export interface IPlayList {
  id: number;
  title: string;
  nb_tracks: number;
  picture_small: string;
  picture_big: string;
  creation_date: string;
}
export interface IPlaylistInfo {
  id: number;
  title: string;
  description: string;
  nb_tracks: number;
  picture_small: string;
  picture_big: string;
  creation_date: string;
  duration: number;
  creator: ICreator;
  tracks: {
    data: ITrack[];
  };
}

// [for track]------------------------------------------------------------------
export interface ITrack {
  id: number;
  title_short: string;
  duration: number;
  preview: string;
  artist: IArtist;
  album: IAlbum;
}
export interface ITrackInfo {
  id: number;
  title_short: string;
  duration: number;
  preview: string;
  release_date: string;
  artist: IArtist;
  album: IAlbum;
  contributors: IContributor[];
}

// [for top rank]---------------------------------------------------------------
export interface ITopTracks {
  data: ITrack[];
  total: number;
}
export interface ITopAlbums {
  data: IAlbum[];
  total: number;
}
export interface ITopArtists {
  data: IArtist[];
  total: number;
}
export interface ITopPlayLists {
  data: IPlayList[];
  total: number;
}
export interface ITopChart {
  tracks: ITopTracks;
  albums: ITopAlbums;
  artists: ITopArtists;
  playlists: ITopPlayLists;
}


const fetchResponseData = (url: string) => {
  try {
    return fetch(url).then(response => response.json());
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
};

export const fetchTrackListByApiUrl = (url: string) => {
  return fetchResponseData(url);
};

export const fetchTopTracks = () => {
  const url = `${API_ROOT}chart`;
  return fetchResponseData(url);
};

export const fetchTrackListByArtistId = (arid: number) => {
  const url = `${API_ROOT}artist/${arid}/top?limit=50`;
  return fetchResponseData(url);
};
export const fetchTrackListByAlbumId = (alid: number) => {
  const url = `${API_ROOT}album/${alid}/tracks`;
  return fetchResponseData(url);
};
export const fetchTrackListByPlaylistId = (pid: number) => {
  const url = `${API_ROOT}playlist/${pid}/tracks`;
  return fetchResponseData(url);
};

export const fetchTrackInfoById = (tid: number) => {
  const url = `${API_ROOT}track/${tid}`;
  return fetchResponseData(url);
};
export const fetchArtistInfoById = (arid: number) => {
  const url = `${API_ROOT}artist/${arid}`;
  return fetchResponseData(url);
};
export const fetchAlbumInfoById = (alid: number) => {
  const url = `${API_ROOT}album/${alid}`;
  return fetchResponseData(url);
};
export const fetchPlaylistInfoById = (pid: number) => {
  const url = `${API_ROOT}playlist/${pid}`;
  return fetchResponseData(url);
};

export const fetchSearchResultsByQuery = (query: string) => {
  const url = `${API_ROOT}search?q=${query}`;
  return fetchResponseData(url);
};
export const fetchSearchTracksByQuery = (query: string) => {
  const url = `${API_ROOT}search/track?q=${query}`;
  return fetchResponseData(url);
};
export const fetchSearchArtistsByQuery = (query: string) => {
  const url = `${API_ROOT}search/artist?q=${query}`;
  return fetchResponseData(url);
};
export const fetchSearchAlbumsByQuery = (query: string) => {
  const url = `${API_ROOT}search/album?q=${query}`;
  return fetchResponseData(url);
};
export const fetchSearchPlaylistsByQuery = (query: string) => {
  const url = `${API_ROOT}search/playlist?q=${query}`;
  return fetchResponseData(url);
};
