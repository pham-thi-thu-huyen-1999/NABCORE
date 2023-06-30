import tw from "twin.macro";
import styled from "styled-components";

export const HeadingStyle = styled.h1`
  ${tw`
    text-heading-1
    font-bold
    m-0
    xxl:text-[48px]
    lg:text-[40px]
    lg:leading-[50px]
    md:text-[25px]
    md:leading-[35px]
    font-sans
    text-DEFAULT
    `
  }

  ${props => {
    // @ts-ignore
    switch (props.$mode) {
      case "yellow":
        return tw`
        text-yellow
      `
      case "light":
        return tw`
        text-light
      `
    }
  }}
`

export const HeadingStyleH2 = styled.h2`
  ${tw`
    text-heading-2
    font-bold
    m-0
    mb-[30px]
    lg:text-[36px]
    lg:leading-[40px]
    md:text-[20px]
    md:leading-[25px]
    font-sans
    text-DEFAULT
  `}
  ${props => {
    // @ts-ignore
    switch (props.$mode) {
      case "yellow":
        return tw`
        text-yellow
      `
      case "light":
        return tw`
        text-light
      `
    }
  }}
`

export const HeadingStyleH3 = styled.h3`
  ${tw`
    text-heading-3
    font-bold
    m-0
    mb-[30px]
    lg:text-[28px]
    lg:leading-[36px]
    md:text-[18px]
    md:leading-[22px]
    font-sans
    text-DEFAULT
  `}
  ${props => {
    // @ts-ignore
    switch (props.$mode) {
      case "yellow":
        return tw`
        text-yellow
      `
      case "light":
        return tw`
        text-light
      `
    }
  }}
`