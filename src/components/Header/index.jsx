import { StyldHeader } from './Styled';

import WithWrapper from '../utils/Wrapper';
import Content from "./Content";
import Address from "./Address";

function Header() {
    return (
        <WithWrapper bgcolor="lightBg.main" pb={6}>
            <StyldHeader>
                <Content />
                <Address />
            </StyldHeader>
        </WithWrapper>
    );
}

export default Header;
