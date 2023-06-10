import { IAlbum, IPlayList } from "../apis/deezerMusicApi";
import { IMixtape } from "../apis/localApi";

const DEFAULT_IMG = "/img/default_profile.jpg";

export const getNewMixtapeList = (data: IMixtape[]) => {
  const dataSize = data.length;
  return data.slice(dataSize - 4);
}

export const getTopAlbumList = (data: IAlbum[]) => {
  return data.slice(0, 4).map(album => {
    let coverImage = album.cover_big;
    if(album.cover_big === null || album.cover_big === undefined) {
      coverImage = `${process.env.PUBLIC_URL}${DEFAULT_IMG}`;
    }
    return {
      ...album,
      cover_big: coverImage,
    }
  });
}

export const getTopPlaylistList = (data: IPlayList[]) => {
  return data.slice(0, 8).map(album => {
    let coverImage = album.picture_big;
    if(album.picture_big === null || album.picture_big === undefined) {
      coverImage = `${process.env.PUBLIC_URL}${DEFAULT_IMG}`;
    }
    return {
      ...album,
      picture_big: coverImage,
    }
  });
}

export const getMixtapeById = (mixtapes: IMixtape[], id: string) => {
  const mixtape = mixtapes.filter(tape => tape._id === id)[0];
  return mixtape;
}