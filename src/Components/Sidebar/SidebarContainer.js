import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {UpdateBrands, UpdateCategory, UpdatePriceSlider, UpdateRate} from "../../Redux/SidebarReducer";

const mapStateToProps = (state,ownProps) => {
    return {
        productsData: state.MainContent.productsData,
        filters: state.Sidebar.filters,
        isSidebarOpen: ownProps.isSidebarOpen,
        setIsSidebarOpen: ownProps.setIsSidebarOpen,
        isLoading:state.Sidebar.isLoading,
    }
}


export const SidebarContainer = connect(mapStateToProps,{UpdateBrands,UpdateRate,UpdateCategory,UpdatePriceSlider})(Sidebar)