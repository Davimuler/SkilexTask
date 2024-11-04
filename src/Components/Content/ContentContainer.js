import {connect} from "react-redux";
import Content from "./Content";

const mapStateToProps = (state) => {
    return {
        productsData: state.MainContent.productsData
    }
}


export const ContentContainer = connect(mapStateToProps,)(Content)