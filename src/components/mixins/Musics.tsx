import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ITrackInfo } from '../../atoms';

import {
  TrackEleSection,
  TrackEleCover,
  AlbumImage,
  PlayBtn,
  AlbumName,
  CheckList,
  TrackRank,
  AlbumInfo,
  NameCover,
  ArtistCover,
  PlaylistAlbumImg,
  LikeContainer,
} from '../../utils/components/MusicElementsStyles';

interface IMusics {
  track: ITrackInfo;
  check: boolean;
  allChecked: boolean;
}

function Musics({ track, check, allChecked }: IMusics) {
  const [isChecked, setIsChecked] = useState(allChecked);

  const handleClickCheck = () => setIsChecked((prev) => !prev);
  const handleClickAllCheck = (allChecked: boolean) => setIsChecked(allChecked);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleClickAllCheck(allChecked), [allChecked]);

  return (
    <>
      <TrackEleSection>
        <TrackEleCover className="row">
          {check && (
            <CheckList className="col-auto align-self-center">
              <input
                type="checkbox"
                value={track.tid}
                onChange={handleClickCheck}
                checked={isChecked}
              />
            </CheckList>
          )}
          <AlbumImage className="col-auto align-self-center">
            <PlaylistAlbumImg
              src={`${process.env.PUBLIC_URL}/img/default_paper.png`}
              style={{ backgroundImage: `url(${track.imageSm})` }}
            />
            <PlayBtn className="play-btn">
              <i className="fa-solid fa-play fa-fw" />
            </PlayBtn>
          </AlbumImage>
          {track?.rank && (
            <TrackRank className="col-auto align-self-center d-none d-md-inline-block">
              {track.rank}
            </TrackRank>
          )}
          <AlbumInfo className="col align-self-center">
            <NameCover>
              <Link to={`/music/${track.tid}`}>{track.name}</Link>
            </NameCover>
            <ArtistCover>
              <Link to={`/artist/${track.arid}`}>{track.artist}</Link>
            </ArtistCover>
          </AlbumInfo>
          <AlbumName className="col-auto align-self-center d-none d-xl-inline-block">
            <Link to={`/album/${track.alid}`}>{track.album}</Link>
          </AlbumName>
          <LikeContainer className="col-auto align-self-center d-none d-md-inline-block">
            <button className="likeBtn btn">
              <i className="fa-regular fa-heart" />
            </button>
          </LikeContainer>
        </TrackEleCover>
      </TrackEleSection>
    </>
  );
}

export default Musics;
