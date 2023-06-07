import { ITrackInfo } from "../atoms";
import { Itrack } from "../apis/deezerMusicApi";

export const getTopTrackList = (data: Itrack[]) => {
  const topTracks = data.slice(0, 10)
    .map((track: Itrack, index: number) => {
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