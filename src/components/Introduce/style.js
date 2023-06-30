import tw from "twin.macro"
import styled from "styled-components"

export const IntroduceStyle = styled.div`
    ${tw`
      pt-[160px]
      pb-[80px]
      lg:pb-[30px]
      lg:pt-[60px]
      box-border
      text-center
      font-display
      text-DEFAULT
    `}
`
export const IntroduceContent = styled.div`
    ${tw`
      max-w-[838px]
      m-auto
    `
    }
    h2{
      ${tw`
        max-w-[665px]
        mx-auto
      `
      }
    }
`

export const Subheading = tw.h4`
    text-sub-heading
    text-yellow
    mb-[20px]
    uppercase
    font-sans
`

export const Description = tw.div`
    text-base
    mb-[60px]
    mt-[35px]
    lg:text-[16px]
    lg:leading-[25px]
`