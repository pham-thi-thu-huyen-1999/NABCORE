import React from 'react';
import Image from "../common/Image/index"
import Heading from "../common/Heading/index"
import { ImageContent, Description, PreventContentStyle, ImageSmallStyle, PreventItemStyle } from "./style";

function PreventItem(props) {
    const { preventItem } = props;

    return <PreventItemStyle>
        <ImageSmallStyle>
            <Image url={preventItem.small_image.url} />
        </ImageSmallStyle>
        <ImageContent>
            <Image url={preventItem.big_image.url} />
        </ImageContent>
        <PreventContentStyle>
            <Heading title={preventItem.title} tagName="h3" customClass="yellow"/>
            <Description dangerouslySetInnerHTML={{ __html: preventItem.content }} />
        </PreventContentStyle>
    </PreventItemStyle>
}

export default PreventItem
