import React, { useEffect, useState } from 'react';
import { Container } from "../common/Container/style";
import { AwardCompStyle, ImageAwardStyle, ContentStyle, Description } from "./style";
import Image from '../common/Image';
import Heading from '../common/Heading';

function Award(props) {
    const { award } = props;

    return <AwardCompStyle>
        <ImageAwardStyle>
            <Image url={award.image.url} alt="award" />
        </ImageAwardStyle>
        <Container className="container-award">
            <ContentStyle>
                <Heading title={award.title} tagName="h3" />
                <Description dangerouslySetInnerHTML={{ __html: award.content }} />
            </ContentStyle>
        </Container>
    </AwardCompStyle >
}

export default Award
