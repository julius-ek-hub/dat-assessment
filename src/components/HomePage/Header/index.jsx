import { StyldHeader } from './Styled';

import Wrapper from '../../utils/Wrapper';
import Content from "./Content";
import Address from "./Address";

function Header() {
    return (
        <Wrapper
            bgcolor="lightBg.main"
            component='header'
            pb={6}>
            <StyldHeader>
                <Content />
                <Address />
            </StyldHeader>
        </Wrapper>
    );
}

export default Header;
