

import React from "react";
import { render, screen, fireEvent  } from '@testing-library/react';
import { Image } from ".";

describe("Image", () => {

  test("renders an image with custom props1", () => {
    const src = "../../../assets/images/login-image.svg";
    const alt = "Login";
    const style = { width: "100px", height: "100px" };
    render(<Image imgSrc={src} imgAlt={alt} imgStyle={style} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", src);
    expect(imageElement).toHaveAttribute("alt", alt);
    expect(imageElement).toHaveStyle("width: 100px; height: 100px;");
  });

   
  test("renders an image and handles click event", () => {
    const handleClick = jest.fn();
    render(<Image imgSrc="../../../assets/images/signUp-image.svg" imgAlt="SignUp" onClick={handleClick} />);
    const imageElement = screen.getByRole("img");
    fireEvent.click(imageElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});




