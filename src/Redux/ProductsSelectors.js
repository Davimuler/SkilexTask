import { createSelector } from "reselect";

const getProducts = (state) => state.MainContent.productsData;

const getFilters = (state) => {
    return {
        // category: state.products.category,
        // priceRange: state.products.priceRange,
        // selectedBrands: state.products.selectedBrands,
        // sorting: state.products.sorting,
    };
};


const applyFilters = (products, filters) => {
    return products.filter(product => {

    });
};


const sortProducts = (products, sorting) => {
    return [...products].sort((a, b) => {
        switch (sorting) {
            case "by rating":
                return b.rating - a.rating;

            default:
                return 0;
        }
    });
};


export const getFilteredProductsSelector = createSelector(
    getProducts,
    getFilters,
    (products, filters) => {
        const filteredProducts = applyFilters(products, filters);
        return sortProducts(filteredProducts, filters);
    }
);
