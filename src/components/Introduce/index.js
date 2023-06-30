import React from 'react';
import Button from '../common/Button';
import Heading from "../common/Heading/index"
import { Container } from "../common/Container/style"
import { IntroduceStyle, Description, Subheading, IntroduceContent } from "./style";

function Introduce(props) {
    const { heading, description, button, sub_heading } = props.introducing;
    return <IntroduceStyle>
        <Container>
            <IntroduceContent>
                <Subheading>
                    {sub_heading}
                </Subheading>
                <Heading title={heading} tagName="h2" />
                <Description>{description}</Description>
                <Button submit>
                    {button.title}
                </Button>
            </IntroduceContent>
        </Container>
    </IntroduceStyle>
}

export default Introduce
