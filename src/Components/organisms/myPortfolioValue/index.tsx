import React, { useEffect, useRef, useState } from "react";
import { Paper, Stack } from "@mui/material";
import PortfolioTimeBar from "../../molecules/portfolioTimebar/index";
import TitleValuePercentage from "../../molecules/titleValuePercentage/index";
import theme from "../../../themes/index";
import { ReactComponent as DataReport } from "../../../assets/images/data-report.svg";

import styled from "styled-components";

export const portfolioValueSectionConstants = {
  titles: ["Total Investment", "Bitcoin"],
  values: ["$0.00", "Value 2"],
  changePercentages: ["0.0%", "+8.2%"],
  timeOptions: ["1H", "24H", "1W", "1M", "1Y", "ALL"],
  data: [
    { x: 1, y: 100 },
    { x: 2, y: 200 },
    { x: 3, y: 300 },
  ],
};

const PortfolioContainer = styled.div`
  border: 1px solid ${theme.palette.grey[100]};
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 154px;
`;

const PortfolioValueSection = () => {
  const [graphWidth, setGraphWidth] = useState<any>(1200);
  useEffect(() => {
    const paperWidth = paperRef.current?.clientWidth;
    setGraphWidth(paperWidth);
  }, []);
  const paperRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <PortfolioContainer>
        <Paper
          sx={{
            padding: "24px",
          }}
          elevation={0}
          ref={paperRef}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="12px"
          >
            <Stack direction="row" gap="24px">
              <TitleValuePercentage
                title={portfolioValueSectionConstants.titles[0]}
                value={portfolioValueSectionConstants.values[0]}
                changePercentage={
                  portfolioValueSectionConstants.changePercentages[0]
                }
              />
            </Stack>
            <PortfolioTimeBar
              options={portfolioValueSectionConstants.timeOptions}
            />
          </Stack>
          <Container>
            <DataReport />
          </Container>
        </Paper>
      </PortfolioContainer>
    </>
  );
};
export default PortfolioValueSection;
