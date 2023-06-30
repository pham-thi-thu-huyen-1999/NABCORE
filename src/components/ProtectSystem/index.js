import React, { useState } from 'react';
import { Container } from "../common/Container/style";
import Protect from "./Protect"
import {
    Description, ProtectSystemStyle, StepSystemFixedStyle, DiscoverSystemStyle,
    ImageSystemStyle, NameSystemStyle, ButtonDiscoverStyle, ImageStyle, ListProtectSystemStyle
} from "./style";
import Heading from '../common/Heading';
import Image from "../common/Image/index"
import Button from "../common/Button/index";


function ProtectSystem(props) {
    const { protectSystem } = props;
    let data = protectSystem.accordion_list.map((item, index) => {
        return {
            ...item,
            active: index === 0 ? true : false
        }
    })
    let [dataConverted, setDataConvert] = useState(data)
    const onSetActiveSelected = (index) => {
        let newData = dataConverted.map((item, indexItem) => {
            if (indexItem === index) {
                item.active = true
            }
            else{
                item.active = false
            }
            return item
        })
        setDataConvert(newData)
    }

    return <ProtectSystemStyle>
        <Container className="container-protect-system">
            <Heading title={protectSystem.heading} tagName="h2" customClass="yellow" />
            <Description dangerouslySetInnerHTML={{ __html: protectSystem.sub_text_system }} />
            <DiscoverSystemStyle>
                <ImageSystemStyle>
                    <Image url={protectSystem.image_system.url} alt="Protect System" />
                    {protectSystem.bullet.map((text, index) => (
                        <NameSystemStyle key={`heading-${index}`}><Heading title={text} tagName="h3" /></NameSystemStyle>
                    ))}
                </ImageSystemStyle>
                <ButtonDiscoverStyle>
                    <Button link={protectSystem.button.url} icon>
                        {protectSystem.button.title}
                    </Button>
                </ButtonDiscoverStyle>
            </DiscoverSystemStyle>
            <StepSystemFixedStyle>
                <ImageStyle>
                    <Image url={protectSystem.image_fixed.url} alt="system fixed" />
                </ImageStyle>
                <ListProtectSystemStyle>
                    {
                        dataConverted.map((item, index) => (
                            <Protect
                                protect={item}
                                index={index}
                                key={`protext-system-${index}`}
                                onSetActiveSelected={onSetActiveSelected}
                            />
                        ))
                    }
                </ListProtectSystemStyle>
            </StepSystemFixedStyle>
        </Container>
    </ProtectSystemStyle >
}

export default ProtectSystem
