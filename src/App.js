import React from 'react';
import Masthead from "./components/masthead"
import Introduce from "./components/Introduce"
import Prevent from "./components/Prevent"
import OurServices from "./components/OurServices"
import BusinessOutcome from "./components/BusinessOutcome"
import MarketsServe from "./components/MarketsServe"
import Testimonials from "./components/Testimonials"
import ProtectSystem from "./components/ProtectSystem"
import Award from "./components/Award"

import GlobalStyle from "./styles/global.css";

function App() {
    // @ts-ignore
    const { masthead, introducing, slider_text, our_services, business_outcome, markets_we_serve, number_section, asia_brand_protect_system, award } = window.apiObject
    return <>
        <GlobalStyle/>
        <Masthead masthead={masthead} />
        <Introduce introducing={introducing} />
        <Prevent prevent={slider_text}/>
        <OurServices ourService={our_services}/>
        <BusinessOutcome business={business_outcome}/>
        <Testimonials testimonialsData={number_section} />
        <ProtectSystem protectSystem={asia_brand_protect_system} />
        <MarketsServe marketsServe={markets_we_serve} />
        <Award award={award}/>
    </>;
}
export default App;
