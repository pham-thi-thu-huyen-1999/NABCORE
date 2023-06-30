import React from 'react';
import { Container } from "../common/Container/style";
import * as Icon from "../common/Icon/index";
import PreventItem from "./PreventItem"
import { PreventStyle } from "./style";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

function Prevent(props) {
    const { prevent } = props;

    return <PreventStyle>
        <Container>
            <Swiper
                pagination={{
                    type: "fraction",
                    // @ts-ignore
                    formatFractionCurrent: function (numb) {
                        return numb < 10 ? `0${numb}`: numb
                    },
                    // @ts-ignore
                    formatFractionTotal: function(total){
                        return total < 10 ? `0${total}`: total
                    }
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    prevent.map((item, index) => (
                        <SwiperSlide key={`prevent-item-${index}`}>
                            <PreventItem preventItem={item} />
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
    </PreventStyle >
}

export default Prevent
