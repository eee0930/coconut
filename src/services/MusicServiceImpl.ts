import { ITrackInfo } from "../atoms";
import { IData } from "../apis/deezerMusicApi";

export const getTopTrackList = (data: IData[]) => {
  const topTracks = data.map((track: IData, index: number) => {
    return {
      tid: track.id,
      name: track.title_short,
      duration: track.duration,
      preview: track.preview,
      arid: track.artist.id,
      artist: track.artist.name,
      alid: track.album.id,
      album: track.album.title,
      imageSm: track.album.cover_small,
      imageLg: track.album.cover_big,
      rank: index + 1,
    } as ITrackInfo;
  });
  return topTracks as ITrackInfo[];
}