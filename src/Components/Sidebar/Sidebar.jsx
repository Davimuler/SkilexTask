import React, {useState} from "react";
import Category from "./Category/Category";
import Brand from "./Brand/Brand";
import PriceSlider from "./PriceSlider/PriceSlider";
import Rating from "./Rating/Rating";


const Sidebar=(props)=>{
  const [selectedCategory, setSelectedCategory] = useState('');
  const brands = [...new Set(props.productsData.map(product => product.brand)) ];
  const categories= [...new Set(props.productsData.map(product => product.category))];

  return <div>
    <Rating/>
    <Category
        options={categories}
        selectedOption={selectedCategory}
        onOptionSelect={setSelectedCategory}
    />
    <PriceSlider/>
    <Brand options={brands}/>
  </div>


}
export default Sidebar