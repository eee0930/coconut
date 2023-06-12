const API_ROOT = process.env.REACT_APP_YOUTUBE_ROOT;
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export interface IVideoIdItem {
  kind: string;
  id: {
    kind: string;
    videoId: string;
  };
}

export interface IVideoIdResults {
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IVideoIdItem[];
}


const fetchResponseData = (url: string) => {
  try {
    return fetch(url).then(response => response.json());
  } catch (error: any) {
    console.error("🛑", error.message);
    throw error;
  }
};

export const fetchVideoIdsByQuery = (q: string) => {
  const url = `${API_ROOT}search?key=${API_KEY}&type=video&q=${q}`;
  return fetchResponseData(url);
}

export const fetchYoutubeIdsByQuery = async(q: string) => {
  const url = `${API_ROOT}search?key=${API_KEY}&type=video&q=${q}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}
