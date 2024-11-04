import React, { useState } from "react";
import S from './Brand.module.css';

const Brand = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prevSelected) =>
            prevSelected.includes(option)
                ? prevSelected.filter((selected) => selected !== option)
                : [...prevSelected, option]
        );
    };

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
