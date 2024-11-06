import React, { useState, useEffect } from "react";
import S from './Rating.module.css';
import { useDispatch } from "react-redux";
import { UpdateRate, UpdateIsLoading } from "../../../Redux/SidebarReducer";

const Rating = ({ UpdateRate }) => {
    const [ratingSelected, setRatingSelected] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setRatingSelected(selectedValue);
        dispatch(UpdateIsLoading(true));

        const isRatingSelected = selectedValue === "By rating";
        UpdateRate(isRatingSelected);
    };

    useEffect(() => {
        if (ratingSelected) {
            dispatch(UpdateIsLoading(false));
        }
    }, [ratingSelected, dispatch]);

    return (
        <div className={S.ratingContainer}>
            <select id="ratingFilter" onChange={handleChange} className={S.select}>
                <option>Sort</option>
                <option>By rating</option>
            </select>
        </div>
    );
};

export default Rating;
