"use client";
import React, { useState, useEffect } from "react";
import {
  Img,
  Text,
  Heading,
  Button,
  CheckBox,
  SelectBox,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import styles from "./WebPLPWithFilterPage.module.css";
// Extracted reusable constants
const DROPDOWN_OPTIONS = [
  { label: "Recommended", value: "Recommended" },
  { label: "Newest First", value: "Newest First" },
  { label: "Popular", value: "Popular" },
  { label: "High to Low", value: "High to Low" },
  { label: "Low to High", value: "Low to Low" },
];

// Filter categories data
const FILTER_CATEGORIES = [
  { id: 0, title: "IDEAL FOR", expanded: true },
  { id: 1, title: "COLOR", expanded: false },
  { id: 2, title: "SIZE", expanded: false },
  { id: 3, title: "PRICE", expanded: false },
  { id: 4, title: "MATERIAL", expanded: false },
  { id: 5, title: "BRAND", expanded: false },
  { id: 6, title: "STYLE", expanded: false },
  { id: 7, title: "SEASON", expanded: false },
];

// // Sample product data
// const PRODUCTS = [
//   {
//     id: 1,
//     name: "Product Name",
//     imageFront: "img_front_pic.png",
//     imageHover: "img_hover_pic.png",
//     isNew: true,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 2,
//     name: "Product Name",
//     imageFront: "img_front_pic_399x300.png",
//     imageHover: "img_hover_pic_399x300.png",
//     isNew: false,
//     inStock: false,
//     isFavorited: false,
//   },
//   {
//     id: 3,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438.png",
//     imageHover: "img_rectangle_29438.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: true,
//   },
//   {
//     id: 4,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_399x300.png",
//     imageHover: "img_rectangle_29438_399x300.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 5,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_1.png",
//     imageHover: "img_rectangle_29438_1.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 6,
//     name: "Product Name",
//     imageFront: "img_hover_pic_399x300.png",
//     imageHover: "img_hover_pic_399x300.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 7,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_2.png",
//     imageHover: "img_rectangle_29438_2.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 8,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_3.png",
//     imageHover: "img_rectangle_29438_3.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 9,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_4.png",
//     imageHover: "img_rectangle_29438_4.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 10,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_5.png",
//     imageHover: "img_rectangle_29438_5.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 11,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_6.png",
//     imageHover: "img_rectangle_29438_6.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 12,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_7.png",
//     imageHover: "img_rectangle_29438_7.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   // More products to complete the grid
//   {
//     id: 13,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438.png",
//     imageHover: "img_rectangle_29438.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 14,
//     name: "Product Name",
//     imageFront: "img_front_pic_399x300.png",
//     imageHover: "img_front_pic_399x300.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 15,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_399x300.png",
//     imageHover: "img_rectangle_29438_399x300.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 16,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_4.png",
//     imageHover: "img_rectangle_29438_4.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 17,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_1.png",
//     imageHover: "img_rectangle_29438_1.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
//   {
//     id: 18,
//     name: "Product Name",
//     imageFront: "img_rectangle_29438_7.png",
//     imageHover: "img_rectangle_29438_7.png",
//     isNew: false,
//     inStock: true,
//     isFavorited: false,
//   },
// ];

const ProductCard = ({ product }) => {
  const { title, price, image, description, rating, category } = product;

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__imageContainer}>
        <img
          src={`${image}`}
          alt={title}
          className={styles.productCard__image}
        />
      </div>

      <div className={styles.productCard__rating}>
        <span style={{ color: "blue" }}>{rating.rate}</span>
        <span style={{ color: "gold" }}>
          {"⭐".repeat(Math.round(rating.rate))}
        </span>
        <span style={{ color: "blue" }}>({rating.count} reviews)</span>
      </div>

      <div className={styles.productCard__details}>
        <div className={styles.productCard__info}>
          <Heading as="h6" className={styles.productCard__name}>
            {title}
          </Heading>
          <Text as="p" className={styles.productCard__category}>
            {category}
          </Text>
          <Text as="p" className={styles.productCard__description}>
            {description}
          </Text>
          <div className={styles.productCard__price}>
            <Text as="span" className={styles.productCard__priceAmount}>
              ${price}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterAccordion = ({ category, index }) => {
  return (
    <AccordionItem uuid={index} key={`expandablelist${index}`}>
      <div className={styles.filterAccordion}>
        <AccordionItemHeading className="w-full">
          <AccordionItemButton>
            <AccordionItemState>
              {(props) => (
                <div className={styles.filterAccordion__headingContainer}>
                  <Heading as="h2" className={styles.filterAccordion__heading}>
                    {category.title}
                  </Heading>
                  <Img
                    src="img_checkmark.svg"
                    width={16}
                    height={16}
                    alt="checkmark"
                    className={styles.filterAccordion__checkmark}
                  />
                </div>
              )}
            </AccordionItemState>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {category.title === "IDEAL FOR" && (
            <div
              className={`${styles.filterAccordion__panel} md:${styles.filterAccordion__panelFullWidth}`}
            >
              <Text size="lg" as="p" className={styles.filterAccordion__textLg}>
                All
              </Text>
              <Text size="md" as="p" className={styles.filterAccordion__textMd}>
                Unselect all
              </Text>
              <CheckBox
                name="men"
                label="Men"
                id="men"
                className={styles.filterAccordion__checkBoxLabel}
              />
              <CheckBox
                name="women"
                label="Women"
                id="women"
                className={styles.filterAccordion__checkBoxLabel}
              />
              <CheckBox
                name="babykids"
                label="Baby & Kids"
                id="babykids"
                className={`${styles.filterAccordion__checkBoxLabel} self-stretch`}
              />
            </div>
          )}
        </AccordionItemPanel>
      </div>
      <div className={styles.filterAccordion__divider} />
    </AccordionItem>
  );
};



export default function WebPLPWithFilterPage() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [selectedSort, setSelectedSort] = useState("Recommended");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const target = document.getElementById("menuPortalTarget");
    setMenuPortalTarget(target);

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);  // Ensure loading state is reset in case of error
      }
    };

    fetchProducts();
  }, []);

  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="flex w-full flex-col items-center gap-[58px] bg-white-A700 sm:gap-[29px]">
      <div id="menuPortalTarget" />

      {/* Header section */}
      <Header className="self-stretch" />

      {/* Hero section */}
      <div className="container-xs md:p-5">
        <div className="flex flex-col items-center gap-[72px] md:gap-[54px] sm:gap-9">
          {/* Title section */}
          <div className="flex w-[58%] flex-col items-center gap-[19px] md:w-full">
            <Text
              size="2xl"
              as="p"
              className="text-center uppercase tracking-[1.00px] !text-gray-900"
            >
              DISCOVER OUR PRODUCTS
            </Text>
            <Text
              size="xl"
              as="p"
              className="w-full text-center leading-10 !text-gray-900"
            >
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </Text>
          </div>

          {/* Products section */}
          <div className="flex flex-col gap-8 self-stretch">
            {/* Filter and Sort Bar */}
            <div>
              <div className="flex items-start justify-between gap-5 border-b-[0.5px] border-solid border-gray-300 bg-white-A700 py-6 pr-6 sm:flex-col sm:py-5 sm:pr-5">
                <div className="flex w-[25%] items-start justify-between gap-5 sm:w-full">
                  <Heading as="h1" className="mt-[7px] uppercase">
                    {products.length} Items
                  </Heading>

                  {/* Filter toggle button */}
                  <div className="relative h-[40px] w-[43%]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full bg-white-A700 py-3">
                      <Img
                        src="img_arrow_left.svg"
                        width={16}
                        height={16}
                        alt="arrowleft"
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                    <Text
                      size="md"
                      as="p"
                      className="absolute right-[0.00px] top-[9.25px] m-auto text-right !font-adobecaslonpro underline cursor-pointer"
                      onClick={handleFilterClick}
                    >
                      {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
                    </Text>
                  </div>
                </div>

                {/* Sort dropdown */}
                <SelectBox
                  menuPortalTarget={menuPortalTarget}
                  shape="square"
                  indicator={
                    <Img
                      src="img_checkmark.svg"
                      width={16}
                      height={16}
                      alt="checkmark"
                      className="h-[16px] w-[16px]"
                    />
                  }
                  name="sortDropdown"
                  placeholder={selectedSort}
                  options={DROPDOWN_OPTIONS}
                  value={selectedSort}
                  onChange={(value) => setSelectedSort(value)}
                  className="mr-3 mt-[7px] w-[20%] gap-px font-bold uppercase text-blue-900 sm:mr-0 sm:w-full sm:pr-5"
                />
              </div>
            </div>

            {/* Products with filters grid */}
            <div className="flex items-start gap-4 md:flex-col">
              {/* Filter sidebar */}
              {isFilterVisible && (
                <div className="flex w-[24%] flex-col gap-[21px] md:w-full">
                  <CheckBox
                    name="customizable"
                    label="Customizable"
                    id="customizable"
                    className="gap-2 py-px pr-[35px] text-left text-lg font-bold uppercase text-gray-900 sm:pr-5"
                  />
                  <div className="flex flex-col gap-[21px]">
                    <div className="h-px bg-gray-300" />
                    <Accordion
                      preExpanded={[0]}
                      className="flex flex-col gap-[25px]"
                    >
                      {FILTER_CATEGORIES.map((category, index) => (
                        <FilterAccordion
                          key={category.id}
                          category={category}
                          index={index}
                        />
                      ))}
                    </Accordion>
                  </div>
                </div>
              )}

              {/* Product grid */}
              <div className="grid flex-1 grid-cols-3 gap-4 md:grid-cols-2 md:self-stretch sm:grid-cols-1">
                {isLoading ? (
                  <div className="loading-container flex justify-center items-center">
                    <h1 className="loading-text text-lg">Loading...</h1>
                    <div className="spinner"></div>
                  </div>
                ) : (
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <Footer className="flex items-end justify-center self-stretch bg-black-900 p-6 sm:p-5" />
    </div>
  );
}
