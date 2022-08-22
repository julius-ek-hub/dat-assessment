import { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Skeleton from '@mui/material/Skeleton';

import { StyledAddressCard } from './Styled';
import Image from "../../utils/Image";

import useMediaQuery from "../../../hooks/useMediaQuery";
import useLocalStorage from "../../../hooks/useLocalStorage";

const ContactsLoading = ({ width }) => [...new Array(3)].map((i, j) => (
    <Skeleton
        width={width}
        height={'200px'}
        key={j}
        sx={{ transform: 'none', borderRadius: 6 }} />
));

function Address() {
    const { md } = useMediaQuery();
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(false);
    const [failed, setFailed] = useState(false);
    const { getContacts } = useLocalStorage();

    const doFetchContacts = async () => {
        try {
            setFailed(false);
            setLoading(true);
            const _contact = await getContacts();
            setContact(_contact);
        } catch (e) {
            setFailed(true);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => { doFetchContacts() }, [])

    return (
        <Stack gap={2} direction={md ? "row" : 'column'} mt={2}>
            {loading ? <ContactsLoading width={md ? '32%' : '100%'} /> : failed ? null : (
                contact.map((c, index) => (
                    <StyledAddressCard key={index} elevation={0} sx={{
                        ...(index === 1 && { bgcolor: 'primary.main' }),
                        ...(md && { width: '32%' })
                    }}>
                        <Image
                            src={c.icon}
                            alt={c.title}
                            loadingProps={{
                                height: 50,
                                width: 50,
                                variant: 'circular'
                            }} />
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            textAlign="center">{c.description}</Typography>
                        <Typography color="text.secondary">{c.title}</Typography>
                    </StyledAddressCard>
                ))
            )}
        </Stack>
    );
}

export default Address;
