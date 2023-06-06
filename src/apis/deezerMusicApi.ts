import axios from "axios";

const API_ROOT = process.env.REACT_APP_RAPID_API_KEY;
const API_HOST = process.env.REACT_APP_DEEZER_HOST;
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const METHOD = "get";
const HEADERS = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': API_HOST
}

interface IOptions {
  method: string;
  url: string;
  params?: any;
  headers?: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  }
};

const fetchResponseData = async (options: IOptions) => {
  try {
    const response = await axios.request(options);
    const data = response.data;
    return data;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}

export const fetchTopTracks = async () => {
  const options = {
    method: METHOD,
    url: "https://api.deezer.com/chart/0/tracks",
  };
  return await fetchResponseData(options);
}

export const fetchSearchResultsByQuery = async (query: string) => {
  const options = {
    method: METHOD,
    url: `${API_ROOT}search`,
    params: { q: query },
    headers: HEADERS
  } as IOptions;
  return await fetchResponseData(options);
}

export const fetchTrackById = async (tid: number) => {
  const options = {
    method: METHOD,
    url: `${API_ROOT}track/%7Bid%7D`,
    params: { id: tid },
    headers: HEADERS
  } as IOptions;
  return await fetchResponseData(options);
}

export const fetchArtistById = async (arid: number) => {
  const options = {
    method: METHOD,
    url: `${API_ROOT}artist/%7Bid%7D`,
    params: { id: arid },
    headers: HEADERS
  } as IOptions;
  return await fetchResponseData(options);
}

export const fetchAlbumById = async (alid: number) => {
  const options = {
    method: METHOD,
    url: `${API_ROOT}album/%7Bid%7D`,
    params: { id: alid },
    headers: HEADERS
  } as IOptions;
  return await fetchResponseData(options);
}
