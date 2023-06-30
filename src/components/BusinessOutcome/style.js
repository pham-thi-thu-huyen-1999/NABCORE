import tw from "twin.macro"
import styled from "styled-components"

export const BusinessOutStyle = styled.div`
    ${tw`
      py-[80px]
      lg:py-[30px]
      box-border
      font-display
      text-DEFAULT
    `}
    h2{
      ${tw``}
    }

  .swiper-button-prev{
    ${tw`
      top-auto
      bottom-0
      left-[70%]
      w-[35px]
      lg:left-auto
      lg:right-[10%]
      md:right-[12%]
      sm:right-[20%]
    `}
    &:after{
      content: ""
    }
  }
  .swiper-button-next{
    ${tw`
      top-auto
      bottom-0
      left-[76%]
      w-[35px]
      lg:left-auto
    `}
    &:after{
      content: ""
    }
  }
`
export const ImageStyle = styled.div`
  ${
    tw`
      mb-[69px]
    `
  }
  img{
    ${tw`
      w-full
    `}
  }
`
export const BusinessStyle = styled.div`
  h2{
    ${
      tw`
        ml-[100px]
        xl:ml-0
        xxl:ml-[50px]
      `
    }
  }
`
export const BusinessContentStyle = tw.div`
  m-auto
  max-w-[753px]
  md:ml-0
`
export const NameStyle = tw.div`
  text-base
`
export const RoleStyle = tw.div`
  text-tiny
`
export const Description = styled.div`
  ${tw`
      mb-4
      text-base
      max-w-[753px]
      lg:max-w-full
      lg:text-[16px]
      lg:leading-[25px]
    `
  }
  p {
    &:before{
      content: '"';
      ${tw`
        text-[16px]
      `}
    }
    &:after{
      content: '"';
      ${tw`
        text-[16px]
      `}
    }
    &:last-child{
      ${tw`
        mb-0
      `}
    }
  }
`