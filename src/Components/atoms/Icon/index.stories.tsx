import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image } from ".";
import Login from "../../../assets/images/login-image.svg";
import SignUp from "../../../assets/images/signUp-image.svg";
import DataReport from "../../../assets/images/data-report.svg";
import Bitcoin from "../../../assets/cryptoImages/bitcoin.svg";
import Ethereum from "../../../assets/cryptoImages/ethereum.svg";
import Dogecoin from "../../../assets/cryptoImages/dogecoin.svg";
import Mastercard from "../../../assets/paymentImages/mastercard-logo.svg";
import VisaLogo from "../../../assets/paymentImages/visa-logo.svg";
import Money from "../../../assets/icons/money.svg";

export default {
  title: "Components/Atoms/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;
export const LoginImage = Template.bind({});
LoginImage.args = {
  imgSrc: Login,
  imgAlt: "Login",
  imgStyle: { width: "100px", height: "100px" },
};

export const SignUpImage = Template.bind({});
SignUpImage.args = {
  imgSrc: SignUp,
  imgAlt: "SignUp",
  imgStyle: { width: "100px", height: "100px" },
};

export const DataReportImage = Template.bind({});
DataReportImage.args = {
  imgSrc: DataReport,
  imgAlt: "DataReport",
  imgStyle: { width: "100px", height: "100px" },
};

export const BitcoinImage = Template.bind({});
BitcoinImage.args = {
  imgSrc: Bitcoin,
  imgAlt: "Bitcoin",
  imgStyle: { width: "100px", height: "100px" },
};

export const EthereumImage = Template.bind({});
EthereumImage.args = {
  imgSrc: Ethereum,
  imgAlt: "Ethereum",
  imgStyle: { width: "100px", height: "100px" },
};

export const DogecoinImage = Template.bind({});
DogecoinImage.args = {
  imgSrc: Dogecoin,
  imgAlt: "Dogecoin",
  imgStyle: { width: "100px", height: "100px" },
};

export const MastercardImage = Template.bind({});
MastercardImage.args = {
  imgSrc: Mastercard,
  imgAlt: "Mastercard",
  imgStyle: { width: "100px", height: "100px" },
};

export const VisaLogoImage = Template.bind({});
VisaLogoImage.args = {
  imgSrc: VisaLogo,
  imgAlt: "VisaLogo",
  imgStyle: { width: "100px", height: "100px" },
};

export const MoneyIcon = Template.bind({});
MoneyIcon.args = {
  imgSrc: Money,
  imgAlt: "Money",
  imgStyle: { width: "100px", height: "100px" },
};