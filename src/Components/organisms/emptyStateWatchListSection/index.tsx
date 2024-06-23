import styled from "@emotion/styled";
import { ReactComponent as Vector } from "../../../assets/icons/vector1.svg";
import { ReactComponent as LeftIcon } from "../../../assets/icons/chevron-left.svg";
import { ReactComponent as Edit } from "../../../assets/icons/edit.svg";
import { ReactComponent as ListIcon } from "../../../assets/icons/list.svg";
import { ReactComponent as GridIcon } from "../../../assets/icons/grid.svg";
import { ReactComponent as Bitcoin } from "../../../assets/cryptoImages/bitcoin.svg";
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrow-up-right.svg";
import Typography from "../../atoms/typography";
import theme from "../../../themes";
import { Link } from "react-router-dom";
import Graph from "../graph";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: max-content;
  height: 174px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const StyledBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 840px;
  height: 32px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const LeftSideBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 244px;
  height: 28px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const RightBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 212px;
  height: 32px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const ButtonIcon1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 130px;
  height: 24px;
  flex: none;
  order: 2;
  flex-grow: 0;
`;
const ButtonIcon2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 124px;
  height: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 60px;
  height: 32px;
  flex: none;
  order: 2;
  flex-grow: 0;
`;
const StyledBody = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  gap: 10px;
  width: 840px;
  height: 130px;
  background: #ffffff;
  border: 1px solid #e8e8f7;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const IconText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 42px;
  height: 82px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 106px;
  height: 82px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Text1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
  width: 106px;
  height: 46px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Text2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2px 8px;
  gap: 10px;
  width: 41px;
  height: 30px;
  background: #f2f2f7;
  border-radius: 100px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Graph1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  width: 622px;
  height: 82px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const GraphText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 55px;
  height: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const StyledLink = styled.div`
  height: 16px;
  font-family: "Graphik";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #0052ff;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-decoration: none;
`;
const data = [
  { date: "JUN 8", coinValue: 1000 },
  { date: "JUN 15", coinValue: 3000 },
  { date: "JUN 22", coinValue: 2000 },
  { date: "JUN 29", coinValue: 2780 },
  { date: "JUL 6", coinValue: 1890 },
  { date: "JUL 13", coinValue: 2390 },
];

const EmptyStateWatchListSection: React.FC = () => {
  return (
    <StyledContainer>
      <StyledBar>
        <LeftSideBar>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.textColor.high }}
          >
            Watchlist
          </Typography>
          <Vector />
          <ButtonIcon1>
            <StyledLink>
              <Link to="/TradeScreen" style={{ textDecoration: "none" }}>
                <Typography
                  variant="caption1"
                  sx={{ color: theme.palette.primary[500] }}
                >
                  Discover asserts
                </Typography>
              </Link>
            </StyledLink>
            <LeftIcon />
          </ButtonIcon1>
        </LeftSideBar>
        <RightBar>
          <ButtonIcon2>
            <StyledLink>
              <Link to="/TradeScreen" style={{ textDecoration: "none" }}>
                <Typography
                  variant="caption1"
                  sx={{ color: theme.palette.primary[500] }}
                >
                  View Watchlist
                </Typography>
              </Link>
            </StyledLink>
            <Edit />
          </ButtonIcon2>
          <Vector />
          <Icons>
            <GridIcon />
            <ListIcon />
          </Icons>
        </RightBar>
      </StyledBar>

      <StyledBody>
        <IconText>
          <Bitcoin />
        </IconText>
        <Text>
          <Text1>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.textColor.high }}
            >
              Bitcoin
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.textColor.high }}
            >
              $3,00,439.93
            </Typography>
          </Text1>
          <Text2>
            <Typography
              variant="overline"
              sx={{ color: theme.palette.grey[500] }}
            >
              24h
            </Typography>
          </Text2>
        </Text>
        <Graph1>
          <GraphText>
            <ArrowRight />
            <Typography
              variant="overline"
              sx={{ color: theme.palette.success[500], width: 35, height: 30 }}
            >
              +1.2%
            </Typography>
          </GraphText>
          <Graph data={data} height={57.5} width={622} />
        </Graph1>
      </StyledBody>
    </StyledContainer>
  );
};

export default EmptyStateWatchListSection;
