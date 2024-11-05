import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // Импортируйте useDispatch для работы с Redux
import S from './Brand.module.css';

const Brand = ({ options, pickedBrands, UpdateBrands }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(pickedBrands);
    const dispatch = useDispatch();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prevSelected) => {
            const newSelected = prevSelected.includes(option)
                ? prevSelected.filter((selected) => selected !== option)
                : [...prevSelected, option];


            dispatch(UpdateBrands(newSelected));

            return newSelected;
        });
    };

    useEffect(() => {
        setSelectedOptions(pickedBrands);
    }, [pickedBrands]);

    return (
        <div className={S.checkboxDropdown}>
            <button onClick={toggleDropdown} className={S.dropdownButton}>
                {selectedOptions.length > 0 ? `Selected: ${selectedOptions.length}` : 'Brands'}
            </button>

            {isOpen && (
                <div className={S.dropdownContent}>
                    {options.map((option, index) => (
                        <label key={index} className={S.dropdownItem}>
                            <input
                                type="checkbox"
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Brand;
