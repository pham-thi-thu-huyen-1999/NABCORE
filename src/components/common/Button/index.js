import React from 'react';
import { ButtonStyle, IconStyle } from "./style.js";
import * as Icon from "../Icon"

function Button(props) {
  const { link, children, customClass, icon, submit = false } = props;
  const renderProperties = submit ? 'submit' : "link";
  const renderHref = link ? link : "#"
  const renderClassName = customClass ? customClass : ""
  // @ts-ignore
  return <ButtonStyle $mode={`${renderProperties}`}
    className={renderClassName}
    href={renderHref}>
    {children}
    {icon ? <IconStyle>
      <Icon.RightArrow />
    </IconStyle> : ""}
  </ButtonStyle>
}

export default Button
