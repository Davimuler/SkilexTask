import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import S from './Brand.module.css';
import useDebounce from "../../../hooks/useDebounce";
import { UpdateBrands, UpdateIsLoading } from "../../../Redux/SidebarReducer";

const Brand = ({ options, pickedBrands, UpdateBrands }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(pickedBrands);
    const debouncedBrands = useDebounce(selectedOptions, 500);
    const dispatch = useDispatch();

    // Реф для сохранения предыдущего значения pickedBrands
    const prevPickedBrandsRef = useRef();

    // Эффект для обновления selectedOptions только если pickedBrands изменился
    useEffect(() => {
        console.log("updated")
        if (prevPickedBrandsRef.current !== pickedBrands) {
            // Обновляем только если pickedBrands изменился
            if (JSON.stringify(selectedOptions) !== JSON.stringify(pickedBrands)) {
                setSelectedOptions(pickedBrands);
            }
            prevPickedBrandsRef.current = pickedBrands; // Обновляем реф с текущим значением pickedBrands
        }
    }, [pickedBrands, selectedOptions]);

    // Эффект для вызова UpdateBrands с использованием debouncedBrands
    useEffect(() => {
        dispatch(UpdateIsLoading(true));

        if (debouncedBrands) {
            dispatch(UpdateBrands(debouncedBrands));
        }
    }, [debouncedBrands, dispatch]);

    useEffect(() => {
        dispatch(UpdateIsLoading(false));
    }, [selectedOptions, dispatch]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prevSelected) => {
            const newSelected = prevSelected.includes(option)
                ? prevSelected.filter((selected) => selected !== option)
                : [...prevSelected, option];

            return newSelected;
        });
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
