import tw from "twin.macro"
import styled from "styled-components"

export const MastheadComp = styled.div`
    ${tw`relative`}
    img{
        ${tw`
            w-full
        `}
    }
`
export const ContentMasthead = styled.div`
    ${tw`
        w-[100%]
        text-center
        text-[#fff]
        absolute
        top-[50%]
        left-[50%]
        lg:w-[100%]
        font-sans
        max-w-[763px]
        m-auto 
        md:px-[16px]
        lg:px-[24px]
        xxl:px-[48px]
    `}
    a{
        ${
            tw`
                justify-center
            `
        }
    }
    transform: translate(-50%,-50%)
`

export const Description = tw.div`
    mb-[137px]
    text-button
    lg:mb-4
    md:mb-[19px]
    md:mt-[16px]
    lg:text-[18px]
    lg:leading-[20px]
`

export const Heading = tw.h1`
    text-[60px]
    font-bold
    leading-[78px]
    text-[#fff]
`
