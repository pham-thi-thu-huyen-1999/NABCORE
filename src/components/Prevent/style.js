import tw from "twin.macro"
import styled from "styled-components"

export const PreventStyle = styled.div`
    ${tw`
      relative
      py-[80px]
      lg:py-[30px]
      box-border
      font-display
      text-DEFAULT
    `}

    .swiper {
      ${tw`
        w-full
        h-full
      `}
    }
  
  .swiper-slide {
    ${tw`
      pt-[141px]
      lg:pt-[100px]
    `}
  }
  .swiper-pagination-fraction{
    ${tw`
      left-auto
      bottom-0
      w-[100px]
      right-[35px]
      text-[25px]
      leading-[30px]
      lg:text-[20px]
      xxl:right-0
    `}
    .swiper-pagination-current{
      ${tw`
        text-yellow
      `}
    }
  }
  .swiper-button-prev{
    ${tw`
      top-auto
      bottom-0
      left-[61.5%]
      w-[35px]
      h-auto
      lg:left-0
    `}
    &:after{
      content: ""
    }
  }
  .swiper-button-next{
    ${tw`
    h-auto
    top-auto
    bottom-0
    left-[67%]
    w-[35px]
    lg:left-[10%]
    sm:left-[15%]
  `}
    &:after{
      content: ""
    }
  }
`

export const PreventItemStyle = tw.div`
  grid
  grid-cols-12
  text-[18px]
  bg-light
  gap-x-[73px]
  relative
  xxl:gap-x-[36px]
  lg:gap-x-0
  lg:gap-y-[24px]
`

export const ImageContent = styled.div`
  ${tw`
    col-start-1
    col-end-8
    row-start-1
    row-end-3
    max-w-[704px]
    lg:col-span-12
    lg:row-start-1
    lg:row-end-2
  `}
  picture{
    img{
      ${tw`w-full`}
    }
  }
`
export const PreventContentStyle = tw.div`
  col-start-8
  col-end-13
  row-start-2
  row-end-3
  lg:col-span-12
  lg:row-start-2
  lg:row-end-3
`
export const ImageSmallStyle = styled.div`
  ${tw`
    absolute
    left-[50%]
    top-[-97px]
    z-10
    xxl:left-0
    xl:top-[-100px]
    md:left-[50%]
  `}
`
export const Description = styled.div`
  ${tw`
      text-base
      pb-[70px]
      max-w-[447px]
      lg:max-w-full
      lg:text-[16px]
      lg:leading-[25px]
    `
  }
  p {
    &:last-child{
      ${tw`
        mb-0
      `}
    }
  }
`