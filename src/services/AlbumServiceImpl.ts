import { IMixtape } from "../apis/deezerMusicApi";


export const getNewMixtapeList = (data: IMixtape[]) => {
  const dataSize = data.length;
  return data.slice(dataSize - 4);
}