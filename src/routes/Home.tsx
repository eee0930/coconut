import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { isLoggedInState } from "../atoms";

// components
import CocoButton from "../components/CocoButton";
import ListTopTrack from "../components/ListTopTrack";
import ListNewMixTape from "../components/ListNewMixTape";

// styles
import { MobileLogoSection, MemberCover, LogoutBtn, Nickname, MainContent } 
  from "../utils/screens/HomeStyles";

function Home() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  useEffect(() => window.scrollTo(0, 0), []);
  return <>
    <Helmet>
      <title>Coconut Music</title>
    </Helmet>
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
      <ListNewMixTape />
    </MainContent>
    {/* [2. top 10]--------------------------------------------------------- */}
    <MainContent>
      <ListTopTrack />
    </MainContent>
  </>;
}

export default Home;