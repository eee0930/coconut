import { IArtist } from "../apis/deezerMusicApi";

const DEFAULT_IMG = "/img/default_profile.jpg";

export const getTopArtistList = (data: IArtist[]) => {
  return data.slice(0, 8).map(artist => {
    let defaultImage = artist.picture_big;
    if(artist.picture_big === null || artist.picture_big === undefined) {
      defaultImage = `${process.env.PUBLIC_URL}${DEFAULT_IMG}`;
    }
    return {
      ...artist,
      picture_big: defaultImage,
    }
  });
}