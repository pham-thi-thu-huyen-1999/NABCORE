import tw from "twin.macro";
import styled from "styled-components";

export const ButtonStyle = styled.a`
  ${tw`
    text-button
    font-bold
    font-sans
    leading-[62px]
    lg:text-button-mb
  `}

  ${props => { // render by class name
    // @ts-ignore
    switch (props.$mode) {
      case "submit":
        return tw`
          bg-yellow
          text-DEFAULT
          rounded-[25px]
          px-[38px]
          py-[19px]
          lg:px-[29px]
          lg:py-[12px]
          lg:leading-[45px]
          hover:text-light
        `
      default:
        return tw`
          text-DEFAULT
          underline flex items-center
          hover:text-DEFAULT
        `;
    }
  }}
`

export const IconStyle = tw.span`
  ml-[12px]
  flex
  items-center
`
