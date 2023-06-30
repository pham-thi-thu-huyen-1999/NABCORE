import React from 'react';
import { HeadingStyle, HeadingStyleH2, HeadingStyleH3 } from "./style.js";

function Heading(props) {
  const { tagName, title, customClass } = props;
  const renderClassName = customClass ? customClass : ""
  const renderHeading = () => {
    // @ts-ignore
    let result = <HeadingStyle $mode={renderClassName}>{title}</HeadingStyle>
    switch (tagName) {
      case "h2":
        // @ts-ignore
        result = <HeadingStyleH2 $mode={renderClassName}>{title} </HeadingStyleH2>
        break;
      case "h3":
        // @ts-ignore
        result = <HeadingStyleH3 $mode={renderClassName}>{title} </HeadingStyleH3>
        break;
      default:
        break;
    }
    return result
  }
  // @ts-ignore
  return renderHeading()
}

export default Heading
