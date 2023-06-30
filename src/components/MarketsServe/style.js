import tw from "twin.macro"
import styled from "styled-components"

export const MarketsServeStyle = styled.div`
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
      text-center
      capitalize
      font-sans`
  }
  }
  .container-market-service{
    ${tw`
      text-center
      desktop:px-[94px]
      `
  }
  }
`
export const MarketsListsStyle = tw.div`
  grid
  grid-cols-2
  grid-rows-2
  gap-x-[75px]
  gap-y-[100px]
  md:grid-cols-1
  md:grid-rows-4
  md:gap-y-[50px]
`
export const MarketStyle = tw.div`
  text-center
  pt-[53px]
  pb-[42px]
  px-[62px]
  text-[18px]
  bg-light
  border-[1px]
  border-solid
  border-DEFAULT
  lg:px-[30px]
  md:px-[48px]
`

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

export const TitleStyle = tw.h4`
  text-sub-heading
  mt-[24px]
  mb-[10px]
  font-sans
`

export const Description = styled.div`
  ${tw`
      text-base
      pb-[100px]
      max-w-[1024px]
      m-auto
      lg:max-w-full
      lg:text-[16px]
      lg:leading-[25px]
      lg:pb-[60px]
    `
  }
  p {
    ${tw`
      mb-0
    `}
  }
`


export const DescriptionItem = styled.div`
  ${tw`
      text-tiny
      max-w-[400px]
      m-auto
      lg:max-w-full
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