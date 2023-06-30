import React from 'react';
import Button from '../common/Button';
import Image from "../common/Image/index";
import Heading from "../common/Heading/index"
import { MastheadComp, ContentMasthead, Description } from "./style";

function Masthead(props) {
    const { image, heading, description, button } = props.masthead;
    return <MastheadComp>
        <Image url={image.url} alt="masthead" />
        <ContentMasthead>
            <Heading title={heading} tagName="h1" customClass="light" />
            <Description>{description}</Description>
            <Button icon link={button.url} customClass="light">
                {button.title}
            </Button>
        </ContentMasthead>
    </MastheadComp>
}

export default Masthead
