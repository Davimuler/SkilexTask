import React from "react";
import S from './Rating.module.css'; // Import the CSS module

const Rating = ({UpdateRate}) => {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        const isRatingSelected = selectedValue === "By rating";
        UpdateRate(isRatingSelected);
    };
    return (
        <div className={S.ratingContainer}>
            <select id="ratingFilter" onChange={handleChange} className={S.select}>
                <option>Sort</option>
                <option>By rating</option>
            </select>
        </div>
    );
}

export default Rating;
