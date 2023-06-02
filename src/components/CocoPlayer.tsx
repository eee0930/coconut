import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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
}

function CocoPlayer() {
  const playList = useRecoilValue(playListState);
  const [nowPlaying, setNowPlaying] = useRecoilState(nowPlayingState);
  const [controllerSetting, setControllerSetting] = useRecoilState(controllerSettingState);
  const [isLoading, setIsLoading] = useState(false);
  //const [isNewMusic, setIsNewMusic] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  const [progressSize, setProgressSize] = useState(1);
  const [progress, setProgress] = useState(0);
  const [durationTime, setDurationTime] = useState(0);
  const [playTime, setPlayTime] = useState(0);

  // 오디오 정보
  const [audio, setAudio] = useState(new Audio(nowPlaying.track.preview));

  let isNewMusic: boolean;
  useEffect(() => {
    setAudio(new Audio(nowPlaying.track.preview));
    const time = Math.round(audio.duration) || nowPlaying.track.duration;
    setDurationTime(time);
    setProgressSize(100 / time);
    handleNewAudioSetting();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);

  useEffect(() => {
    let progressTimer: any;
    if(isPlay) {
      progressTimer = setInterval(() => {
        setProgress((prev) => prev + progressSize);
        setPlayTime(Math.round(audio.currentTime));
      }, 500);
      return () => clearInterval(progressTimer);
    } else {
      clearInterval(progressTimer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay]);

  const handleNewAudioSetting = () => {
    isNewMusic = true;
    console.log(2, isNewMusic);
    setProgress(0);
    setPlayTime(0);
  };

  /**
   * next music play
   */
  const playListSize = playList.length;
  const thisIndex = nowPlaying.playIndex;
  const handleClickNext = (isNext: boolean) => {
    setIsPlay(false);
    handleNewAudioSetting();
    audio.pause();
    if(isNext) {
      playNextMusic();
    } else {
      playPrevMusic();
    }
  };
  const playNextMusic = () => {
    handleClickPause();
    if(playListSize > 1) {
      let nextIndex = thisIndex + 1;
      if(nextIndex === playListSize) {
        nextIndex = 0;
      }
      setNowPlaying(() => {
        const newTrack = playList.filter((track) => 
          Number(track.playIndex) === nextIndex)[0];
        return newTrack;
      });
    }
    handleClickPlay();
  };
  /**
   * prev music play
   */
  const playPrevMusic = () => {
    if(playListSize > 1) {
      let prevIndex = thisIndex - 1;
      if(prevIndex < 0) {
        prevIndex = playListSize - 1;
      }
      setNowPlaying(() => {
        const newTrack = playList.filter((track) => 
          Number(track.playIndex) === prevIndex)[0];
        return newTrack;
      });
    }
    handleClickPlay();
  };

  /**
   * play music
   */
  let audioloadTimer: any = useRef(null);
  const handleLoadedData = () => {
    clearTimeout(audioloadTimer);
    setIsLoading(true);
    audioloadTimer = setTimeout(() => setIsLoading(false), 300);
  };
  let timeout: any = useRef(null);
  const handleEnded = () => {
    clearTimeout(timeout);
    timeout = setTimeout(handleLoopPlay, 500);
  };
  const { loop } = controllerSetting;
  const handleLoopPlay = () => {
    if(loop === 2) {
      playNextMusic();
    } else if(loop === 3) {
      handleNewAudioSetting();
      audio.play();
    } else { 
      setIsPlay(false);
      handleNewAudioSetting();
      audio.pause();
    }
  };
  const handleCanPlayThrough = () => {
    setIsPlay(true);
    audio.play();
  };
  const handleClickPlay = () => {
    if(isNewMusic) {
      isNewMusic = false;
      console.log(3, isNewMusic);
      try {
        // 음악 불러오기 실패
        audio.addEventListener('error', handleLoadedData);
        // 음악 불러오기 완료
        audio.addEventListener('loadeddata', handleLoadedData);
        audio.addEventListener('canplaythrough', handleCanPlayThrough);
        audio.addEventListener('ended', handleEnded);
        audio.load();
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
    audio.pause();
  };


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
          </button>
        }
        {/* 다음 곡 */}
        <button onClick={() => handleClickNext(true)} className="btn">
          <i className="fa-solid fa-forward-step"/>
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

  {isLoading ? 
    <Loader>
      <div>
        <div></div>
        <div></div>
      </div>
    </Loader> : 
  ""}
</>};

export default CocoPlayer;