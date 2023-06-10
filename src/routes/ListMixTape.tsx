import { useEffect } from "react";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";

// apis
import { ITapeDatas, fetchTapeDatas } from "../apis/localApi";

// styles
import { Loader, TitleSection } from "../utils/globalStyles";
import { MainContent } from "../utils/screens/HomeStyles";
import Mixtapes from "../components/mixins/Mixtapes";

function ListMixTape() {
  const { data: tapeList, isLoading } = useQuery<ITapeDatas>(
    "tapeList", 
    fetchTapeDatas, 
    { retry: 0 }
  );

  useEffect(() => window.scrollTo(0, 0), []);

  return <>
  <Helmet>
    <title>MixTape | Coconut</title>
  </Helmet>
  <TitleSection>
    <h1 className="title">
      <i className="fa-solid fa-trophy" />
      <span>Mixtape</span>
    </h1>
  </TitleSection>
  {isLoading ? 
    <Loader>
      <div><div></div><div></div></div>
    </Loader> : <>
    <MainContent>
      <div className="row">
        {tapeList?.data.map(tape => 
          <div className="col-6 col-md-3" key={tape._id} >
            <Mixtapes data={tape} />
          </div>
        )}
      </div>
    </MainContent>
  </>}
  </>;
}

export default ListMixTape;