import { ITrackInfo } from "../atoms";
import { ITrack } from "../apis/deezerMusicApi";
import { defaultMusics } from "../utils/data/defaultMusic";
import { getVideoIdByMusicInfo } from "../services/VideoServiceImpl";

const getRefindTrackList = async (track: ITrack) => {
  const artist = track.artist.name;
  const name = track.title_short;
  const videoId = await getVideoIdByMusicInfo(`${artist}+${name}`) as string;
  return {
    tid: track.id,
    name,
    duration: track.duration,
    preview: track.preview,
    arid: track.artist.id,
    artist,
    alid: track.album.id,
    album: track.album.title,
    imageSm: track.album.cover_small,
    imageLg: track.album.cover_big,
    videoId: videoId ? videoId : "null",
  };
}

export const getTopTrackList = (data: ITrack[]) => {
  const dataLength = data.length;
  if(dataLength > 10) data = data.slice(0, 10);

  const topTracks = data.map((track: ITrack, idx: number) => {
    const newTrack = getRefindTrackList(track);
    const rank = idx + 1;
    return {
      ...newTrack,
      rank,
    };
  }) as unknown as ITrackInfo[];
  if(dataLength < 10) {
    const leastSize = 10 - dataLength;
    for(let i = 0; i < leastSize; i++) {
      const addedMusic = {
        ...defaultMusics[i],
        rank: dataLength + i + 1,
      };
      topTracks.push(addedMusic);
    }
  }
  return topTracks;
}

export const getTrackList = (data: ITrack[]) => {
  const topTracks = data.map((track: ITrack, idx: number) => {
    const newTrack = getRefindTrackList(track);
    const index = idx + 1;
    return {
      ...newTrack,
      index,
    }
  }) as unknown as ITrackInfo[];
  return topTracks;
}


