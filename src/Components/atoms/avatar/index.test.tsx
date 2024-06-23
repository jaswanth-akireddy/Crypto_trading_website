import AvatarIcon, { AvatarProps } from ".";
import { render, screen } from "@testing-library/react";
import Avatar_image from "../../../assets/icons/avatar_image.svg";
import currency_avatar from "../../../assets/icons/currency_avatar.svg";
describe("Avatar", () => {
  test("Renders User Avatar having src and alt attribute", () => {
    const src = Avatar_image;
    const alt = "user Avatar";

    render(<AvatarIcon imgSrc={src} imgAlt={alt} />);
    const avatarImg = screen.getByRole("img");
    expect(avatarImg).toHaveAttribute("alt", alt);
    expect(avatarImg).toHaveAttribute("src", src);
  });

  test("Renders Currency Avatar having src and alt attribute", () => {
    const props: AvatarProps = {
      imgSrc: currency_avatar,
      imgAlt: "Currency Avatar",
      imgStyle: {
        height: "50px",
      },
    };

    render(<AvatarIcon {...props} />);
    const avatarImg = screen.getByRole("img");
    expect(avatarImg).toHaveAttribute("alt", props.imgAlt);
    expect(avatarImg).toHaveAttribute("src", props.imgSrc);
  });
});
