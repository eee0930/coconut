import { fetchYoutubeIdsByQuery } from "../apis/youtubeApi";

export const getVideoIdByMusicInfo = async (info: string) => {
  const data = await fetchYoutubeIdsByQuery(info);
  const videoId = data?.items[0].id.videoId as string;
  return videoId as string;
}