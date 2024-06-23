import styled from "@emotion/styled";
import { Image as Icon } from "../../atoms/Icon";
import MinetLogo from "../../../assets/navIcons/logo.svg";
import DashboardIcon from "../../../assets/navIcons/dashboard.svg";
import DashboardBlueIcon from "../../../assets/navIcons/blueDashBoard.svg";
import PortfolioIcon from "../../../assets/navIcons/portfolio.svg";
import TradeIcon from "../../../assets/navIcons/trade.svg";
import TradeBlueIcon from "../../../assets/navIcons/blueTrade.svg";
import NotificationIcon from "../../../assets/navIcons/notification.svg";
import LogoutIcon from "../../../assets/navIcons/logout.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Main = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  box-sizing: border-box;
`;
const Container = styled.div`
  width: 32px;
  height: 413px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 44px;
`;

const Navbar = () => {
  const Location = useLocation().pathname;

  const navigate = useNavigate();

  return (
    <>
      <Main>
        <Container>
          <Icon imgSrc={MinetLogo} imgAlt="Minet Logo" />
          <Icon
            imgSrc={Location == "/" ? DashboardBlueIcon : DashboardIcon}
            imgAlt="Dashboard Icon"
            onClick={() => {
              navigate("/");
            }}
          />
          <Icon imgSrc={PortfolioIcon} imgAlt="Portfolio Icon" />
          <Icon
            imgSrc={Location == "/TradeScreen" ? TradeBlueIcon : TradeIcon}
            imgAlt="Trade Icon"
            onClick={() => {
              navigate("/TradeScreen");
            }}
          />
          <Icon imgSrc={NotificationIcon} imgAlt="Notification Icon" />
          <Icon imgSrc={LogoutIcon} imgAlt="Logout Icon" />
        </Container>
      </Main>
    </>
  );
};

export default Navbar;
