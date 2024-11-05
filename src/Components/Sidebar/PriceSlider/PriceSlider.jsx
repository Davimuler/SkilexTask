import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import S from './PriceSlider.module.css';

const PriceSlider = (props) => {
    const [minPrice, setMinPrice] = useState(props.minPrice);
    const [maxPrice, setMaxPrice] = useState(props.maxPrice);

    useEffect(() => {
        setMinPrice(props.minPrice);
        setMaxPrice(props.maxPrice);
    }, [props.minPrice, props.maxPrice]);

    const handleSliderChange = ([newMin, newMax]) => {
        setMinPrice(newMin);
        setMaxPrice(newMax);
        props.UpdatePriceSlider({ minPrice: newMin, maxPrice: newMax });
    };

    const handleMinPriceChange = (e) => {
        const newValue = e.target.value.replace(/[^0-9]/g, '');
        let parsedValue = newValue ? parseInt(newValue, 10) : 0;
        if (parsedValue > 5000) {
            parsedValue = 5000;
        }
        setMinPrice(parsedValue);

        if (parsedValue > maxPrice) {
            setMaxPrice(parsedValue);
        }
        props.UpdatePriceSlider({ minPrice: parsedValue, maxPrice: parsedValue > maxPrice ? parsedValue : maxPrice });
    };

    const handleMaxPriceChange = (e) => {
        const newValue = e.target.value.replace(/[^0-9]/g, '');
        let parsedValue = newValue ? parseInt(newValue, 10) : 0;
        if (parsedValue > 5000) {
            parsedValue = 5000;
        }
        setMaxPrice(parsedValue);
        if (parsedValue < minPrice) {
            setMinPrice(parsedValue);
        }
        props.UpdatePriceSlider({ minPrice: parsedValue < minPrice ? parsedValue : minPrice, maxPrice: parsedValue });
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
