import { ITrackInfo } from "../atoms";

const API_ROOT = process.env.REACT_APP_RAPID_API_KEY;
const API_HOST = process.env.REACT_APP_DEEZER_HOST;
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const METHOD = "get";
const HEADERS = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': API_HOST
}

export interface IArtist {
  id: number;
  name: string;
  picture_small?: string;
  picture_big?: string;
}

export interface IAlbum {
  id: number;
  title: string;
  cover_small: string;
  cover_big: string;
  tracklist?: string;
}

export interface IPlayList {
  id: number;
  title: string;
  nb_tracks: number;
  picture_small: string;
  picture_big: string;
  tracklist: string;
  creation_date: string;
}

export interface Itrack {
  id: number;
  title_short: string;
  duration: number;
  preview: string;
  artist: IArtist;
  album: IAlbum;
}

export interface ITopTracks {
  data: Itrack[];
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

export interface IMixtape {
  "_id": string;
  tapeImage: string;
  title: string;
  author: string;
  songList: ITrackInfo[];
}

export interface ITapeDatas {
  data: IMixtape[];
}

interface IOptions {
  method: string;
  headers?: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  }
};

const fetchResponseData = (url: string, options?: IOptions) => {
  try {
    if(options) {
      return fetch(url).then(response => response.json());
    } else {
      return fetch(url, options).then(response => response.json());
    }
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
};

export const fetchTrackListByApiUrl = (url: string) => {
  return fetchResponseData(url);
};

export const fetchTapeDatas = () => {
  const url = `${process.env.PUBLIC_URL}/data/tapeDatas.json`;
  return fetchResponseData(url);
}

export const fetchTopTracks = () => {
  const url = "https://api.deezer.com/chart/tracks";
  return fetchResponseData(url);
};

export const fetchTopTracksByArid = (arid: number) => {
  const url = `https://api.deezer.com/artist/${arid}/top?limit=50`;
  return fetchResponseData(url);
};

export const fetchSearchResultsByQuery = (query: string) => {
  const url = `${API_ROOT}search?q=${query}`;
  const options = {
    method: METHOD,
    headers: HEADERS
  } as IOptions;
  return fetchResponseData(url, options);
};

export const fetchTrackById = (tid: number) => {
  const url = `${API_ROOT}track/%7Bid%7D?id=${tid}`;
  const options = {
    method: METHOD,
    headers: HEADERS
  } as IOptions;
  return fetchResponseData(url, options);
};

export const fetchArtistById = (arid: number) => {
  const url = `${API_ROOT}artist/%7Bid%7D?id=${arid}`;
  const options = {
    method: METHOD,
    headers: HEADERS
  } as IOptions;
  return fetchResponseData(url, options);
};

export const fetchAlbumById = (alid: number) => {
  const url = `${API_ROOT}album/%7Bid%7D?id=${alid}`;
  const options = {
    method: METHOD,
    headers: HEADERS
  } as IOptions;
  return fetchResponseData(url, options);
};

