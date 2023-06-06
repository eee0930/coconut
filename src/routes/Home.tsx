import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../atoms";
import { MobileLogoSection, MemberCover, LogoutBtn, Nickname, MainContent } 
  from "../utils/screens/HomeStyles";
import { Link } from "react-router-dom";
import CocoButton from "../components/CocoButton";

function Home() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  return <>
    {/* mobile logo */}
    <MobileLogoSection>
      <div className="row">
        <h1 className="title col align-self-center">
          <img src={`${process.env.PUBLIC_URL}/coco.png`} alt="coconut"/>
          <span>coconut</span>
        </h1>
        <MemberCover className="col-auto align-self-center">
          {isLoggedIn ? 
            <LogoutBtn>
              <img src={`${process.env.PUBLIC_URL}/img/default_paper.png`} alt="coconut"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/default_profile.png)` }} />
              <Nickname>lazyhysong</Nickname>
            </LogoutBtn> : 
            <Link to="/auth/login">
              <CocoButton text="Login" />
            </Link>
          }
        </MemberCover>
      </div>
    </MobileLogoSection>
    {/* [1. mix tape]------------------------------------------------------- */}
    <MainContent>
      <h2 className="title">
        <Link to="/mixtape">
          <span>new mix tape</span>
          <i className="fa-solid fa-caret-right fa-fw" />
        </Link>
      </h2>
      <div className="row">

      </div>
    </MainContent>
    {/* [2. top 10]--------------------------------------------------------- */}
    <MainContent>
      <h2 className="title">
        <Link to="/chart">
          <span>today's top 10</span>
          <i className="fa-solid fa-caret-right fa-fw" />
        </Link>
      </h2>
      <div className="row">
        <div className="col-12 col-md-6">

        </div>
      </div>
    </MainContent>
  </>;
}

export default Home;