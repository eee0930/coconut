import { Link } from "react-router-dom";
import { ITrackInfo } from "../../atoms";
import { TrackEleSection, TrackEleCover, AlbumImage, PlayBtn, 
  CheckList, TrackRank, AlbumInfo, NameCover, ArtistCover, PlaylistAlbumImg, LikeContainer } 
  from "../../utils/components/MusicElementsStyles";
import { useState } from "react";

interface IMusics {
  track: ITrackInfo;
  check: boolean;
  allChecked: boolean;
};

function Musics({ track, check, allChecked }: IMusics) {
  const [isChecked, setIsChecked] = useState(allChecked);
    
  const handleClickCheck = () => setIsChecked(prev => !prev);
  
  return <>
  <TrackEleSection>
    <TrackEleCover className="row">
      {check && 
        <CheckList className="col-auto align-self-center">
          <input type="checkbox" value={track.tid} 
            className="option-input checkbox" onChange={handleClickCheck}
            checked={isChecked} />
        </CheckList>
      }
      <AlbumImage className="col-auto align-self-center">
        <PlaylistAlbumImg src={`${process.env.PUBLIC_URL}/img/default_paper.png`} 
          style={{ backgroundImage: `url(${track.imageSm})` }}/>
        <PlayBtn className="play-btn">
          <i className="fa-solid fa-play fa-fw" />
        </PlayBtn>
      </AlbumImage>
      {track?.rank && 
        <TrackRank className="col-auto align-self-center">
          {track.rank}
        </TrackRank>
      }
      <AlbumInfo className="col align-self-center">
        <NameCover>
          <Link to={`/music/${track.tid}`}>
            {track.name}
          </Link>
        </NameCover>
        <ArtistCover>
          <Link to={`/artist/${track.arid}`}>
            {track.artist}
          </Link>
        </ArtistCover>
      </AlbumInfo>
      <LikeContainer className="col-auto align-self-center">
        <button className="likeBtn btn">
          <i className="fa-regular fa-heart" />
        </button>
      </LikeContainer>
    </TrackEleCover>
  </TrackEleSection>
  </>;
}

export default Musics;