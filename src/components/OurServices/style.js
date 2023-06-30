import tw from "twin.macro"
import styled from "styled-components"

export const OurServicesStyle = styled.div`
    ${tw`
      py-[80px]
      lg:py-[30px]
      box-border
      font-display
      text-DEFAULT
    `}
    &>h2{
      ${tw`text-center`}
    }
    .ourservice-container{
      ${tw`grid col-span-12`}
    }

`
export const TitlesStyle = tw.ul`
  col-start-1
  col-end-6
  cursor-pointer
  list-none
  mt-0
  md:col-start-1
  md:col-end-12
  ml-[30px]
  lg:ml-[21px]
  md:ml-[12px]
`
export const ItemTitle = styled.li`
  ${tw`
    pl-[10px]
    relative
    max-w-[437px]
    lg:max-w-[390px]
  `}
  h2{
    ${
      tw`
        mb-[15px]
      `
    }
  }
   &.yellow{
    ${tw`
      text-yellow
    `}
   }
    &::before{
      content: "+";
      ${tw`
        absolute
        text-[38px]
        leading-[38px]
        lg:text-[38px]
        top-0
        left-[-30px]
        lg:text-[25px]
        lg:leading-[20px]
        lg:left-[-22px]
        lg:left-[-16px]
      `}
    }
`

export const ContentService = styled.div`
  ${tw`
    col-start-6
    col-end-12
    max-w-[520px]
    ml-auto
    md:col-start-1
    md:col-end-12
  `}
`
export const PreventContentStyle = tw.div`
  col-start-8
  col-end-12
  row-start-2
  row-end-3
  lg:col-span-12
  lg:row-start-2
  lg:row-end-3
`

export const TitleStyle = tw.h3`
  text-heading-3
  text-yellow
  mb-[34px]
  font-display
  lg:text-heading-3-mb
  max-w-[393px]
  lg:max-w-full
`

export const Description = styled.div`
  ${tw`
      text-base
      pb-[54px]
      lg:text-[16px]
      lg:leading-[25px]
      md:pb-[24px]
    `
  }
  a {
    &:hover{
      ${tw`
        text-DEFAULT
      `}
    }
  }
  p {
    &:last-child{
      ${tw`
        mb-0
      `}
    }
  }
`