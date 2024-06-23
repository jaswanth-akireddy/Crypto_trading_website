import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import WatchTable from "../watchTable";
import { Row } from "./index.stories";
import SearchBar from "../../molecules/search";
import { MuiDropDown } from "../../molecules/assetsDropDown";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Dataprops {
  rows: Row[];
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
`;

const ToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const WatchListTabs = (props: Dataprops) => {
  const [value, setValue] = React.useState(0);

  const [watchList, setWatchList] = React.useState<string[]>([]);

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const id = event.target.id.toString();
    if (checked) {
      setWatchList((prevList) => [...prevList, id]);
    } else {
      setWatchList((prevList) => prevList.filter((item) => item !== id));
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSearchTerm("");
  };

  const checkWatchList = (code: string) => {
    return watchList.includes(code);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <HeaderContainer>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All Assets" {...a11yProps(0)} />
          <Tab label="Watchlist" {...a11yProps(1)} />
        </Tabs>
        <ToolsContainer>
          <SearchBar
            searchTerm={searchTerm}
            onSearchBoxChange={handleSearch}
            handleClearSearch={handleClearSearch}
          />
          <MuiDropDown
            content="Time"
            sx={{ width: "78px", height: "40px", margin: "10px" }}
            options={[ { value: "24h"},{ value: "12h"}, { value: "1h"}]}
          />
          <MuiDropDown
            content="All assets"
            sx={{ width: "110px", height: "40px", marginLeft: "10px" }}
            options={[ { value: "24h"},{ value: "12h"}, { value: "1h"}]}
          />
        </ToolsContainer>
      </HeaderContainer>
      <TabPanel value={value} index={0}>
        <WatchTable
          data={props.rows.filter(
            (row) =>
              row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.code.toLowerCase().includes(searchTerm.toLowerCase())
          )}
          onCheckboxChange={handleCheckBox}
          checkWatchList={checkWatchList}
          searchTerm={searchTerm}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WatchTable
          data={props.rows.filter(
            (row) =>
              watchList.includes(row.code) &&
              (row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                row.code.toLowerCase().includes(searchTerm.toLowerCase()))
          )}
          onCheckboxChange={handleCheckBox}
          checkWatchList={checkWatchList}
          searchTerm={searchTerm}
        />
      </TabPanel>
    </Box>
  );
};

export default WatchListTabs;
