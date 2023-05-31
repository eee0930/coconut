import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface INowPlayingState {
  tid: number;
  name: string;
  preview: string;
  arid: number;
  artist: string;
  alid: number;
  imageSm: string;
  imageLg: string;
  duration: number;
};

const { persistAtom } = recoilPersist({
  key: "cocoMusicPersist",
  storage: localStorage,
});

export const isDarkThemeState = atom({
  key: "defaultTheme",
  default: false,
});

export const nowPlayingState = atom<INowPlayingState>({
  key: "nowPlaying",
  default: {
    tid: 2284968167,
    name: "Queencard",
    preview: "https://cdns-preview-7.dzcdn.net/stream/c-79bf9b800bc2ebf658fe627ab1c1a6f8-4.mp3",
    arid: 15065941,
    artist: "(G)I-DLE",
    alid: 441690797,
    imageSm: "https://e-cdns-images.dzcdn.net/images/cover/14ae5e519293803d00429ba2e401097c/56x56-000000-80-0-0.jpg",
    imageLg: "https://e-cdns-images.dzcdn.net/images/cover/14ae5e519293803d00429ba2e401097c/1000x1000-000000-80-0-0.jpg",
    duration: 161,
  },
  effects_UNSTABLE: [persistAtom],
})