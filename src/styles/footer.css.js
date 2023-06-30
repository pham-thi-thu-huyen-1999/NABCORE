import tw from "twin.macro"
import styled from "styled-components"

export const FooterComponentStyle = tw.div`
  border-t-[1px]
  border-[#353535]
  border-solid
  font-display
  text-DEFAULT
`

export const FooterContainerStyle = styled.div`
  ${
    tw`
      grid
      divide-x
      divide-[#353535]
      divide-solid
      max-w-[1300px] px-[20px] m-auto md:px-[16px] lg:px-[24px] xxl:px-[48px]
      md:divide-x-0
      md:divide-y
    `
  }
`

export const ContentLeft = styled.div`
  ${tw`
    col-start-1
    col-end-4
    pt-[60px]
    pb-[60px]
    md:col-start-1
    md:col-end-12
  `}
  h3{
    ${tw`
      mb-[32px]
    `}
  }
`
export const ContentRight = tw.div`
  col-start-4
  col-end-12
  py-[60px]
  grid
  pl-[123px]
  md:col-start-1
  md:col-end-12
  lg:pl-[50px]
  md:pl-0
  md:grid-cols-12
`

export const QuickLinksStyle = tw.div`
  col-start-1
  col-end-4
  md:col-start-1
  md:col-end-6
`
export const ContactStyle = styled.div`
  ${
    tw`
      col-start-4
      col-end-12
      md:col-start-6
      md:col-end-12
    `
  }
  &>div{
    ${tw`
      mb-[17px]
    `}
  }
`

export const Description = styled.div`
  ${tw`
    text-tiny
    mb-[12px]
    lg:text-[16px]
    lg:leading-[25px]
    max-w-[264px]
    md:max-w-full
    `
  }
  a{
    ${tw`text-DEFAULT`}
  }

  &.copyright-des{
    ${tw`m-0`}
  }
`

export const TitleStyle = tw.h4`
  uppercase
  text-[16px]
  leading-[21px]
  font-bold
  mb-[34px]
  font-sans
`

export const LinkItem = styled.a`
  ${tw`
    text-tiny
    mb-[12px]
    lg:text-[16px]
    lg:leading-[25px]
    max-w-[264px]
    md:max-w-full
    text-DEFAULT
    `
  }

  &.copyright-des{
    ${tw`m-0`}
  }
`