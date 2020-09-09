import React from "react";
import TextField from '@material-ui/core/TextField';

const Input = (props) => {

    const { name, value, label, onChange } = props;

    return (<TextField
        variant="outlined"
        label={label}
        type="input"
        value={value}
        name={name}
        onChange={onChange}
    />)
}

export default Input;