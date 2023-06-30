import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/global.css.js";
import Footer from "./footer.js";

GlobalStyle()
const container = document.querySelector('#homePageTemplate');
if(container){
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App />);
}

Footer()
