import tw from "twin.macro"
import styled from "styled-components"

export const ProtectSystemStyle = styled.div`
  ${tw`
    py-[80px]
    lg:py-[30px]
    box-border
    font-display
    text-DEFAULT
  `}
  h2{
    ${tw`
        ml-[63px]
        font-sans
        max-w-[416px]
        lg:ml-0
      `
    }
  }
`
export const ImageStyle = styled.div`
  ${tw`
    max-w-[382px]
    col-start-1
    col-end-6
    row-start-1
    row-end-2
    ml-[54px]
    md:col-start-1
    md:col-end-12
    lg:ml-0
  `}
  picture{
    img{
      ${tw`w-full`}
    }
  }
`
export const ListProtectSystemStyle = styled.div`
  ${tw`
    col-start-6
    col-end-12
    row-start-1
    row-end-3
    max-w-[583px]
    md:col-start-1
    md:col-end-12
    md:row-start-2
    md:row-end-3
    md:max-w-full
  `}
`
export const DiscoverSystemStyle = styled.div`
  ${tw`
    pb-[60px]
  `}
`
export const ButtonDiscoverStyle = styled.div`
  ${tw`
    flex
    justify-end
    xl:mt-[20px]
  `}
`
export const NameSystemStyle = styled.div`
  ${tw`
    absolute
  `}
  h3{
    ${tw`
      m-0
      sm:text-[18px]
    `}
  }

  &:nth-child(2){
    ${tw`
      left-[15%]
      top-[24%]
      md:top-[45px]
      sm:left-0
      xxl:left-[8%]
    `}
  }
  &:nth-child(3){
    ${tw`
      left-[50%]
      bottom-0
    `}
    transform: translateX(-50%);
  }
  &:nth-child(4){
    ${tw`
      left-auto
      right-[4%]
      top-[34%]
      xxl:right-0
      sm:top-[10%]
    `}
  }
`
export const ImageSystemStyle = styled.div`
  ${tw`
    relative
    text-center
    py-[48px]
    lg:py-[34px]
    md:py-[24px]
  `}
  img{
    ${tw`
      md:max-w-[227px]
      xl:max-w-[400px]
    `}
  }
`
export const StepSystemFixedStyle = tw.div`
  grid
  grid-cols-12
  gap-x-[116px]
  xxl:gap-x-[70px]
  md:gap-y-[70px]
  lg:gap-x-[20px]
  md:gap-x-0
`
export const ProtectStyle = styled.div`
  ${tw`
    mb-[75px]
    lg:mb-[48px]
    md:mb-[24px]
  `}
  div{
    ${tw`
      ml-0`}
  }
  h2{
    ${tw`
      cursor-pointer
      pb-[24px]
      m-0
      max-w-[100%]
    `}
  }
  &:last-child{
    ${tw`
      mb-0
    `}
  }
  ${// @ts-ignore
  props => {
    // @ts-ignore
    switch (props.$mode) {
      case "active":
        return `h2{
          color: #F4BF3C;
          border-bottom: 2px solid #F4BF3C;
        }`
      default:
        return `h2{
          color: #353535;
          border-bottom: 2px solid #353535;
        }`
    }
  }
  }
`
export const Description = styled.div`
  ${tw`
      text-base
      mt-[14px]
      ml-[63px]
      lg:ml-0
      lg:text-[16px]
      lg:leading-[25px]
    `
  }
  p {
    ${tw`
      mb-0
    `}
  }
`