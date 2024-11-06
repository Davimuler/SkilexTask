import React, { useState, useEffect } from "react";
import S from './Search.module.css';
import { useDispatch } from "react-redux";
import { UpdateSearch } from "../../../Redux/SidebarReducer";
import useDebounce from "../../../hooks/useDebounce";

const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    const debouncedSearchText = useDebounce(searchText, 1500);
    const dispatch = useDispatch();

    useEffect(() => {
        if (debouncedSearchText) {
            dispatch(UpdateSearch(debouncedSearchText));
        }
    }, [debouncedSearchText, dispatch]);

    return (
        <div className={S.searchContainer}>
            <input
                className={S.searchInput}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="I am looking for..."
            />
            <button className={S.okButton} onClick={() => dispatch(UpdateSearch(searchText))}>
                OK
            </button>
        </div>
    );
}

export default Search;
