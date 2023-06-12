import { useQuery } from "react-query";
import styled from "styled-components";

// apis
import { fetchVideoIdsByQuery } from "../apis/youtubeApi";

// styles
import { Loader } from "../utils/globalStyles";

const Iframe = styled.iframe`
  display: hidden;
  opacity: 0.5;
`;

interface IVideo {
  videoId: string;
}

function Video({ videoId }: IVideo) {
  
  return <>
    <Iframe
      title="youtube video player"
      width="100%"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
      frameBorder="0"
      allowFullScreen
      rel="0"
      allow='autoplay; encrypted-media' />
  </>;
}

export default Video;