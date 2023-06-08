import { ITrackInfo } from "../atoms";

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

const fetchResponseData = (url: string) => {
  try {
    return fetch(url).then(response => response.json());
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
};

export const fetchTapeDatas = () => {
  const url = `${process.env.PUBLIC_URL}/data/tapeDatas.json`;
  return fetchResponseData(url);
}
