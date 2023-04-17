import React from 'react';
import "./../../styles/inputWrapper.scss";

const InputWrapper = ({ id, label, children }) => {
    return (
        <div className="input_wrap">
            <div className="input__wrapper">
                {children}
                <label htmlFor={id} className="label">{label}</label>
            </div>
        </div>
    );
};

export default InputWrapper;