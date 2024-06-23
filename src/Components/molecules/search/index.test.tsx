/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import SearchBar from ".";
import React from "react";

describe("SearchBar", () => {
  it("renders without crashing", () => {
    render(
      <SearchBar
        searchTerm=""
        onSearchBoxChange={() => {}}
        handleClearSearch={() => {}}
      />
    );
  });

  it("displays the placeholder text", () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        searchTerm=""
        onSearchBoxChange={() => {}}
        handleClearSearch={() => {}}
      />
    );
    expect(getByPlaceholderText("search all assets")).toBeInTheDocument();
  });

  it("displays the search term in the input field", () => {
    const searchTerm = "test search term";
    const { getByRole } = render(
      <SearchBar
        searchTerm={searchTerm}
        onSearchBoxChange={() => {}}
        handleClearSearch={() => {}}
      />
    );
    const inputField = getByRole("textbox") as HTMLInputElement;
    expect(inputField.value).toBe(searchTerm);
  });

  it("calls the handleClearSearch function when the user clicks the clear button", () => {
    const handleClearSearch = jest.fn();
    const { getByTestId } = render(
      <SearchBar
        searchTerm="test search term"
        onSearchBoxChange={() => {}}
        handleClearSearch={handleClearSearch}
      />
    );
    const clearButton = getByTestId("clear-button");
    fireEvent.click(clearButton);
    expect(handleClearSearch).toHaveBeenCalled();
  });

  it("displays the Search icon when the input field is empty", () => {
    const { getByTestId } = render(
      <SearchBar
        searchTerm=""
        onSearchBoxChange={() => {}}
        handleClearSearch={() => {}}
      />
    );
    const searchIcon = getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();
  });
});
