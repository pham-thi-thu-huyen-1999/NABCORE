import { createRoot } from "react-dom/client";
import {
    FooterComponentStyle, FooterContainerStyle,
    ContentLeft, ContentRight, QuickLinksStyle,
    ContactStyle, Description,
    TitleStyle, LinkItem
} from "./styles/footer.css";
import Heading from "./components/common/Heading";
import React from "react";

const initialData = (footer) => {
    let logo = footer.querySelector('.footer-box.col-1 .widget-title')
    let logoDOM = logo && logo.innerHTML
    let description = footer.querySelector('.footer-box.col-1 .textwidget')
    let descriptionDOM = description && description.innerHTML
    let quickLinkTitle = footer.querySelector('.footer-box.col-2 .widget-title')
    let quickLinkTitleDOM = quickLinkTitle && quickLinkTitle.innerHTML
    let quickLinkMenu = footer.querySelector('.footer-box.col-2 .dropdown-hover ')
    let quickLinkMenuItem = Array.prototype.slice.call(
        quickLinkMenu.querySelectorAll('.sf-menu>li>a')
    )
    let quickLinkMenuItemDOM = quickLinkMenuItem.length && quickLinkMenuItem.map((item) => {
        let text = item.innerText
        let link = item.getAttribute('href')
        return { text, link }
    })
    let contactTitle = footer.querySelector('.footer-box.col-3 .widget-title')
    let contactTitleDOM = contactTitle && contactTitle.innerHTML
    let contactAddress = footer.querySelector('.footer-box.col-3 .address .oceanwp-contact-text')
    let contactAddressDOM = contactAddress && contactAddress.innerHTML
    let contactPhone = footer.querySelector('.footer-box.col-3 .phone .oceanwp-contact-text')
    let contactPhoneDOM = contactPhone && contactPhone.innerHTML
    let contactEmail = footer.querySelector('.footer-box.col-3 .email .oceanwp-contact-text')
    let contactEmailDOM = contactEmail && contactEmail.innerHTML

    return {
        logo: logoDOM,
        description: descriptionDOM,
        quickLink: {
            title: quickLinkTitleDOM,
            items: quickLinkMenuItemDOM
        },
        contact: {
            title: contactTitleDOM,
            address: contactAddressDOM,
            phone: contactPhoneDOM,
            email: contactEmailDOM
        }
    }
}


const FooterWrapper = ({ data }) => {
    return <>
        <FooterComponentStyle>
            <FooterContainerStyle className="container">
                <ContentLeft>
                    <Heading tagName="h3" title="Nabcore" />
                    <Description dangerouslySetInnerHTML={{ __html: data.description }} />
                    <Description className="copyright-des">
                        Copyright © 2022 Nabcore Pte Ltd
                    </Description>
                </ContentLeft>
                <ContentRight>
                    <QuickLinksStyle>
                        <TitleStyle>
                            {data.quickLink.title}
                        </TitleStyle>
                        {
                            data.quickLink.items.map((item, index) => (
                                <Description key={`quickLink-item-${index}`} >
                                    <LinkItem href={item.link}>
                                        {item.text}
                                    </LinkItem>
                                </Description>
                            ))
                        }
                    </QuickLinksStyle>
                    <ContactStyle>
                        <TitleStyle>
                            {data.contact.title}
                        </TitleStyle>
                        <Description>
                            Address:<br />
                            {data.contact.address}
                        </Description>
                        <Description>
                            Tel: <br />
                            {data.contact.phone}
                        </Description>
                        <Description dangerouslySetInnerHTML={{ __html: `Email: <br/>${data.contact.email}` }} />
                    </ContactStyle>
                </ContentRight>
            </FooterContainerStyle>
        </FooterComponentStyle>
    </>
}

const Footer = () => {
    let footer = document.querySelector('.site-footer')
    if (footer) {
        let data = initialData(footer)
        const root = createRoot(footer); // createRoot(container!) if you use TypeScript
        root.render(<FooterWrapper data={data} />);
    }
}

export default Footer
