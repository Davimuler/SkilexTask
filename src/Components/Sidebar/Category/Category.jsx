import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import S from './Category.module.css';
import { UpdateIsLoading } from "../../../Redux/SidebarReducer";

const Category = ({ options, selectedOption, onOptionSelect }) => {
    const [selectedCategory, setSelectedCategory] = useState(selectedOption);
    const dispatch = useDispatch();

    const handleOptionSelect = (e) => {
        const selectedCategory = e.target.value;
        setSelectedCategory(selectedCategory);
        dispatch(UpdateIsLoading(true));
        dispatch(onOptionSelect(selectedCategory));
    };

    useEffect(() => {
        if (selectedCategory !== selectedOption) {
            dispatch(UpdateIsLoading(false));
        }
    }, [selectedCategory, selectedOption, dispatch]);

    return (
        <div className={S.categoryContainer}>
            <select
                value={selectedCategory}
                onChange={handleOptionSelect}
                className={S.select}
                data-testid="category-filter"
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
