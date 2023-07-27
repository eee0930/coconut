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

const fetchResponseData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('🛑', error.message);
    throw error;
  }
};

export const fetchVideoIdsByQuery = async (q: string) => {
  const url = `${API_ROOT}search?key=${API_KEY}&type=video&q=${q}`;
  return await fetchResponseData(url);
};
