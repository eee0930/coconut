import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import { nowPlayingState, controllerSettingState, playListState } from "../atoms";
import { PlayerContainer, ProgressSection, ProgressBar, PlayerAlbumImg,
  ControllerSection, SongInfo, ControllerCover, ControlOthers } 
  from "../utils/components/CocoPlayerStyles";
import { Loader } from "../utils/globalStyles";

const designTime = (time: number) => {
  time = Number.isNaN(time) ? 0 : time;
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
  const savedNowPlaying = useRecoilValue(nowPlayingState);
  const savedController = useRecoilValue(controllerSettingState);
  const [nowPlayingIdx, setNowPlayingIdx] = useState(savedNowPlaying.index);
  const [nowPlaying, setNowPlaying] = useState(savedNowPlaying.track);
  const [audioList, setAudioList] = useState(null) as any;
  const [controller, setController] = useState(savedController);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isNewMusic, setIsNewMusic] = useState(true);
  const [cocoAudio, setCocoAudio] = useState(new Audio(savedNowPlaying.track.preview));
  const [progressSize, setProgressSize] = useState(1);
  const [progress, setProgress] = useState(0);
  const [durationTime, setDurationTime] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  // const progressBar = useRef();

  useEffect(() => {
    const newAudioList = {} as any;
    for(let i in playList) {
      newAudioList[i] = playList[i].preview;
    }
    setAudioList(newAudioList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    cocoAudioSetting();
    setIsNewMusic(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);

  useEffect(() => {
    let progressTimer: any;
    console.log(progressSize)
    if(isPlay) {
      progressTimer = setInterval(adjustProgress, 1000);
      return () => clearInterval(progressTimer);
    } else {
      clearInterval(progressTimer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay]);

  const cocoAudioSetting = () => {
    setCocoAudio((audio) => {
      audio.src = nowPlaying.preview;
      audio.loop = false;
      audio.preload = "none";
      return audio;
    });
  };

  const adjustProgress = () => {
    setProgress((prev) => prev + progressSize);
    setPlayTime((prev) => prev + 1);
  };

  const resetProgress = () => {
    setDurationTime(0);
    setProgressSize(1);
    setProgress(0);
    setPlayTime(0);
  };

  const removeAudioObj = () => {
    setCocoAudio((audio) => {
      audio.currentTime = 0;
      audio.src = "";
      return audio;
    });
  };

  const audioDurationSetting = () => {
    setDurationTime(Math.round(cocoAudio.duration));
    setProgressSize(100 / Math.round(cocoAudio.duration));
  };

  /**
   * next music play
   */
  const handleClickNext = (isNext: boolean) => {
    handleClickPause();
    resetProgress();
    removeAudioObj();
    const playListSize = Object.keys(playList).length;
    const thisIndex = nowPlayingIdx;
    if(isNext) {
      nextMusicSetting(playListSize, thisIndex);
    } else {
      prevMusicSetting(playListSize, thisIndex);
    }
  };

  const nextMusicSetting = (playListSize: number, thisIndex: number) => {
    if(playListSize > 1) {
      let nextIndex = thisIndex + 1;
      if(nextIndex >= playListSize) nextIndex = 0;
      setIsNewMusic(true);
      setNowPlaying(playList[nextIndex]);
      setNowPlayingIdx(nextIndex);
    }
    cocoAudioSetting();
    playNextAudio();
  };

  /**
   * prev music play
   */
  const prevMusicSetting = (playListSize: number, thisIndex: number) => {
    if(playListSize > 1) {
      let prevIndex = thisIndex - 1;
      if(prevIndex < 0) prevIndex = playListSize - 1;
      setIsNewMusic(true);
      setNowPlaying(playList[prevIndex]);
      setNowPlayingIdx(prevIndex);
    }
    cocoAudioSetting();
    playNextAudio();
  };

  const playNextAudio = () => {
    let timeout: any;
    clearTimeout(timeout);
    timeout = setTimeout(handleClickPlay, 800);
  }

  const playLoopAll = () => {
    console.log("전체 반복")
    handleClickNext(true);
  };
  const playLoopOne = () => {
    console.log("한곡 반복")
    handleClickPause();
    resetProgress(); 
    handleCanPlayThrough();
  };
  const handleNoLoop = () => {
    console.log("반복 안 함")
    handleClickPause();
    resetProgress(); 
    removeAudioObj(); // 정지시키기 위해 오디오 객체를 없앤 후
    cocoAudioSetting(); // 다시 현재 오디오 객체를 세팅함
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
  const handleEnded = () => {
    let timeout: any;
    clearTimeout(timeout);
    timeout = setTimeout(handleNextPlay, 500);
  };
  const handleNextPlay = () => {
    const { loop } = controller;
    if(loop === 2) { // 전체 반복 재생
      playLoopAll();
    } else if(loop === 3) { // 한 곡 반복 재생
      playLoopOne();
    } else { // 정지
      handleNoLoop();
    }
  };
  const handleCanPlayThrough = () => {
    console.log("재생을 실행시키나")
    audioDurationSetting();
    setIsPlay(true);
    cocoAudio.play();
  };
  const handleClickPlay = () => {
    if(isNewMusic) {
      setIsNewMusic(false);
      try {
        // 음악 불러오기 실패
        cocoAudio.addEventListener('error', handleLoadedData);
        // 음악 불러오기 완료
        cocoAudio.addEventListener('loadeddata', handleLoadedData);
        cocoAudio.addEventListener('canplaythrough', handleCanPlayThrough);
        cocoAudio.addEventListener('ended', handleEnded);
        cocoAudio.load();
        console.log("로드하나")
      } catch(e) {
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
    setIsPlay(false);
    cocoAudio.pause();
  };

  /**
   * loop 조작
   * @param loopN 
   */
  const handleClickLoop = (loopN: number) => {
    setController((prev) => {
      return {...prev, loop: loopN};
    });
  };

  const handleToggleRandom = () => {
    setController((prev) => {
      return {...prev, isRandom: !prev.isRandom};
    });
  }

  return <>
  <PlayerContainer>
    {/* [1. progress bar]--------------------------------------------------- */}
    <ProgressSection>
      <ProgressBar style={{ width: progress + "%" }} />
    </ProgressSection>
    {/* [2. player controller]---------------------------------------------- */}
    <ControllerSection className="row">
      {/* [2.1 앨범 정보]------------ */}
      <SongInfo className="col row align-self-center">
        {/* 앨범 이미지 */}
        <div className="col-auto align-self-center">
          <Link to={`/album/${nowPlaying.alid}`}>
            <PlayerAlbumImg src={`${process.env.PUBLIC_URL}/img/default_paper.png`} 
              style={{ backgroundImage: `url(${nowPlaying.imageSm})` }}/>
          </Link>
        </div>
        {/* 노래 제목, 가수 이름 */}
        <div className="info col col-md-auto align-self-center">
          <div className="name-cover">
            <Link to={`/music/${nowPlaying.tid}`}>
              <span>{nowPlaying.name}</span>
            </Link>
          </div>
          <div className="artist-cover">
            <Link to={`/artist/${nowPlaying.arid}`}>
              <span>{nowPlaying.artist}</span>
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
        {/* {controller.loop === 1 ? 
        <button onClick={() => handleClickLoop(2)} className="btn mobile-hidden loop-btn">
          <i className="fa-solid fa-rotate"/>
        </button> : controller.loop === 2 ? 
        <button onClick={() => handleClickLoop(3)} className="btn mobile-hidden loop-btn active">
          <i className="fa-solid fa-rotate"/>
          <span className="btn-text">all</span>
        </button> : 
        <button onClick={() => handleClickLoop(1)} className="btn mobile-hidden loop-btn active">
          <i className="fa-solid fa-rotate"/>
          <span className="btn-text">1</span>
        </button>} */}
        
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
          className={`btn mobile-hidden loop-btn ${controller.isRandom && "active"}`}>
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