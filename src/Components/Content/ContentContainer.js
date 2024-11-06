import {connect} from "react-redux";
import Content from "./Content";
import GetFilteredProducts from "../../Redux/ProductsSelectors"

const mapStateToProps = (state) => {
    return {
        productsData: GetFilteredProducts(state),
        isLoading:state.Sidebar.isLoading,
    }
}


export const ContentContainer = connect(mapStateToProps,)(Content)