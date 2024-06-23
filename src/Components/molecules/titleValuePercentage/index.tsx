import React from "react";
import { Stack, styled } from "@mui/material";
import Typography from "../../atoms/typography/index";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TransitEnterexitIcon from "@mui/icons-material/TransitEnterexit";
import theme from "../../../themes";
const StyledArrowOutwardIconUpward = styled(ArrowOutwardIcon)(({ theme }) => ({
  color: theme.palette.success["500"],
}));
const TransitEnterexitIconDownWard = styled(TransitEnterexitIcon)(
  ({ theme }) => ({
    color: theme.palette.error["500"],
  })
);
const StyledTypographyUpward = styled(Typography)(({ theme }) => ({
  color: theme.palette.success["500"],
}));
const StyledTypographyDownWard = styled(Typography)(({ theme }) => ({
  color: theme.palette.error["500"],
}));
export interface TitleValuePercentageProps {
  title: string;
  value: string;
  changePercentage: string;
}
const TitleValuePercentage = ({
  title,
  value,
  changePercentage,
}: TitleValuePercentageProps) => {
  return (
    <>
      <Stack>
        <Stack direction="row">
          <Typography color={theme.palette.textColor.medium}>{title}</Typography>
          <Stack direction="row" alignItems="center" >
            {changePercentage.includes("-") ? (
              < >
                <TransitEnterexitIconDownWard style={{ color: 'theme.palette.color.error[500]' }}/>
                <StyledTypographyDownWard variant="caption2" color={'theme.palette.color.error[500]'}>
                  {changePercentage}
                </StyledTypographyDownWard>
              </>
            ) : (
              <>
                <StyledArrowOutwardIconUpward style={{ color: 'theme.palette.color.success[600]' }}/>
                <StyledTypographyUpward variant="caption2" color={'#theme.palette.color.success[600]'}>
                  {changePercentage}
                </StyledTypographyUpward>
              </>
            )}
          </Stack>
        </Stack>
        <Typography variant="h6">{value}</Typography>
      </Stack>
    </>
  );
};
export default TitleValuePercentage;