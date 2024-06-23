import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";

interface SearchBarProps {
  searchTerm: string;
  onSearchBoxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearSearch: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <TextField
      placeholder="search all assets"
      size="small"
      sx={{ width: 230, height: 40 }}
      value={props.searchTerm}
      onChange={props.onSearchBoxChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {props.searchTerm.length ? (
              <IconButton
                size="small"
                data-testid="clear-button"
                onClick={props.handleClearSearch}
              >
                <Clear />
              </IconButton>
            ) : (
              <Search data-testid="search-icon" />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
