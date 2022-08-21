import { useState } from "react";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Slide from '@mui/material/Slide';
import Alert from "@mui/material/Alert";

import Formik from "./Formik";
import TextField from "./TextField";
import SubmitButton from "./SubmitButton";

import registrationSchema, { defaultValues } from "./schema";

import useFetch from "../../../hooks/useFetch";

function Form() {
    const [loading, setLoading] = useState(false);
    const [snackBarState, setSnackBarState] = useState({});
    const [reset, setReset] = useState(false);

    const { post } = useFetch("http://54.169.31.224:3000/signup");

    const handleSubmit = async (values) => {
        setReset(false);
        setLoading(true);
        const response = await post('', values);
        const { error } = response;
        setLoading(false);
        setSnackBarState({
            open: true,
            error,
            message: error || response.message
        });

        !error && setReset(true);
    }

    const handleSnackBarClose = () => setSnackBarState({});
    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={defaultValues}
            validationSchema={registrationSchema}
        >
            <Stack component="form" gap={2} width="100%">
                <TextField label="Name" name="name" />
                <TextField label="Email Address" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <SubmitButton loading={loading} reset={reset}>GET STARTED</SubmitButton>
                <Snackbar
                    onClose={handleSnackBarClose}
                    autoHideDuration={6000}
                    open={snackBarState.open}
                    TransitionComponent={props => <Slide {...props} direction="up" />}
                >
                    <Alert
                        variant="filled"
                        severity={snackBarState.error ? 'error' : 'success'}>
                        {snackBarState.message}
                    </Alert>
                </Snackbar>
            </Stack>

        </Formik>
    );
}

export default Form;