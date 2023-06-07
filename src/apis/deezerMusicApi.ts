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
  headers?: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  }
};

const fetchResponseData = (url: string, options?: IOptions) => {
  try {
    const response = fetch(url).then((response) => response.json());
    return response;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}

export const fetchTopTracks = () => {
  const url = "https://api.deezer.com/chart/0/tracks";
  const options = {
    method: METHOD,
  } as IOptions;
  return fetchResponseData(url);
}

export const fetchSearchResultsByQuery = (query: string) => {
  const url = `${API_ROOT}search?q=${query}`;
  const options = {
    method: METHOD,
    headers: HEADERS
  } as IOptions;
  return fetchResponseData(url, options);
}

export const fetchTrackById = (tid: number) => {
  const url = `${API_ROOT}track/%7Bid%7D?id=${tid}`;
  const options = {
    method: METHOD,
    headers: HEADERS
  } as IOptions;
  return fetchResponseData(url, options);
}

export const fetchArtistById = (arid: number) => {
  const url = `${API_ROOT}artist/%7Bid%7D?id=${arid}`;
  const options = {
    method: METHOD,
    headers: HEADERS
  } as IOptions;
  return fetchResponseData(url, options);
}

export const fetchAlbumById = (alid: number) => {
  const url = `${API_ROOT}album/%7Bid%7D?id=${alid}`;
  const options = {
    method: METHOD,
    headers: HEADERS
  } as IOptions;
  return fetchResponseData(url, options);
}
