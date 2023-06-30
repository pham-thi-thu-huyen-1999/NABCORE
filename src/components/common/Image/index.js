import React from 'react';
import { ImagePicture } from "./style.js";

function Image(props) {
  const { urlMobile, url, alt } = props;
  return <ImagePicture>
    <source media="(min-width:768px)" srcSet={url} />
    {urlMobile ? <source media="(max-width:767px)" srcSet={urlMobile}></source> : ""}
    <img src={url} alt={alt} loading="lazy"/>
  </ImagePicture>
}

export default Image
