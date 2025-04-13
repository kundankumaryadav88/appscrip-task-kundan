import React from "react";
import Link from "next/link";
import { Heading, Img, Text } from "./..";

// Reusable component for icon + text item
const IconTextItem = ({ iconSrc, text }) => (
  <div className="flex items-center gap-2.5">
    <Link href="#">
      <Img src={iconSrc} width={16} height={16} alt="icon" className="h-[16px] w-[16px]" />
    </Link>
    <Text size="xs" as="p" className="self-end tracking-[1.00px] !text-pink-400">
      {text}
    </Text>
  </div>
);

// Reusable icon link
const IconLink = ({ src, alt }) => (
  <Link href="#">
    <Img src={src} width={24} height={24} alt={alt} className="h-[24px] w-[24px]" />
  </Link>
);

// Navigation items
const navItems = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];
const icons = [
  { src: "img_contrast.svg", alt: "contrast" },
  { src: "img_favorite.svg", alt: "favorite" },
  { src: "img_bag.svg", alt: "bag" },
  { src: "img_lock.svg", alt: "lock" },
];

export default function Header({ ...props }) {
  return (
    <header {...props}>
      {/* Top bar */}
      <div className="flex justify-center self-stretch bg-black-900 py-[7px]">
        <div className="container-xs flex justify-between gap-5 px-[178px] md:p-5 md:px-5 sm:flex-col">
          <IconTextItem iconSrc="img_grid.svg" text="Lorem ipsum dolor" />
          <IconTextItem iconSrc="img_grid.svg" text="Lorem ipsum dolor" />
          <IconTextItem iconSrc="img_grid.svg" text="Lorem ipsum dolor" />
        </div>
      </div>

      {/* Main header */}
      <div className="flex justify-center self-stretch border-b border-solid border-gray-300 bg-white-A700 py-[25px] sm:py-5">
        <div className="container-xs mt-2.5 flex flex-col items-center gap-[59px] md:p-5 sm:gap-[29px]">
          {/* Logo & Icons Row */}
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            <Img
              src="img_header_logo.svg"
              width={36}
              height={36}
              alt="headerlogo"
              className="h-[36px] w-[36px]"
            />
            <div className="flex w-[54%] items-center justify-between gap-5 md:w-full">
              <Text size="2xl" as="p" className="!text-gray-900">
                LOGO
              </Text>
              <div className="flex w-[36%] items-center justify-between gap-5">
                {icons.map((icon) => (
                  <IconLink key={icon.alt} src={icon.src} alt={icon.alt} />
                ))}
                <div className="flex items-center gap-[5px]">
                  <Heading size="s" as="h6" className="tracking-[1.00px]">
                    ENG
                  </Heading>
                  <Link href="#">
                    <Img
                      src="img_checkmark.svg"
                      width={16}
                      height={16}
                      alt="checkmark"
                      className="h-[16px] w-[16px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <ul className="flex flex-wrap gap-[63px] md:gap-5">
            {navItems.map((item) => (
              <li key={item}>
                <Link href="#">
                  <Heading size="lg" as="h5" className="tracking-[1.00px]">
                    {item}
                  </Heading>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
