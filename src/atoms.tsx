import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { music1, music2, music3 } from "./utils/data/defaultMusic";

export interface IControllerSetting {
  loop: number;
  isRandom: boolean;
};

export interface ITrackInfo {
  tid: number;
  name: string;
  duration: number;
  preview: string;
  arid: number;
  artist: string;
  alid: number;
  album?: string;
  imageSm: string;
  imageLg: string;
  rank?: number;
  index?: number;
};

export interface INowPlaying {
  index: number;
  track: ITrackInfo;
}

export interface IPlayListElement {
  [key: number]: ITrackInfo;
}

const { persistAtom } = recoilPersist({
  key: "cocoMusicPersist",
  storage: localStorage,
});

/**
 * [로그인] 여부
 */
export const isLoggedInState = atom({
  key: "cocoLoggedIn",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

/**
 * [현재 플레이]되고 있는 노래 정보
 */
export const nowPlayingState = atom<INowPlaying>({
  key: "nowPlaying",
  default: {
    index: 0,
    track: music1,
  },
  // effects_UNSTABLE: [persistAtom],
});

/**
 * [플레이 리스트]
 */
export const playListState = atom<IPlayListElement>({
  key: "playList",
  default: {
    0: music1,
    1: music2,
    2: music3,
  },
  // effects_UNSTABLE: [persistAtom],
});

/**
 * [반복, 랜덤 재생] 여부 
 */
export const controllerSettingState = atom<IControllerSetting>({
  key: "controllerSetting",
  // [loop] 1: 반복 재생 없음, 2: 전체 음악 반복 재생, 3: 한 곡 반복 재생
  default: {
    loop: 1,
    isRandom: false,
  },
  // effects_UNSTABLE: [persistAtom],
});






/**
 * 웹 페이지 다크모드 여부
 */
export const isDarkThemeState = atom({
  key: "defaultTheme",
  default: false,
});