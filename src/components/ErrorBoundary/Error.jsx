import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

import Center from "../utils/Center";
import WithWrapper from "../utils/Wrapper";
import ReloadIcon from "../utils/icons/Reload";

function Error({ error = '' }) {

    return (
        <WithWrapper height="100vh" display="flex" flexDirection="column" pt={2}>
            <Alert severity="error" variant="filled">Error</Alert>
            <Center flexGrow={1} flexDirection="column" gap={2}>
                <Typography>An error occured during render</Typography>
                <Center gap={2}>
                    <Button color="secondary" href="/" sx={{ gap: 1 }}><ReloadIcon />Reload page</Button>
                    <Button
                        color="secondary"
                        href={`mailto:julius.ek.dev@gmail.com?subject=Error from DAT App&body=${error}`}>
                        Email me this error
                    </Button>
                </Center>
            </Center>
        </WithWrapper>
    )
}

export default Error;