import Footer from "../../../src/Components/molecules/footer/index";
import ApplicationHeader from "../../../src/Components/organisms/applicationHeader/index";
import Navbar from "../../../src/Components/organisms/navbar";
import avatar from "../../../src/assets/icons/avatar_image.svg";
import PaymentSuccessCard from "../../../src/Components/organisms/paymentSuccessCard/index";
import styled from "styled-components";
import theme from "../../../src/themes";

export interface PaymentSuccessfulScreenProps {
  successType: "buy" | "sell";
  price: string;
}

const PaymentScreencontainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.palette.primary[100]};
  min-height: 95vh;
`;

const NavItems = styled.div``;

const MidDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainContainer = styled.div``;

const HeadDiv = styled.div``;

const MidDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  height: 80vh;
  align-items: center;
`;

const BottomDiv = styled.div``;

const PaymentSuccessfulScreen = (props: PaymentSuccessfulScreenProps) => {
  return (
    <PaymentScreencontainer>
      <NavItems>
        <Navbar />
      </NavItems>
      <MidDivContainer>
        <MainContainer>
          <HeadDiv>
            <ApplicationHeader
              imgSrc={avatar}
              imgAlt="alt"
              title="Checkout"
              isHeader={true}
            />
          </HeadDiv>
          <MidDiv>
            <PaymentSuccessCard
              successType={props.successType}
              price={props.price}
            />
          </MidDiv>
        </MainContainer>
        <BottomDiv>
          <Footer />
        </BottomDiv>
      </MidDivContainer>
    </PaymentScreencontainer>
  );
};

export default PaymentSuccessfulScreen;
