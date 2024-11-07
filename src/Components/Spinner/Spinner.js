import React from "react";
import { ClipLoader } from "react-spinners";
import S from './Spinner.module.css';

const Spinner = ({ isLoading }) => {
    return (
        <div className={S.spinnerContainer}>
            {isLoading && <ClipLoader size={50} color={"#28a745"} loading={isLoading} />}
        </div>
    );
};

export default Spinner;
