import React from "react";
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';

const Checkbox = (props) => {

    const { name, value, label, onChange } = props;

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox color="secondary" checked={value} onChange={e => onChange(convertToDefEventPara(name, e.target.checked))} name={name} />}
                label={label}
            />
        </FormControl>)
}

export default Checkbox;