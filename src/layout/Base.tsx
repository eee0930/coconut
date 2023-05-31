import { Outlet } from "react-router-dom";
import CocoPlayer from "../components/CocoPlayer";
import SideMenuForMobile from "../components/SideMenuForMobile";
import SideMenuForPC from "../components/SideMenuForPC";
import { BaseLayoutContainer, CocoContainer, CocoMainContainer,
  BaseLayoutMenu, MobileSideMenuContainer } from "../utils/layoutStyles";

function Base() {
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
  </>;
}

export default Base;