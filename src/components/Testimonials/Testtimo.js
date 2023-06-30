import React from 'react';
import Heading from "../common/Heading/index"
import { TestimonialStyle, Description } from "./style";

function Testtimo(props) {
    const { testimonial } = props;

    return <TestimonialStyle>
        <Heading title={`${testimonial.number} ${testimonial.text}`} tagName="h1" customClass="yellow" />
        <Description dangerouslySetInnerHTML={{ __html: testimonial.small_text }} />
    </TestimonialStyle>
}

export default Testtimo
