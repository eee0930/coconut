import { Link } from "react-router-dom";
import { ITrackInfo } from "../../atoms";
import { TrackEleSection, TrackEleCover, AlbumImage, PlayBtn, 
  CheckList, TrackRank, AlbumInfo, NameCover, ArtistCover, PlaylistAlbumImg } 
  from "../../utils/components/MusicElementsStyles";

interface IMusics {
  track: ITrackInfo;
  check: boolean;
};

function Musics({ track, check }: IMusics) {
  return <>
  <TrackEleSection>
    <TrackEleCover className="row">
      {check && 
        <CheckList className="col-auto align-self-center">
          <input type="checkbox" value={track.tid} name="trackList" 
            className="option-input checkbox" />
        </CheckList>
      }
      <AlbumImage className="col-auto align-self-center">
        <PlaylistAlbumImg src={`${process.env.PUBLIC_URL}/img/default_paper.png`} 
          style={{ backgroundImage: `url(${track.imageSm})` }}/>
        <PlayBtn>
          <i className="fa-solid fa-play" />
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
    </TrackEleCover>
  </TrackEleSection>
  </>;
}

export default Musics;