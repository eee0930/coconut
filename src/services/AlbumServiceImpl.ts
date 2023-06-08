import { IMixtape } from "../apis/localApi";

export const getNewMixtapeList = (data: IMixtape[]) => {
  const dataSize = data.length;
  return data.slice(dataSize - 4);
}