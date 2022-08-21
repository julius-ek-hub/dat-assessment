import { useEffect, useState } from "react";

import StyledNavBar from './Styled';
import WithWrapper from "../utils/Wrapper";
import ForSmallScreens from "./ForSmallScreens";
import ForBigScreens from "./ForBigScreens";
import Image from "../utils/Image";

import useMediaQuery from "../../hooks/useMediaQuery";

function StickyNav() {
    const { md } = useMediaQuery();
    const [scrollTop, setScrollTop] = useState(0);

    const shouldStick = scrollTop > 100;

    const handleScroll = () => setScrollTop(window.scrollY);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <WithWrapper
            component="nav"
            sx={{
                transition: '0.5s top',
                top: -100,
                position: 'sticky',
                bgcolor: 'lightBg.main',
                ...(shouldStick && {
                    top: 0,
                    zIndex: 2,
                    bgcolor: "unset",
                    borderBottom: theme => `1px solid ${theme.palette.divider}`,
                    backdropFilter: 'blur(20px)'
                })
            }}>
            <StyledNavBar>
                <Image
                    src="logo.png"
                    alt="Logo"
                    className="logo"
                    loadingProps={{
                        height: '70px',
                        width: '70px'
                    }} />
                {md ? <ForBigScreens /> : <ForSmallScreens />}
            </StyledNavBar>
        </WithWrapper>
    );
}

export default StickyNav;
