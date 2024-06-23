import { ChangeEvent, ReactNode } from "react";
import TextField from "./index";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  endAdornment?: ReactNode;
}

export default {
  title: "Components/Atoms/TextField",
};

export const searchbar = (): any => (
  <TextField
    handleChange={() => null}
    placeHolder="you@company.com"
    value={null}
  />
);

export const name = (): JSX.Element => (
  <TextField
    handleChange={() => null}
    placeHolder="Eg: john Deo"
    value={null}
  />
);

export const loginid = (): JSX.Element => (
  <TextField
    handleChange={() => null}
    placeHolder="enter Password"
    endAdornment={<VisibilityOffIcon />}
    value={null}
  />
);

export const password = (): JSX.Element => (
  <TextField
    handleChange={() => null}
    placeHolder="Search all assets"
    endAdornment={<SearchIcon />}
    value={null}
  />
);
