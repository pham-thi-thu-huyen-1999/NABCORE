import React, { useEffect, useState } from 'react';
import { Container } from "../common/Container/style";
import Testtimo from "./Testtimo"
import { TestimonialsStyle, TestimonialListsStyle } from "./style";

function Testimonials(props) {
    const { testimonialsData } = props;

    return <TestimonialsStyle>
        <Container className="container-testimonials">
            <TestimonialListsStyle>
                {
                    testimonialsData.testimonials.map((testimonial, index) => {
                        return (
                            <Testtimo testimonial={testimonial} key={`testimonial-${index}`}/>
                        )
                    })
                }

            </TestimonialListsStyle>
        </Container>
    </TestimonialsStyle >
}

export default Testimonials
