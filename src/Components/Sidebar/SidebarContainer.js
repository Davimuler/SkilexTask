import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
    return {
        productsData: state.MainContent.productsData
    }
}


export const SidebarContainer = connect(mapStateToProps,)(Sidebar)