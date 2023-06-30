import React from 'react';
import Image from "../common/Image/index"
import { MarketStyle, ImageStyle, TitleStyle, DescriptionItem } from "./style";

function Market(props) {
    const { market } = props;

    return <MarketStyle>
        <ImageStyle>
            <Image url={market.image.url} />
        </ImageStyle>
        <TitleStyle>
            {market.title}
        </TitleStyle>
        <DescriptionItem dangerouslySetInnerHTML={{ __html: market.content }} />
    </MarketStyle>
}

export default Market
