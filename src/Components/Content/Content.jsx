import React, { useState, useEffect } from "react";
import S from './Content.module.css';
import ProductItem from "./ProductItem/ProductItem";
import {useDispatch} from "react-redux";
import {UpdateIsLoading} from "../../Redux/SidebarReducer";
import Spinner from "../Spinner/Spinner";


const NoResult = (props) => {
  return <div className={S.noResultMessage}>No results found for "{props.search}"</div>;
}

const Content = (props) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [showNoResults, setShowNoResults] = useState(false);

  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = props.productsData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(props.productsData.length / itemsPerPage);

  useEffect(() => {
    if (props.productsData.length === 0) {
      dispatch(UpdateIsLoading(false));
      setShowNoResults(true);
    } else {
      dispatch(UpdateIsLoading(false));
      setShowNoResults(false);
    }
  }, [props.productsData,dispatch]);

  return (
      <div className={S.content}>
        {props.isLoading && !showNoResults &&  <Spinner isLoading={props.isLoading} />}
        {!props.isLoading && showNoResults && <NoResult search={props.search}/>}
        {!props.isLoading && !showNoResults && currentProducts.map(p => (
            <ProductItem
                key={p.id}
                id={p.id}
                image={p.imageUrl}
                brand={p.brand}
                rate={p.rating}
                name={p.name}
                price={p.price}
            />
        ))}

        <div className={S.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
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
  );
}

export default Content;
