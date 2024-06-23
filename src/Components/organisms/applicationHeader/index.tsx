import React from "react";
import styled from "@emotion/styled";
import theme from "../../../themes";
import Typography from "../../atoms/typography";
import ButtonComponent from "../../atoms/button";
import AvatarIcon from "../../atoms/avatar";
import { ReactComponent as CheveronIcon } from "../../../assets/icons/chevron-down.svg";
import { ReactComponent as VectorIcon } from "../../../assets/icons/vector.svg";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  isHeader?:boolean;
}

const HeaderContainer = styled.div`
  width: 90vw;
  height: 82px;
  padding: 0px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.palette.textColor.default};
`;

const TypographyContainer = styled.div`
  margin-left: 20px;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 757px;
`;

const VectorContainer = styled.div`
  margin: 0px 21px;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const ApplicationHeader = (props: HeaderProps) => {
  const navigate = useNavigate();
  if (props.isHeader){return (
    <>
      <HeaderContainer>
        <TypographyContainer>
          <Typography
            variant="h6"
            children={props.title}
            sx={{ color: theme.palette.textColor.high }}
          />
        </TypographyContainer>
        <RightDiv>
          <ButtonContainer>
            <ButtonComponent
              children="Sell"
              label="Sell"
              textColor={theme.palette.grey[50]}
              variant="contained"
              sx={{
                backgroundColor: theme.palette.warning[500],
                padding: "0px 16px",
                width: "120px",
                height: "42px",
                "&:hover": {
                  backgroundColor: theme.palette.warning[500],
                  color: theme.palette.grey[50],
                },
              }}
            />

            <ButtonComponent
              children="Buy"
              label="Buy"
              textColor={theme.palette.grey[50]}
              variant="contained"
              sx={{ width: "120px", height: "42px", marginLeft: "12px" }}

              onClick={()=>{navigate('/purchase-screen')}}
            />
          </ButtonContainer>
          <VectorContainer>
            <VectorIcon />
          </VectorContainer>
          <AvatarContainer>
            <AvatarIcon imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
            <CheveronIcon />
          </AvatarContainer>
        </RightDiv>
      </HeaderContainer>
    </>
  );
}
else{
  return(
  <>
      <HeaderContainer>
        <TypographyContainer>
          <Typography
            variant="h6"
            children={props.title}
            sx={{ color: theme.palette.textColor.high }}
          />
        </TypographyContainer>
        <RightDiv>
          <VectorContainer>
            <VectorIcon />
          </VectorContainer>
          <AvatarContainer>
            <AvatarIcon imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
            <CheveronIcon />
          </AvatarContainer>
        </RightDiv>
      </HeaderContainer>
    </>
    )
   }
};

export default ApplicationHeader;

