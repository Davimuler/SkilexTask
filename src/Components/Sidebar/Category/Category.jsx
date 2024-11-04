import React from "react";
import S from './Category.module.css'; // Import the same CSS module

const Category = ({ options, selectedOption, onOptionSelect }) => {
    return (
        <div className={S.categoryContainer}>
            <select
                value={selectedOption}
                onChange={(e) => onOptionSelect(e.target.value)}
                className={S.select}
            >
                <option value="">Category</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Category;
