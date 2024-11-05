import { createSelector } from "reselect";

export const getProducts = (state) => state.MainContent.productsData;

const getFilters = (state) => state.Sidebar.filters;

const GetFilteredProducts = createSelector(
    [getProducts, getFilters],
    (products, filters) => {
        const { category, brands, priceSlider, rate,search } = { ...filters };

        const filteredProducts = products.filter((product) => {
            const isCategoryMatched = category === 'Category'
                ? true
                : category
                    ? product.category.trim().toLowerCase() === category.trim().toLowerCase()
                    : true;
            const isBrandMatched = brands.length > 0
                ? brands.includes(product.brand)
                : true;
            const isPriceMatched = product.price >= priceSlider.minPrice && product.price <= priceSlider.maxPrice;

            const isSearchMatched = search
                ? product.name.toLowerCase().includes(search.toLowerCase())
                : true;

            return isCategoryMatched&&isBrandMatched&&isPriceMatched&&isSearchMatched;
        });

        const sortedProducts = rate ? filteredProducts.sort((a, b) => b.rating - a.rating) : filteredProducts;

        return sortedProducts;
    }
);

export default GetFilteredProducts;
