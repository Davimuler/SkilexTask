import React, {useState} from "react";
import S from './Content.module.css'
import ProductItem from "./ProductItem/ProductItem";

const NoResult=(props)=>{
  return<div >
    No results found
    {/*No results found "{props.Search}"*/}
  </div>
}

const Content=(props)=>{
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = props.productsData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(props.productsData.length / itemsPerPage);
  return<div className={S.content} >
    {!currentProducts.length?<NoResult  />:currentProducts.map(p=> <ProductItem id={p.id} image={p.imageUrl} brand={p.brand} rate={p.rating} name={p.name}  price={p.price} />)}

      <div className={S.pagination}>
        {Array.from({length: totalPages}, (_, index) => (
            <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                disabled={currentPage === index + 1}
                className={currentPage === index + 1 ? S.active : ""}
            >
              {index + 1}
            </button>
        ))}

    </div>
  </div>


}
export default Content