import { Link, useMatch } from "react-router-dom";
import { SideMenuContainer, SideMenuCover, LogoImg, 
  AnimationBoxCover, AnimationBox, SideMenu, TitleCover, 
  UserSection, UserCover, Nickname, DropdownBtn, DropdownMenu, 
  LoginCover, SideMenus, SearchSection, SearchCover } 
  from "../utils/components/SideMenuStyles";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../atoms";

function SideMenuForPC() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const homeMatch = useMatch("/");
  const chartMatch = useMatch("/chart");
  const tapeMatch = useMatch("/mixtape");
  const archiveMatch = useMatch("/archive");
  
  return <>
    <SideMenuContainer>
      <SideMenuCover>
        <LogoImg className="jelly" src={`${process.env.PUBLIC_URL}/coco.png`} />
        <AnimationBoxCover>
          <AnimationBox />
        </AnimationBoxCover>
        <SideMenu>
          <TitleCover>
            <div className="title">
              <Link to="/">coconut</Link>
            </div>
          </TitleCover>
          {isLoggedIn ? 
          <UserSection>
            <UserCover className="row">
              <div className="profile col-auto">
                <img src={`${process.env.PUBLIC_URL}/img/default_paper.png`} alt="profile"
                  style={{backgroundImage: `${process.env.PUBLIC_URL}/img/default_profile.jpg`}} />
              </div>
              <Nickname className="col-auto align-self-center">
                lazyhysong
              </Nickname>
              <div className="dropdown-section col align-self-center">
                <DropdownBtn>
                  <i className="fa-solid fa-caret-down" />
                </DropdownBtn>
                <DropdownMenu>
                  <button>logout</button>
                </DropdownMenu>
              </div>
            </UserCover>
          </UserSection> : <LoginCover>
            <Link className="button" to="/auth/login">
              <span className="button-back"></span>
              <span className="button-front">log in</span>
            </Link>
          </LoginCover>}
          <SideMenus>
            <li className={`${homeMatch && "active"}`}>
              <span className="icon-cover">
                <i className="fa-solid fa-house-chimney-window" />
              </span>
              <span>
                <Link to="/">home</Link>
              </span>
            </li>
            <li className={`${chartMatch && "active"}`}>
              <span className="icon-cover">
                <i className="fa-solid fa-trophy" />
              </span>
              <span>
                <Link to="/chart">chart</Link>
              </span>
            </li>
            <li className={`${tapeMatch && "active"}`}>
              <span className="icon-cover">
                <i className="fa-solid fa-record-vinyl" />
              </span>
              <span>
                <Link to="/mixtape">mix tape</Link>
              </span>
            </li>
            {isLoggedIn && <li className={`${archiveMatch && "active"}`}>
              <span className="icon-cover">
                <i className="fa-solid fa-heart" />
              </span>
              <span>
                <Link to="/archive">archive</Link>
              </span>
            </li>}
            <li>
              <span className="icon-cover">
                <i className="fa-solid fa-bars" />
                <i className="fa-solid fa-music" />
              </span>
              <span>
                <Link to="#">play list</Link>
              </span>
            </li>
          </SideMenus>
          <SearchSection>
            <SearchCover>
              <i className="fa-solid fa-magnifying-glass" />
              <form>
                <input type="search" name="search" placeholder="search" />
              </form>
            </SearchCover>
          </SearchSection>
        </SideMenu>
      </SideMenuCover>
    </SideMenuContainer>
  </>;
}

export default SideMenuForPC;