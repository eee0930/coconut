// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CocoPlayer from "../components/CocoPlayer";
import SideMenuForMobile from "../components/SideMenuForMobile";
import SideMenuForPC from "../components/SideMenuForPC";
import { BaseLayoutContainer, CocoContainer, CocoMainContainer,
  BaseLayoutMenu, MobileSideMenuContainer, PageFadeIn } from "../utils/layoutStyles";

function Base() {
  // const [pageFade, setPageFade] = useState(false);
  // useEffect(() => {
  //   setPageFade(true);
  //   setTimeout(() => setPageFade(false), 1000);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [Outlet]);
  return <>
  <BaseLayoutContainer>
    <BaseLayoutMenu className="col-md-auto d-none d-md-inline-block">
     <SideMenuForPC />
    </BaseLayoutMenu> 
    <CocoMainContainer className="col-12 col-md">
      <CocoContainer>
        <Outlet />
      </CocoContainer>
    </CocoMainContainer>
  </BaseLayoutContainer>

  {/* player */}
  <CocoPlayer />

  <MobileSideMenuContainer>
    <SideMenuForMobile />
  </MobileSideMenuContainer>
  {/* { pageFade ? <PageFadeIn /> : null } */}
  </>;
}

export default Base;