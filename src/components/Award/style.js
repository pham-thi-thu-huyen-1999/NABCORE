import tw from "twin.macro"
import styled from "styled-components"

export const AwardCompStyle = styled.div`
  ${tw`
    relative
    py-[80px]
    mb-[80px]
    lg:mb-0
    lg:py-[30px]
    box-border
    font-display
    text-DEFAULT
  `}
  h2{
    ${tw`
      mb-4
      text-center
      font-sans`
  }
  }
  .container-award{
    transform: translate(-50%, -50%);
    ${tw`
        absolute
        top-[50%]
        left-[50%]
        w-full
        md:sticky
        sm:px-[30px]
        md:translate-y-0
      `
    }
  }
`
export const ImageAwardStyle = tw.div`
  m-auto
  ml-0
  text-right
`
export const ContentStyle = styled.div`
  ${
    tw`
      bg-light
      px-[50px]
      py-[77px]
      max-w-[834px]
      border-[1px]
      border-solid
      border-DEFAULT
      rounded-bl-[25px]
      md:py-[30px]
      md:max-w-full
      md:rounded-br-[25px]
      md:border-none
      sm:px-[30px]
    `
  }
  h3{
    ${tw`
      mb-[34px]
      md:mb-[24px]
      sm:text-[18px]
      sm:leading-[22px]
    `}
  }
`
export const Description = styled.div`
  ${tw`
      text-base
      m-auto
      lg:text-[16px]
      lg:leading-[25px]
    `
  }
  p{
    ${tw`
      last:mb-0
    `}
  }
`