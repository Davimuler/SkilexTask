const UPDATE_RATE = 'UPDATE_RATE';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const UPDATE_PRICE_SLIDER='UPDATE_PRICE_SLIDER';
const UPDATE_BRANDS='UPDATE_BRANDS';
const UPDATE_SEARCH='UPDATE_SEARCH';

let InitialState = {
    filters: {
        search:'',
        category: 'Category',
        brands: [],
        rate: false,
        priceSlider: {
            minPrice: 0,
            maxPrice: 1000
        }
    }
};

const SidebarReducer = (state = InitialState, action) => {
    switch (action.type) {
        case UPDATE_RATE: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    rate: action.rate
                }
            };
        }
        case UPDATE_CATEGORY: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: action.category
                }
            };
        }
        case UPDATE_PRICE_SLIDER: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                   priceSlider:action.priceSlider
                }
            };
        }
        case UPDATE_SEARCH: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search:action.search
                }
            };
        }
        case UPDATE_BRANDS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                   brands: action.brands
                }
            };
        }

        default:
            return state;
    }
};

export const UpdateRate = (rate) => ({ type: UPDATE_RATE, rate });
export const UpdateCategory = (category) => ({ type: UPDATE_CATEGORY, category });
export const UpdatePriceSlider = (priceSlider) => ({ type: UPDATE_PRICE_SLIDER, priceSlider });
export const UpdateBrands = (brands) => ({ type: UPDATE_BRANDS, brands });
export const UpdateSearch = (search) => ({ type: UPDATE_SEARCH, search });

export default SidebarReducer;
