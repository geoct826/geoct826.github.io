import React, { ReactNode } from "react"
import tw from "twin.macro"
import styled from "styled-components"

import { variants, fontColorVariants, fontSizeVariants,  marginVariants, verticalAlignVariants} from "../../utilities/variants"
import { faLevelDown } from "@fortawesome/free-solid-svg-icons"

type headingProps = {
    level: number,
    variants?:variants,
    children?:ReactNode
}

export const H1 = styled.h1(({ fontColor = 'primary', margin = 'default', verticalAlign='base'}:variants) => [
    tw`font-sans font-extrabold tracking-wider`,
    fontSizeVariants['xxxl'],
    fontColorVariants[fontColor],
    marginVariants[margin],
    verticalAlignVariants[verticalAlign],
])

export const H2 = styled.h2(({ fontColor = 'primary', margin = 'default', verticalAlign='base'}:variants) => [
    tw`font-sans font-bold tracking-wide`,
    fontSizeVariants['xxl'],
    fontColorVariants[fontColor],
    marginVariants[margin],
    verticalAlignVariants[verticalAlign],
])

export const H3 = styled.h3(({ fontColor = 'primary', margin = 'default', verticalAlign='base' }:variants) => [
    tw`font-sans font-semibold tracking-wide`,
    fontSizeVariants['xl'],
    fontColorVariants[fontColor],
    marginVariants[margin],
    verticalAlignVariants[verticalAlign],
])

export const H4 = styled.h4(({ fontColor = 'primary', margin = 'default', verticalAlign='base' }:variants) => [
    tw`font-sans font-medium`,
    fontSizeVariants['lg'],
    fontColorVariants[fontColor],
    marginVariants[margin],
    verticalAlignVariants[verticalAlign],
])

export const H5 = styled.h5(({ fontColor = 'primary', margin = 'default', verticalAlign='base' }:variants) => [
    tw`font-sans`,
    fontSizeVariants['md'],
    fontColorVariants[fontColor],
    marginVariants[margin],
    verticalAlignVariants[verticalAlign],
])

export const H6 = styled.h6(({ fontColor = 'primary', margin = 'default', verticalAlign='base' }:variants) => [
    tw`font-sans`,
    fontSizeVariants['sm'],
    fontColorVariants[fontColor],
    marginVariants[margin],
    verticalAlignVariants[verticalAlign],
])

export const P = styled.p(({ fontColor = 'primary', margin = 'default', verticalAlign='base' }:variants) => [
    tw`font-sans`,
    fontSizeVariants['md'],
    fontColorVariants[fontColor],
    marginVariants[margin],
    verticalAlignVariants[verticalAlign],
])

const Heading = ({level=1, variants, children}: headingProps) => {
    switch(level) {
        case 1:
            return (
                <H1 {...variants}>
                    {children}
                </H1>
            )
        case 2:
            return (
                <H2 {...variants}>
                    {children}
                </H2>
            )
        case 3:
            return (
                <H3 {...variants}>
                    {children}
                </H3>
            )
        case 4:
            return (
                <H4 {...variants}>
                    {children}
                </H4>
            )
        case 5:
            return (
                <H5 {...variants}>
                    {children}
                </H5>
            )
        case 6:
            return (
                <H6 {...variants}>
                    {children}
                </H6>
            )
        default:
            return (
                <P {...variants}>
                    {children}
                </P>
            )
      }
}

export default Heading