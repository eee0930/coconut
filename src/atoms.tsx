import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { music1, music2, music3 } from "./utils/data/defaultMusic";

interface IControllerSetting {
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
  imageSm: string;
  imageLg: string;
  rank?: number;
};

export interface IPlayListElement {
  playIndex: number;
  listIndex: number;
  track: ITrackInfo;
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
export const nowPlayingState = atom<IPlayListElement>({
  key: "nowPlaying",
  default: { 
    track: music1, 
    playIndex: 0,
    listIndex: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

/**
 * [플레이 리스트]
 */
export const playListState = atom<IPlayListElement[]>({
  key: "playList",
  default: [{ 
    track: music1, 
    playIndex: 0,
    listIndex: 0,
  }, { 
    track: music2,  
    playIndex: 1,
    listIndex: 1,
  }, { 
    track: music3,  
    playIndex: 2,
    listIndex: 2,
  }],
  effects_UNSTABLE: [persistAtom],
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
  effects_UNSTABLE: [persistAtom],
});






/**
 * 웹 페이지 다크모드 여부
 */
export const isDarkThemeState = atom({
  key: "defaultTheme",
  default: false,
});