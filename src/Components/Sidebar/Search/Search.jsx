import React, { useState } from "react";
import S from './Search.module.css';
import {useDispatch} from "react-redux";
import {UpdateSearch} from "../../../Redux/SidebarReducer"; // Импортируйте CSS-модуль

const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    const handleSearch = () => {
        dispatch(UpdateSearch(searchText));
    };

    return (
        <div className={S.searchContainer}>
            <input
                className={S.searchInput}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="I am looking for..."
            />
            <button className={S.okButton} onClick={handleSearch}>
                OK
            </button>
        </div>
    );
}

export default Search;
