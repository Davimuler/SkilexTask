import React, {useState} from "react";
import Category from "./Category/Category";
import Brand from "./Brand/Brand";
import PriceSlider from "./PriceSlider/PriceSlider";
import Rating from "./Rating/Rating";
import Search from "./Search/Search";


const Sidebar=(props)=>{
  const [selectedCategory, setSelectedCategory] = useState('');
  const brands = [...new Set(props.productsData.map(product => product.brand)) ];
  const categories= [...new Set(props.productsData.map(product => product.category))];
  const prices = props.productsData.map(product => ({
    name: product.name,
    price: product.price
  }));
  return <div>
    <Search/>
    <Rating UpdateRate={props.UpdateRate}/>
    <Category
        options={categories}
        selectedOption={props.filters.category}
        onOptionSelect={props.UpdateCategory}
    />
    <PriceSlider UpdatePriceSlider={props.UpdatePriceSlider} minPrice={props.filters.priceSlider.minPrice} maxPrice={props.filters.priceSlider.maxPrice} />
    <Brand pickedBrands={props.filters.brands} UpdateBrands={props.UpdateBrands} options={brands}/>
  </div>


}
export default Sidebar