import React from 'react';
import { Container } from "../common/Container/style";
import * as Icon from "../common/Icon/index";
import Business from "./Business"
import { BusinessOutStyle, ImageStyle } from "./style";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "../common/Image"

function BusinessOutcome(props) {
    const { business } = props;

    return <BusinessOutStyle>
        <Container>
            <ImageStyle>
                <Image url={business.image.url} alt="business"/>
            </ImageStyle>
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    business.testimonials.map((item, index) => (
                        <SwiperSlide key={`prevent-item-${index}`}>
                            <Business business={item} />
                        </SwiperSlide>
                    ))
                }
                <div className="swiper-button-prev">
                    <Icon.Prev />
                </div>
                <div className="swiper-button-next">
                    <Icon.Next />
                </div>
            </Swiper>
        </Container>
    </BusinessOutStyle>
}

export default BusinessOutcome
