import React, { useState } from "react";
import Category from "./Category/Category";
import Brand from "./Brand/Brand";
import PriceSlider from "./PriceSlider/PriceSlider";
import Rating from "./Rating/Rating";
import Search from "./Search/Search";
import S from "./Sidebar.module.css"
import {useDispatch, useSelector} from "react-redux";
import { UpdateIsSidebarOpened} from "../../Redux/SidebarReducer";

const Sidebar = (props) => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.Sidebar.isSidebarOpened);
  const brands = [...new Set(props.productsData.map((product) => product.brand))];
  const categories = [
    ...new Set(props.productsData.map((product) => product.category)),
  ];
  return (
      <div>
          <button
              onClick={() => {
                  dispatch(UpdateIsSidebarOpened(!isSidebarOpen));
              }}
              className={`${S.sidebarButton} ${
                  props.isSidebarOpen ? S.sidebarButtonOpen : S.sidebarButtonClosed
              }`}
          >
              ➤
          </button>

          {props.isSidebarOpen && (
              <div>
                  <Search isLoading={props.isSidebarOpen} />
                  <Rating UpdateRate={props.UpdateRate}/>
                  <Category
                      options={categories}
                      selectedOption={props.filters.category}
                      onOptionSelect={props.UpdateCategory}
                  />
                  <PriceSlider
                      UpdatePriceSlider={props.UpdatePriceSlider}
                      minPrice={props.filters.priceSlider.minPrice}
                      maxPrice={props.filters.priceSlider.maxPrice}
                  />
                  <Brand
                      pickedBrands={props.filters.brands}
                      UpdateBrands={props.UpdateBrands}
                      options={brands}
                  />
              </div>
          )}
      </div>
  );
};

export default Sidebar;
