import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import S from './Category.module.css';

const Category = ({ options, selectedOption, onOptionSelect }) => {
    const dispatch = useDispatch();

    useEffect(() => {}, [selectedOption]);

    const handleOptionSelect = (e) => {
        const selectedCategory = e.target.value;
        dispatch(onOptionSelect(selectedCategory));
    };
    return (
        <div className={S.categoryContainer}>
            <select
                value={selectedOption}
                onChange={handleOptionSelect}
                className={S.select}
            >
                <option value="Category">Category</option>
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
