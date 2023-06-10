import { useQuery } from "react-query";
import styled from "styled-components";

// apis
import { fetchVideoIdsByQuery } from "../apis/youtubeApi";
import { Loader } from "../utils/globalStyles";

const Iframe = styled.iframe`
  display: hidden;
  opacity: 0.5;
`;

interface IVideo {
  query: string;
}

function Video({ query }: IVideo) {
  const { data, isLoading } = useQuery(
    "video",
    () => fetchVideoIdsByQuery(query),
    { retry: 0 }
  );
  
  let videoId;
  if(!isLoading) {
    videoId = data.items[0].id.videoId as string;
  }

  return <>
  {isLoading ? 
    <Loader>
      <div>
        <div></div><div></div>
      </div>
    </Loader> : <>
    <Iframe
      title="youtube video player"
      width="100%"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
      frameBorder="0"
      allowFullScreen
      allow='autoplay; encrypted-media' />
  </>}
  </>;
}

export default Video;