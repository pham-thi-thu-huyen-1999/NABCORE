
import tw from "twin.macro";
import { injectGlobal } from '@emotion/css'
import {fontFaces} from "./fonts.css.js";

const GlobalStyle = () => injectGlobal`
    ${fontFaces}
    .container{${tw`container`}}
    .page-template-Nabcore_Home_Page .page-header{${tw`hidden`}}
    #site-navigation-wrap .dropdown-menu>li>a{${tw`px-[10px]`}}
    #site-logo #site-logo-inner a img{${tw`max-w-[305px] xl:max-w-[150px] lg:max-w-[180px]`}}, #site-header{${tw`font-display`}}.center-header #site-navigation-wrap .middle-site-logo a img{${tw`max-w-[305px] xxl:max-w-[200px] xl:max-w-[150px] lg:max-w-[200px]`}}
    #site-navigation-wrap .dropdown-menu >li >a{${tw`text-[16px]`}}
    #site-navigation-wrap .dropdown-menu .search-toggle-li{${tw`hidden`}}
    #site-navigation-wrap .dropdown-menu>li>a .nav-arrow{${tw`hidden`}}
`;

export default GlobalStyle;
