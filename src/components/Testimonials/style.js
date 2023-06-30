import tw from "twin.macro"
import styled from "styled-components"

export const TestimonialsStyle = styled.div`
  ${tw`
    relative
    py-[80px]
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
  .container-market-service{
    ${tw`
      text-center`
  }
  }
`
export const TestimonialListsStyle = tw.div`
  grid
  grid-cols-4
  grid-rows-1
  gap-x-[60px]
  pt-[53px]
  pb-[79px]
  px-[62px]
  xxl:grid-cols-2
  xxl:grid-rows-2
  xxl:gap-y-[50px]
  sm:grid-cols-1
  sm:grid-rows-4
  rounded-[25px]
  border-[3px]
  border-solid
  border-DEFAULT
  xxl:text-center
`
export const TestimonialStyle = tw.div``

export const ImageStyle = styled.div`
  ${tw`
    max-w-[254px]
    m-auto
  `}
  picture{
    img{
      ${tw`w-full`}
    }
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
  p {
    ${tw`
      mb-0
    `}
  }
`