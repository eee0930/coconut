// libraries
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
// components
import Modal from './mixins/Modal';
import {
  nowPlayingState,
  controllerSettingState,
  playListState,
  isLoggedInState,
  INowPlaying,
} from '../atoms';
// styles
import { Loader } from '../utils/globalStyles';
import {
  PlayerContainer,
  ProgressSection,
  ProgressBar,
  PlayerAlbumImg,
  ControllerSection,
  SongInfo,
  ControllerCover,
  ControlOthers,
} from '../utils/components/CocoPlayerStyles';

const designTime = (time: number) => {
  time = Number.isNaN(time) ? 0 : time;
  const seconds = String((time * 1) % 60).padStart(2, '0');
  let [minutes, hours] = ['', ''];
  let displayTime = `00:${seconds}`;
  if (time >= 60) {
    minutes = String(Math.floor(time / 60) % 60).padStart(2, '0');
    displayTime = `${minutes}:${seconds}`;
  }
  if (time >= 3600) {
    hours = String(Math.floor(time / 3600)).padStart(2, '0');
    displayTime = `${hours}:${minutes}:${seconds}`;
  }
  return displayTime;
};

function CocoPlayer() {
  // recoil states
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const cocoPlayList = useRecoilValue(playListState);
  const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingState);
  const [controller, setController] = useRecoilState(controllerSettingState);

  // component states
  const [cocoAudio, setCocoAudio] = useState(new Audio(''));
  const [isLoading, setIsLoading] = useState(false);
  const [isPlay, setIsPlay] = useState(false); // 재생, 일시정지 여부 (버튼, 프로그래스 진행 표시하기 위해)
  const [isNewMusic, setIsNewMusic] = useState(true); // 이전 곡과 다른지 여부 (일시정지, 정지를 구분하기 위해)
  const [isAutoPlay, setIsAutoPlay] = useState(
    controller.loop === 1 ? false : true
  ); // 다음 곡으로 자동 재생할 지 여부

  const [perProgressSize, setPerProgressSize] = useState(1); // 1초당 늘어나는 프로그레스 길이
  const [nowProgress, setNowProgress] = useState(0); // 전체 대비 현재 프로그레스 퍼센트
  const [totalPlayTime, setTotalPlayTime] = useState(0);
  const [nowPlayTime, setNowPlayTime] = useState(0);

  useEffect(() => {
    const { track } = nowPlaying;
    const { preview, duration } = track;
    setIsNewMusic(true);
    setCocoAudio(new Audio(preview));
    settingProgress(duration);
  }, [nowPlaying]);

  useEffect(() => {
    const { loop } = controller;
    if (loop === 1) {
      setIsAutoPlay(false);
    } else {
      setIsAutoPlay(true);
    }
  }, [controller]);

  useEffect(() => {
    let playTime: any;
    if (isPlay) {
      playTime = setInterval(() => {
        setNowProgress((prev) => (prev += perProgressSize));
        setNowPlayTime((prev) => (prev += 1));
      }, 1000);
    } else {
      clearInterval(playTime);
    }
    const clearTime = () => clearInterval(playTime);
    return clearTime;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay]);

  const settingProgress = (duration: number) => {
    setPerProgressSize(100 / duration);
    setTotalPlayTime(duration);
  };

  const settingPrevTrack = () => {
    const { prev } = nowPlaying;
    let newTrack: INowPlaying;
    if (prev) {
      newTrack = cocoPlayList[prev];
    } else {
      const tid = Object.keys(cocoPlayList).filter(
        (tid) => cocoPlayList[Number(tid)].next === null
      )[0];
      newTrack = cocoPlayList[Number(tid)];
    }
    setNowPlaying(newTrack);
  };
  const settingNextTrack = () => {
    const { next } = nowPlaying;
    let newTrack: INowPlaying;
    if (next) {
      newTrack = cocoPlayList[next];
    } else {
      const tid = Object.keys(cocoPlayList).filter(
        (tid) => cocoPlayList[Number(tid)].prev === null
      )[0];
      newTrack = cocoPlayList[Number(tid)];
    }
    setNowPlaying(newTrack);
  };

  const handleClickNext = (isNext: boolean) => {
    settingPause();
    settingReset();
    setCocoAudio(new Audio(''));
    if (isNext) {
      settingNextTrack();
    } else {
      settingPrevTrack();
    }
    let timeout: any;
    clearTimeout(timeout);
    timeout = setTimeout(() => handleClickPlay(true), 800);
  };
  /**
   * play music
   */
  const handleLoadedData = () => {
    let audioloadTimer: any;
    clearTimeout(audioloadTimer);
    setIsLoading(true);
    audioloadTimer = setTimeout(() => setIsLoading(false), 800);
  };
  const handleEnded = () => {
    settingPause();
    settingReset();
    if (isAutoPlay) {
      if (controller.loop === 2) {
        setCocoAudio(new Audio(''));
        settingNextTrack();
      }
      let timeout: any;
      clearTimeout(timeout);
      timeout = setTimeout(() => handleClickPlay(true), 800);
    }
  };

  const handleCanPlayThrough = () => {
    setIsPlay(true);
    cocoAudio.play();
  };
  const handleClickPlay = (isNewMusic: boolean) => {
    if (isNewMusic) {
      setIsNewMusic(false);
      try {
        // 음악 불러오기 실패
        cocoAudio.addEventListener('error', handleLoadedData);
        // 음악 불러오기 완료
        cocoAudio.addEventListener('loadeddata', handleLoadedData);
        cocoAudio.addEventListener('canplaythrough', handleCanPlayThrough);
        cocoAudio.addEventListener('ended', handleEnded);
        cocoAudio.load();
      } catch (e) {
        console.error(e);
        alert('음악을 불러올 수 없습니다.');
      }
    } else {
      handleCanPlayThrough();
    }
  };

  /**
   * pause music
   */
  const handleClickPause = () => {
    settingPause();
  };

  const settingPause = () => {
    setIsPlay(false);
    cocoAudio.pause();
  };

  const settingReset = () => {
    setNowProgress(0);
    setNowPlayTime(0);
  };

  /**
   * loop 조작
   * @param loopN
   */
  const handleClickLoop = (loopN: number) => {
    setController((prev) => {
      return { ...prev, loop: loopN };
    });
  };

  const handleToggleRandom = () => {
    setController((prev) => {
      return { ...prev, isRandom: !prev.isRandom };
    });
  };

  return (
    <>
      <PlayerContainer>
        {/* [1. progress bar]----------------------------------------------- */}
        <ProgressSection>
          <ProgressBar style={{ width: nowProgress + '%' }} />
        </ProgressSection>
        {/* [2. player controller]------------------------------------------ */}
        <ControllerSection className="row">
          {/* [2.1 앨범 정보]------------------------------------------------- */}
          <SongInfo className="col row align-self-center">
            {/* 앨범 이미지 */}
            <div className="col-auto align-self-center">
              <Link to={`/album/${nowPlaying.track.alid}`}>
                <PlayerAlbumImg
                  src={`${process.env.PUBLIC_URL}/img/default_paper.png`}
                  style={{
                    backgroundImage: `url(${nowPlaying.track.imageSm})`,
                  }}
                />
              </Link>
            </div>
            {/* 노래 제목, 가수 이름 */}
            <div className="info col col-md-auto align-self-center">
              <div className="name-cover">
                <Link to={`/music/${nowPlaying.track.tid}`}>
                  <span>{nowPlaying.track.name}</span>
                </Link>
              </div>
              <div className="artist-cover">
                <Link to={`/artist/${nowPlaying.track.arid}`}>
                  <span>{nowPlaying.track.artist}</span>
                </Link>
              </div>
            </div>
            {/* 좋아요 (member) */}
            <div className="col-md mobile-hidden align-self-center">
              <button className="likeBtn btn">
                <i className="fa-regular fa-heart" />
              </button>
            </div>
          </SongInfo>
          {/* [2.2 플레이어 컨트롤러]-------------------------------------------- */}
          <ControllerCover className="col-auto align-self-center">
            {/* 반복 여부 버튼 */}
            {controller.loop === 1 ? (
              <button
                onClick={() => handleClickLoop(2)}
                className="btn mobile-hidden loop-btn"
              >
                <i className="fa-solid fa-rotate" />
              </button>
            ) : controller.loop === 2 ? (
              <button
                onClick={() => handleClickLoop(3)}
                className="btn mobile-hidden loop-btn active"
              >
                <i className="fa-solid fa-rotate" />
                <span className="btn-text">all</span>
              </button>
            ) : (
              <button
                onClick={() => handleClickLoop(1)}
                className="btn mobile-hidden loop-btn active"
              >
                <i className="fa-solid fa-rotate" />
                <span className="btn-text">1</span>
              </button>
            )}

            {/* 이전 곡 */}
            <button
              onClick={() => handleClickNext(false)}
              className="btn mobile-hidden"
            >
              <i className="fa-solid fa-backward-step" />
            </button>
            {/* 재생, 일시정지 */}
            {isPlay ? (
              <button onClick={handleClickPause} className="play btn">
                <i className="fa-solid jelly fa-pause fa-fw" />
              </button>
            ) : (
              <button
                onClick={() => handleClickPlay(isNewMusic)}
                className="play btn"
              >
                <i className="fa-solid jelly fa-play fa-fw" />
              </button>
            )}
            {/* 다음 곡 */}
            <button onClick={() => handleClickNext(true)} className="btn">
              <i className="fa-solid fa-forward-step" />
            </button>
            {/* 랜덤 재생 버튼 */}
            <button
              onClick={handleToggleRandom}
              className={`btn mobile-hidden loop-btn ${
                controller.isRandom && 'active'
              }`}
            >
              <i className="fa-solid fa-shuffle" />
            </button>
          </ControllerCover>
          {/* [2.3 볼륨과 플레이리스트]-----------------------------------------  */}
          <ControlOthers className="col-auto col-md row align-self-center">
            {/* 플레이시간 */}
            <div className="col-md-8 mobile-hidden align-self-center">
              <span>{designTime(nowPlayTime)}</span>
              <span> / </span>
              <span>{designTime(totalPlayTime)}</span>
            </div>
            {/* 플레이리스트 */}
            <div className="col-12 col-md-4 align-self-center">
              <button className="btn play-list-icon">
                <i className="fa-solid fa-bars" />
                <i className="fa-solid fa-music" />
              </button>
            </div>
          </ControlOthers>
        </ControllerSection>
      </PlayerContainer>
      {isLoading && (
        <Loader>
          <div>
            <div></div>
            <div></div>
          </div>
        </Loader>
      )}
      {!isLoggedIn && (
        <Modal
          title={'Login required 😙'}
          msg={'30초 미리 듣기가 제공됩니다.'}
          isAuto={true}
        />
      )}
    </>
  );
}

export default CocoPlayer;
