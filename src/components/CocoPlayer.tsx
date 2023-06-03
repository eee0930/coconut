import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { nowPlayingState, controllerSettingState, playListState } from "../atoms";
import { PlayerContainer, ProgressSection, ProgressBar, PlayerAlbumImg,
  ControllerSection, SongInfo, ControllerCover, ControlOthers } 
  from "../utils/components/CocoPlayerStyles";
import { Loader } from "../utils/globalStyles";

const designTime = (time: number) => {
  const seconds = String((time * 1) % 60).padStart(2, "0");
  let [minutes, hours] = ["", ""];
  let displayTime = `00:${seconds}`;
  if(time >= 60) {
    minutes = String(Math.floor(time / 60) % 60).padStart(2, "0");
    displayTime = `${minutes}:${seconds}`;
  }
  if(time >= 3600) {
    hours = String(Math.floor(time / 3600)).padStart(2, "0");
    displayTime = `${hours}:${minutes}:${seconds}`;
  }
  return displayTime;
};

function CocoPlayer() {
  const playList = useRecoilValue(playListState);
  const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingState);
  const [controllerSetting, setControllerSetting] = useRecoilState(controllerSettingState);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isNewMusic, setIsNewMusic] = useState(true);
  // const [cocoAudio, setCocoAudio] = useState(new Audio(nowPlaying.track.preview));
  // const [progressSize, setProgressSize] = useState(100 / Math.round(cocoAudio.duration));
  const [cocoAudio, setCocoAudio] = useState(new Audio("")) as any;
  // const [prevAudio, setPrevAudio] = useState(new Audio(""));
  // const [nextAudio, setNextAudio] = useState(new Audio(""));
  const [progressSize, setProgressSize] = useState(1);
  const [progress, setProgress] = useState(0);
  // const [durationTime, setDurationTime] = useState(Math.round(cocoAudio.duration));
  const [durationTime, setDurationTime] = useState(0);
  const [playTime, setPlayTime] = useState(0);

  useEffect(() => {
    cocoAudioSetting();
    // setIsNewMusic(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying, controllerSetting]);

  useEffect(() => {
    let progressTimer: any;
    if(isPlay) {
      console.log(progressSize);
      console.log(cocoAudio.currentTime);
      progressTimer = setInterval(adjustProgress, 1000);
      return () => clearInterval(progressTimer);
    } else {
      clearInterval(progressTimer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay]);

  const cocoAudioSetting = () => {
    const newAudio = new Audio(nowPlaying.track.preview);
    setCocoAudio(newAudio);
  };

  const adjustProgress = () => {
    setProgress((prev) => prev + progressSize);
    setPlayTime((prev) => prev + 1);
  };

  const stopProgress = () => {
    setProgress(0);
    setPlayTime(0);
  };

  const handleNewAudioSetting = () => {
    setDurationTime(Math.round(cocoAudio.duration));
    setProgressSize(100 / Math.round(cocoAudio.duration));
  };


  /**
   * next music play
   */
  const handleClickNext = (isNext: boolean) => {
    const playListSize = playList.length;
    const thisIndex = nowPlaying.playIndex;
    handleClickPause();
    setCocoAudio(null);
    if(isNext) {
      playNextMusic(playListSize, thisIndex);
    } else {
      playPrevMusic(playListSize, thisIndex);
    }
  };
  const getNewTrack = (index: number) => {
    return playList.filter((track) => track.playIndex === index)[0];
  };
  const playNextMusic = (playListSize: number, thisIndex: number) => {
    if(playListSize > 1) {
      let nextIndex = thisIndex + 1;
      if(nextIndex === playListSize) {
        nextIndex = 0;
      }
      setIsNewMusic(true);
      setNowPlaying(() => getNewTrack(nextIndex));
    }
    handleClickPlay();
  };
  /**
   * prev music play
   */
  const playPrevMusic = (playListSize: number, thisIndex: number) => {
    if(playListSize > 1) {
      let prevIndex = thisIndex - 1;
      if(prevIndex < 0) {
        prevIndex = playListSize - 1;
      }
      setIsNewMusic(true);
      setNowPlaying(() => getNewTrack(prevIndex));
    }
    handleClickPlay();
  };

  /**
   * play music
   */
  const handleLoadedData = () => {
    let audioloadTimer: any;
    clearTimeout(audioloadTimer);
    setIsLoading(true);
    audioloadTimer = setTimeout(() => setIsLoading(false), 300);
  };
  // const handleEnded = () => {
  //   let timeout: any;
  //   clearTimeout(timeout);
  //   timeout = setTimeout(handleNextPlay, 500);
  // };
  const handleEnded = () => {
    const { loop } = controllerSetting;
    stopProgress();
    if(loop === 1) { // 정지
      console.log("반복 안 함")
      handleClickPause();
    } else if(loop === 2) { // 전체 반복 재생
      console.log("전체 반복")
      handleClickNext(true);
    } else { // 한 곡 반복 재생
      console.log("한곡 반복")
      handleClickPause();
      handleCanPlayThrough();
    }
  };
  const handleCanPlayThrough = () => {
    setIsPlay(true);
    // cocoAudio.currentTime = cocoAudio.duration - 10;
    cocoAudio.play();
  };
  const handleClickPlay = () => {
    if(isNewMusic) {
      cocoAudioSetting();
      handleNewAudioSetting();
      setIsNewMusic(false);
      try {
        // 음악 불러오기 실패
        cocoAudio.addEventListener('error', handleLoadedData);
        // 음악 불러오기 완료
        cocoAudio.addEventListener('loadeddata', handleLoadedData);
        cocoAudio.addEventListener('canplaythrough', handleCanPlayThrough);
        cocoAudio.addEventListener('ended', handleEnded);
        cocoAudio.load();
      } catch(e) {
        console.error(e);
        alert('음악을 불러올 수 없습니다.');
      }
    } else {
      handleCanPlayThrough();
    }
  }
  /**
   * pause music
   */
  const handleClickPause = () => {
    setIsPlay(false);
    cocoAudio.pause();
  };

  /**
   * loop 조작
   * @param loopN 
   */
  const handleClickLoop = (loopN: number) => {
    setControllerSetting((prev) => {
     return {...prev, loop: loopN};
    });
  };

  const handleToggleRandom = () => {
    setControllerSetting((prev) => {
      return {...prev, isRandom: !prev.isRandom};
    });
  }

  return <>
  <PlayerContainer>
    {/* [1. progress bar]--------------------------------------------------- */}
    <ProgressSection>
      <ProgressBar style={{ width: `${progress}%` }} />
    </ProgressSection>
    {/* [2. player controller]---------------------------------------------- */}
    <ControllerSection className="row">
      {/* [2.1 앨범 정보]------------ */}
      <SongInfo className="col row align-self-center">
        {/* 앨범 이미지 */}
        <div className="col-auto align-self-center">
          <Link to={`/album/${nowPlaying.track.alid}`}>
            <PlayerAlbumImg src={`${process.env.PUBLIC_URL}/img/default_paper.png`} 
              style={{ backgroundImage: `url(${nowPlaying.track.imageSm})` }}/>
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
      {/* [2.2 플레이어 컨트롤러]---------- */}
      <ControllerCover className="col-auto align-self-center">
        {/* 반복재생 */}
        {controllerSetting.loop === 1 ? 
        <button onClick={() => handleClickLoop(2)} className="btn mobile-hidden loop-btn">
          <i className="fa-solid fa-rotate"/>
        </button> : controllerSetting.loop === 2 ? 
        <button onClick={() => handleClickLoop(3)} className="btn mobile-hidden loop-btn active">
          <i className="fa-solid fa-rotate"/>
          <span className="btn-text">all</span>
        </button> : 
        <button onClick={() => handleClickLoop(1)} className="btn mobile-hidden loop-btn active">
          <i className="fa-solid fa-rotate"/>
          <span className="btn-text">1</span>
        </button>}
        
        {/* 이전 곡 */}
        <button onClick={() => handleClickNext(false)} className="btn mobile-hidden">
          <i className="fa-solid fa-backward-step"/>
        </button>
        {/* 재생, 일시정지 */}
        {isPlay ? 
        <button onClick={handleClickPause} className="play btn">
          <i className="fa-solid jelly fa-pause fa-fw" />
        </button> : 
        <button onClick={handleClickPlay} className="play btn">
          <i className="fa-solid jelly fa-play fa-fw" />
        </button>}
        {/* 다음 곡 */}
        <button onClick={() => handleClickNext(true)} className="btn">
          <i className="fa-solid fa-forward-step"/>
        </button>
        {/* 랜덤재생 */}
        <button onClick={handleToggleRandom} 
          className={`btn mobile-hidden loop-btn ${controllerSetting.isRandom && "active"}`}>
          <i className="fa-solid fa-shuffle"/>
        </button>
      </ControllerCover>
      {/* [2.3 볼륨과 플레이리스트]----------  */}
      <ControlOthers className="col-auto col-md row align-self-center">
        {/* 플레이시간 */}
        <div className="col-md-8 mobile-hidden align-self-center">
          <span>{designTime(playTime)}</span>
          <span> / </span>
          <span>{designTime(durationTime)}</span>
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

  {isLoading &&
  <Loader>
    <div>
      <div></div>
      <div></div>
    </div>
  </Loader>}
</>};

export default CocoPlayer;