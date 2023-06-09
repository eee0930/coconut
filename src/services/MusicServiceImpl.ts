import { ITrackInfo } from "../atoms";
import { ITrack } from "../apis/deezerMusicApi";

const getRefindTrackList = (track: ITrack) => {
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
  }
}

export const getTopTrackList = (data: ITrack[]) => {
  const topTracks = data.slice(0, 10)
    .map((track: ITrack, index: number) => {
      const newTrack = getRefindTrackList(track);
      const rank = index + 1;
      return {
        ...newTrack,
        rank,
      }
    });
  return topTracks as ITrackInfo[];
}

export const getTrackList = (data: ITrack[]) => {
  const topTracks = data
    .map((track: ITrack, index: number) => {
      const newTrack = getRefindTrackList(track);
      const rank = index + 1;
      return {
        ...newTrack,
        rank,
      }
    });
  return topTracks as ITrackInfo[];
}
