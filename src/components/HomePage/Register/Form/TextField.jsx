import MuiTextField, { TextFieldProps } from "@mui/material/TextField";

import { useFormikContext } from "formik";

/**
 * @param {TextFieldProps} props 
 */

function TextField(props) {
    const { handleChange, values, touched, errors } = useFormikContext();

    const { name, helperText, ...rest } = props;

    const hasError = Boolean(touched[name] && errors[name])

    return (
        <MuiTextField
            value={values[name]}
            onChange={handleChange}
            error={hasError}
            helperText={hasError ? errors[name] : helperText}
            name={name}
            placeholder={rest.label}
            fullWidth
            sx={{ bgcolor: 'background.paper' }}
            {...rest}
        />
    );
}

export default TextField;