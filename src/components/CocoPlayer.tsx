import { Link } from "react-router-dom";
import { PlayerContainer, ProgressSection, ProgressBar, PlayerAlbumImg,
  ControllerSection, SongInfo, ControllerCover, ControlOthers } 
  from "../utils/components/CocoPlayerStyles";

function CocoPlayer() {
  return <PlayerContainer>
    {/* [1. progress bar]--------------------------------------------------- */}
    <ProgressSection>
      <ProgressBar />
    </ProgressSection>
    {/* [2. player controller]---------------------------------------------- */}
    <ControllerSection className="row">
      {/* [2.1 앨범 정보]------------ */}
      <SongInfo className="col row align-self-center">
        {/* 앨범 이미지 */}
        <div className="col-auto align-self-center">
          <Link to="/album/441690797">
            <PlayerAlbumImg src={`${process.env.PUBLIC_URL}/img/default_paper.png`} 
              style={{ backgroundImage: `url(https://e-cdns-images.dzcdn.net/images/cover/14ae5e519293803d00429ba2e401097c/56x56-000000-80-0-0.jpg)` }}/>
          </Link>
        </div>
        {/* 노래 제목, 가수 이름 */}
        <div className="info col col-md-auto align-self-center">
          <div className="name-cover">
            <Link to="/song/2284968167">
              <span>Queencard</span>
            </Link>
          </div>
          <div className="artist-cover">
            <Link to="/artist/15065941">
              <span>(G)I-DLE</span>
            </Link>
          </div>
          {/* 좋아요 (member) */}
          <div className="col-md mobile-hidden align-self-center">
            <button className="likeBtn btn">
              <i className="fa-regular fa-heart" />
            </button>
          </div>
        </div>
      </SongInfo>
      {/* [2.2 플레이어 컨트롤러]---------- */}
      <ControllerCover className="col-auto align-self-center">
        {/* 이전 곡 */}
        <button className="btn mobile-hidden">
          <i className="fa-solid fa-backward-step"/>
        </button>
        {/* 재생, 일시정지 */}
        <button className="play btn">
          <i className="fa-solid fa-play jelly"/>
        </button>
        {/* 다음 곡 */}
        <button className="btn">
          <i className="fa-solid fa-forward-step"/>
        </button>
      </ControllerCover>
      {/* [2.3 볼륨과 플레이리스트]----------  */}
      <ControlOthers className="col-auto col-md row align-self-center">
        {/* 플레이시간 */}
        <div className="col-md-8 mobile-hidden align-self-center">
          <span>00:00</span>
          <span>/</span>
          <span>02:41</span>
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
  </PlayerContainer>;
}

export default CocoPlayer;