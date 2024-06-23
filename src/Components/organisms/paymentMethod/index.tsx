import { Box, Grid } from "@mui/material";
import { Image } from "../../atoms/Icon";
import axios from "axios";
import ellipse from '../../../assets/icons/rupee.svg'

import Typography from "../../atoms/typography";
import theme from "../../../themes";
import { useEffect, useState } from "react";

interface PaymentMethodProps {
  subTitle: string;
  isActive?:boolean;
}
interface Wallets {
  id: number;
  iconURL: string;
  coinName: string;
  balance: string;
}



export function getImage(pathname:string){
  return ellipse
}

export const PaymentMethod = (props: PaymentMethodProps) => {
  const [error, setError] = useState("");
  const [balance, setBalance] = useState(34000);
  const [items, setItems] = useState<Wallets[]>([
    {
      id: 0,
      iconURL: "",
      coinName: "",
      balance: "",
    },
  ]);

    useEffect(() => {
      if(props.isActive){
        axios
        .get(" http://localhost:3001/wallets")
        .then((response) => {
        })
        .catch((err) => setError("can't load the page"));
      }
    }, []);
  return (
    <>
      {error && <p data-testid="error">{error}</p>}
      <Box
        border={`1px solid ${theme.palette.grey[100]}`}
        borderRadius="4px"
        padding="24px"
        gap="16px"
        display={"grid"}
        bgcolor={theme.palette.textColor.default}
      >
        <Typography
          data-testid="title"
          variant="subtitle1"
          fontFamily={"Graphik"}
          color={"#343446"}
          fontWeight={500}
        >
          {props.subTitle}
        </Typography>
        <Box border={`1px solid ${theme.palette.grey[100]}`} borderRadius="4px">
          <Grid
            item
            display={"flex"}
            justifyContent={"space-between"}
            padding="16px"
            container
          >
            <Grid item display={"flex"}>
              <Grid item display={"flex"} flexWrap="wrap">
                <Grid item mt={0.9} mr={1}>
                  <Image imgSrc={ellipse} imgAlt={"ellipseDollar"} />
                </Grid>
              </Grid>
              <Grid item container direction="column" mt={0.3}>
                <Grid item>
                  <Typography variant="caption1" fontFamily={'Graphik'} fontWeight={500} color={'#343446'}>{`${items[0].coinName} USD Coin (cash)`}</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color={`${theme.palette.textColor.medium}`}
                    fontFamily={"Graphik"}
                  >
                    {`Total balance: $${balance.toLocaleString()}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item mt={2}>
              <Typography
                variant="caption1"
                color={`${theme.palette.textColor.medium}`}
              >
                Default
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
