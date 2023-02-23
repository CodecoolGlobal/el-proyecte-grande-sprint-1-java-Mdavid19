import React from 'react';
import {TextField} from "@mui/material";


const Input = ({header, placeholderText, inputType}) => {
    return (
        <div>
            <h2>{header}</h2>
            <TextField
                label={placeholderText}
                type={inputType}
            />
        </div>
    );
};

export default Input;