import React from 'react';
import { Container } from "../common/Container/style";
import * as Icon from "../common/Icon/index";
import Market from "./Market"
import { Description, MarketsServeStyle, MarketsListsStyle } from "./style";
import Heading from '../common/Heading';

function MarketsServe(props) {
    const { marketsServe } = props;

    return <MarketsServeStyle>
        <Container className="container-market-service">
            <Heading title={marketsServe.title} tagName="h2" customClass="yellow" />
            <Description dangerouslySetInnerHTML={{ __html: marketsServe.content }} />
            <MarketsListsStyle>
                {
                    marketsServe.items.map(item => (
                        <Market market={item} />
                    ))
                }
            </MarketsListsStyle>
        </Container>
    </MarketsServeStyle >
}

export default MarketsServe
