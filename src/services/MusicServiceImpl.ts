import { ITrackInfo } from '../atoms';
import { ITrack } from '../apis/deezerMusicApi';
import { defaultMusics } from '../utils/data/defaultMusic';

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
  };
};

export const getTopTrackList = (data: ITrack[]) => {
  const dataLength = data.length;
  if (dataLength > 10) {
    data = data.slice(0, 10);
  }
  const topTracks = data.map((track: ITrack, idx: number) => {
    const newTrack = getRefindTrackList(track);
    const rank = idx + 1;
    return {
      ...newTrack,
      rank,
    };
  });
  if (dataLength < 10) {
    const leastSize = 10 - dataLength;
    for (let i = 0; i < leastSize; i++) {
      const addedMusic = {
        ...defaultMusics[i],
        rank: dataLength + i + 1,
      };
      topTracks.push(addedMusic);
    }
  }
  return topTracks as ITrackInfo[];
};

export const getTrackList = (data: ITrack[]) => {
  const topTracks = data.map((track: ITrack, idx: number) => {
    const newTrack = getRefindTrackList(track);
    const index = idx + 1;
    return {
      ...newTrack,
      index,
    };
  });
  return topTracks as ITrackInfo[];
};

export const getTopTrackList2 = (data: ITrack[]) => {};
