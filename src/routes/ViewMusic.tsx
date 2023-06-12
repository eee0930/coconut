import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

// apis
import { ITrackInfo, fetchTrackInfoById } from "../apis/deezerMusicApi";

// services
import { getTrackInfo } from "../services/MusicServiceImpl";

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

  let refindInfo;
  if(!isLoading && musicInfo) {
    refindInfo = getTrackInfo(musicInfo);
  }
  return <>
  {isLoading ? 
    <Loader>
      <div>
        <div></div><div></div>
      </div>
    </Loader> : <>
    {/* <Video videoId={refindInfo?.videoId as string} /> */}
  </>}
  </>;
}

export default ViewMusic;