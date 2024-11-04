import React from "react";
import S from './ProductItem.module.css';

const FilmItem = (props) => {
    return (
        <div>
            <img className={S.img} src={props.image} alt={props.name} />
            <div>{props.name} {' ' + props.brand} </div>
            <div className={S.rate}>{props.rate % 1 === 0 ? `${props.rate}.0` : props.rate}★</div>
            <div className={S.price} >{props.price + "$"}</div>
        </div>
    );
};

export default FilmItem;
