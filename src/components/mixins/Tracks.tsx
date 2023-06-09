import { useEffect, useState } from "react";
import { ITrackInfo } from "../../atoms";

// styles
import { TrackEleSection, TrackEleCover,
  CheckList, TrackRank, TrackNameCover, LikeContainer, TrackInfo, AlbumName } 
  from "../../utils/components/MusicElementsStyles";

interface ITracks {
  album: string;
  track: ITrackInfo;
  allChecked: boolean;
};

function Tracks({ album, track, allChecked }: ITracks) {
  const [isChecked, setIsChecked] = useState(allChecked);
    
  const handleClickCheck = () => setIsChecked(prev => !prev);
  const handleClickAllCheck = () => setIsChecked(!allChecked);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleClickAllCheck, [allChecked]);  
  
  return <>
  <TrackEleSection>
    <TrackEleCover className="row">
      <CheckList className="col-auto align-self-center">
        <input type="checkbox" value={track.tid} 
          onChange={handleClickCheck} checked={isChecked} />
      </CheckList>
      <TrackRank className="col-auto align-self-center">
        {track.rank}
      </TrackRank>
      <TrackInfo className="col align-self-center">
        <TrackNameCover>
        {track.name}
        </TrackNameCover>
      </TrackInfo>
      <AlbumName className="col-auto align-self-center d-none d-xl-inline-block">
        {album}
      </AlbumName>
      <LikeContainer className="col-auto align-self-center d-none d-md-inline-block">
        <button className="likeBtn btn">
          <i className="fa-regular fa-heart" />
        </button>
      </LikeContainer>
    </TrackEleCover>
  </TrackEleSection>
  </>;
}

export default Tracks;