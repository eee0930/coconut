import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Albums from "./mixins/Albums";
import { ITopTracks, fetchTopTracks } from "../apis/deezerMusicApi";
import { Loader } from "../utils/globalStyles";

function ListNewMixTape() {
  const { data: topTracks, isLoading } = useQuery<ITopTracks>(
    "topTracks", () => fetchTopTracks()
  );
  
  return <>
    {isLoading ? 
      <Loader>
        <div><div></div><div></div></div>
      </Loader>
    : <>
      <h2 className="title">
        <Link to="/chart">
          <span>new mix tape</span>
          <i className="fa-solid fa-caret-right fa-fw" />
        </Link>
      </h2>
      <div className="row">
        {/* {topTracks?.data.slice(5).map(track => 
          <Albums key={track.tid} />)} */}
      </div>
    </>}
  </>;
}

export default ListNewMixTape;