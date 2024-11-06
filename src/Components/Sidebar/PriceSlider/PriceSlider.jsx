import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import S from './PriceSlider.module.css';
import useDebounce from "../../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { UpdatePriceSlider } from "../../../Redux/SidebarReducer";

const PriceSlider = (props) => {
    const [minPrice, setMinPrice] = useState(props.minPrice);
    const [maxPrice, setMaxPrice] = useState(props.maxPrice);

    const debouncedPrice = useDebounce({ minPrice, maxPrice }, 500);
    const dispatch = useDispatch();

    useEffect(() => {
        if (debouncedPrice) {
            dispatch(UpdatePriceSlider(debouncedPrice));
        }
    }, [debouncedPrice, dispatch]);

    useEffect(() => {
        setMinPrice(props.minPrice);
        setMaxPrice(props.maxPrice);
    }, [props.minPrice, props.maxPrice]);

    const handleSliderChange = ([newMin, newMax]) => {
        setMinPrice(newMin);
        setMaxPrice(newMax);
    };

    const handleMinPriceChange = (e) => {
        const newValue =parseInt(e.target.value.replace(/[^0-9]/g, ''));
        setMinPrice(newValue);
        if (newValue > maxPrice) {
            setMaxPrice(newValue);
        }
    };

    const handleMaxPriceChange = (e) => {
        const newValue =parseInt(e.target.value.replace(/[^0-9]/g, ''));
        setMaxPrice(newValue);
        if (newValue < minPrice) {
            setMinPrice(newValue);
        }
    };

    return (
        <div className={S.Container}>
            <div className={S.Input_Container}>
                <input
                    className={S.Input}
                    value={minPrice}
                    onChange={handleMinPriceChange}
                />-
                <input
                    className={S.Input}
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                />
            </div>

            <ReactSlider
                className={S.horizontal_slider}
                thumbClassName={S.thumb}
                trackClassName={S.track}
                value={[minPrice, maxPrice]}
                onChange={handleSliderChange}
                max={5000}
                min={0}
                pearling
                minDistance={1}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
        </div>
    );
};

export default PriceSlider;
