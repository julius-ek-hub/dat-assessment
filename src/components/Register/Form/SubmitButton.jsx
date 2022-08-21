import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { useFormikContext } from "formik";
import { useEffect } from "react";

/**
 * @param {ButtonProps & {loading: Boolean, reset: Boolean}} props 
 */

function SubmitButton(props) {
    const { submitForm, resetForm } = useFormikContext();
    const { children, loading, reset, ...rest } = props;

    useEffect(() => {
        reset && resetForm();
    }, [reset]);

    return <Button
        onClick={submitForm}
        variant="contained"
        size="large"
        disabled={loading}
        {...rest}>
        {children}
        {loading && <CircularProgress sx={{ ml: 1 }} size={22} color="secondary" />}
    </Button>
}

export default SubmitButton;