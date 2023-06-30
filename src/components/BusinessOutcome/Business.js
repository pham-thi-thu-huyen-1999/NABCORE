import React from 'react';
import Heading from "../common/Heading/index"
import { Description, BusinessContentStyle, BusinessStyle, NameStyle, RoleStyle } from "./style";

function Business(props) {
    const { business } = props;

    return <BusinessStyle>
        <Heading title="Business Outcome" tagName="h2" customClass="yellow"/>
        <BusinessContentStyle>
            <Description dangerouslySetInnerHTML={{ __html: business.content }} />
            <NameStyle>
                {business.name}
            </NameStyle>
            <RoleStyle>
                {business.role}
            </RoleStyle>
        </BusinessContentStyle>
    </BusinessStyle>
}

export default Business
