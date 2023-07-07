import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

// apis
import { ITrackInfo, fetchTrackInfoById } from "../apis/deezerMusicApi";

// styles
import { Loader } from "../utils/globalStyles";
import Video from "../components/Video";

function ViewMusic() {
  const { id } = useParams();
  const { data: musicInfo, isLoading } = useQuery<ITrackInfo>(
    "musicInfo",
    () => fetchTrackInfoById(Number(id)),
    { retry: 0 }
  );

  useEffect(() => window.scrollTo(0, 0), []);

  return <>
  {isLoading ? 
    <Loader>
      <div>
        <div></div><div></div>
      </div>
    </Loader> : <>
    <Video query={`${musicInfo?.title_short}+${musicInfo?.artist.name}`} />
  </>}
  </>;
}

export default ViewMusic;