import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  appFleaMarketBasename,
  appNearbyStoresBasename,
} from "../constants/prefix";

import logo from "../assets/images/logo.png";
import { Button } from "@mf-toy/ui-kit";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isClicked = (basePath: string) => {
    return location.pathname.includes(basePath);
  };

  const handleClickLogo = () => {
    navigate("/");
  };
  return (
    <Container>
      <HeaderWrapper>
        <LogoWrapper>
          <img src={logo} onClick={handleClickLogo} />
        </LogoWrapper>
        <Nav>
          <Button onClick={() => console.log("login")}>로그인</Button>
          <ul className="global-nav-items">
            <li>
              <Link
                to={appFleaMarketBasename}
                isClicked={isClicked(appFleaMarketBasename)}
              >
                중고거래
              </Link>
            </li>
            <li>
              <Link
                to={appNearbyStoresBasename}
                isClicked={isClicked(appNearbyStoresBasename)}
              >
                동네업체
              </Link>
            </li>
          </ul>
        </Nav>
      </HeaderWrapper>
    </Container>
  );
};

const Link = styled(NavLink)<{ isClicked: boolean }>`
  align-items: center;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  min-height: 51px;
  min-width: 80px;
  text-decoration: none;
  color: ${(props) => (props.isClicked ? "orange" : "#4d5159")};

  &:active {
    background-color: #fff;
  }
`;

const Container = styled.header`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
`;

const HeaderWrapper = styled.div`
  max-width: 1120px;
  padding: 0 12px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  & .global-nav-items {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: nowrap;
    list-style-type: none;
    opacity: 1;
    margin: 0;
    padding: 0;
  }
`;

export default Header;
