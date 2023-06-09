import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Mixtapes from "./mixins/Mixtapes";
import { getNewMixtapeList } from "../services/AlbumServiceImpl";
import { IMixtape, ITapeDatas, fetchTapeDatas } from "../apis/localApi";
import { Loader } from "../utils/globalStyles";

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
          <div className="col-6 col-md-3" key={tape._id} >
            <Mixtapes data={tape} />
          </div>
        )}
      </div>
    </>}
  </>;
}
export default ListNewMixTape;