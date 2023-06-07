import { ITrackInfo } from "../atoms";

export const getTopTrackList = (data: ITrackInfo[]) => {
  const sortTopTrack = (track: any, index: number) => {
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
    };
  };
  const topTracks = data
    .map((track: any, index: number) => sortTopTrack(track, index));
  return topTracks;
}