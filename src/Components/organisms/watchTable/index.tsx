import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "../../atoms/typography";
import styled from "@emotion/styled";
import { Image } from "../../atoms/Icon";
import theme from "../../../themes";
import { ReactComponent as Switch } from "../../../assets/icons/switch.svg";
import Star from "../../atoms/checkbox";
import { Row } from "../watchlist/index.stories";

export interface TradeTabsProps {
  data: Row[];
  checked?: boolean;
  checkWatchList: (code: string) => boolean;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}

const TableSx = {
  minWidth: 650,
  backgroundColor: "transparent",
  boxShadow: "0px 0px 0px 0px",
  "&. MuiTableCell-root ": {
    borderBottom: "0px",
  },
};

const TheadSx = {
  borderBottom: "0px",
};

const TrowSx = {
  borderRadius: "4px",
  "&:not(:last-child)": {
    marginBottom: "8px",
  },
};

const LogoNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MarketCapContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PositiveChange = styled.div`
  color: ${theme.palette.success[500]};
`;

export const NegativeChange = styled.div`
  color: ${theme.palette.error[500]};
`;

const WatchTable = (props: TradeTabsProps) => {
  return (
    <TableContainer component={Paper} sx={TableSx}>
      <Table aria-label="simple table">
        <TableHead sx={TheadSx}>
          <TableRow sx={TrowSx}>
            <TableCell>
              <Typography
                variant="caption1"
                children="Name"
                sx={{ marginLeft: "24px" }}
              />
            </TableCell>
            <TableCell align="left">
              <Typography variant="caption1" children="Price" />
            </TableCell>
            <TableCell align="left">
              <Typography variant="caption1" children="Change" />
            </TableCell>
            <TableCell align="left">
              <MarketCapContainer>
                <Typography variant="caption1" children={"Market Cap "} />
                <Switch />
              </MarketCapContainer>
            </TableCell>
            <TableCell align="center">
              <Typography
                variant="caption1"
                children="Watch"
                sx={{ marginRight: "29px" }}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.code}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },

                marginTop: "12px",
                marginBottom: "12px",
                borderRadius: "4px",
                backgroundColor: theme.palette.textColor.default,
                border: `1px solid ${theme.palette.grey[100]}`,
              }}
            >
              <TableCell align="left">
                <LogoNameContainer>
                  <LogoContainer>
                    <Image
                      imgSrc={row.imgSrc}
                      imgAlt={row.code}
                      imgStyle={{}}
                    />
                  </LogoContainer>
                  <NameContainer>
                    <Typography
                      variant="body1"
                      children={row.name}
                      sx={{ color: theme.palette.textColor.high }}
                    />
                    <Typography
                      variant="overline"
                      children={row.code}
                      sx={{ color: theme.palette.textColor.medium }}
                    />
                  </NameContainer>
                </LogoNameContainer>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body2" children={row.price} />
              </TableCell>
              <TableCell align="left">
                {row.change.includes("+") ? (
                  <PositiveChange>
                    <Typography variant="body2" children={row.change} />
                  </PositiveChange>
                ) : (
                  <NegativeChange>
                    <Typography variant="body2" children={row.change} />
                  </NegativeChange>
                )}
              </TableCell>
              <TableCell align="left">
                <Typography
                  variant="body2"
                  children={"$" + row.marketcap + "T"}
                />
              </TableCell>
              <TableCell align="center">
                <Star
                  onCheckboxChange={props.onCheckboxChange}
                  id={row.code}
                  checked={props.checkWatchList(row.code)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WatchTable;
