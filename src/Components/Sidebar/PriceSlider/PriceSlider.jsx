import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import S from './PriceSlider.module.css';

const PriceSlider = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1);

    const handleSliderChange = ([newMin, newMax]) => {
        setMinPrice(newMin);
        setMaxPrice(newMax);
    };
    return (
        <div className={S.Container}>
            <div className={S.Input_Container}>
                <input className={S.Input} value={minPrice} onChange={(e) => {
                    const newValue = e.target.value.replace(/[^0-9]/g, '');
                    setMinPrice(newValue ? parseInt(newValue, 10) : 0);
                }}/>-
                <input className={S.Input} value={maxPrice} onChange={(e) => {
                    const newValue = e.target.value.replace(/[^0-9]/g, '');
                    setMaxPrice(newValue ? parseInt(newValue, 10) : 0);
                }}/>
            </div>

            <ReactSlider
                className={S.horizontal_slider}
                thumbClassName={S.thumb}
                trackClassName={S.track}
                defaultValue={[0, 100]}
                value={[minPrice, maxPrice]}
                onChange={handleSliderChange}
                max={100}
                min={0}
                pearling
                minDistance={1}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
        </div>
    );
};

export default PriceSlider;
