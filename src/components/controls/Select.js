import React from "react";
import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from "@material-ui/core";

const Select = (props) => {

    const { name, value, label, onChange, options } = props;

    return (
        <FormControl
            variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value=""><em>None</em></MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
        </FormControl>
    )

}

export default Select;