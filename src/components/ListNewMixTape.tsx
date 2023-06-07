import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { IMixtape, ITapeDatas, fetchTapeDatas } from "../apis/deezerMusicApi";
import { Loader } from "../utils/globalStyles";
import Mixtapes from "./mixins/Mixtapes";
import { getNewMixtapeList } from "../services/AlbumServiceImpl";

function ListNewMixTape() {
  const { data, isLoading } = useQuery<ITapeDatas>(
    "tapeList", 
    () => fetchTapeDatas(), 
    { retry: 0 }
  );

  let tapeList;
  if(!isLoading) {
    tapeList = getNewMixtapeList(data?.data as IMixtape[]);
  }
  
  return <>
    <h2 className="title">
      <Link to="/mixtape">
        <span>new mix tape</span>
        <i className="fa-solid fa-caret-right fa-fw" />
      </Link>
    </h2>
    {isLoading ? 
      <Loader>
        <div><div></div><div></div></div>
      </Loader> : <>
      <div className="row">
        {tapeList?.map(tape => 
          <Mixtapes data={tape} key={tape._id} />
        )}
      </div>
    </>}
  </>;
}
export default ListNewMixTape;