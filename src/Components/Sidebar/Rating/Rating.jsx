import React from "react";
import S from './Rating.module.css'; // Import the CSS module

const Rating = () => {
    return (
        <div className={S.ratingContainer}>
            <select id="ratingFilter" className={S.select}>
                <option>Sort</option>
                <option>By rating</option>
            </select>
        </div>
    );
}

export default Rating;
