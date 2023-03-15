import React from "react"

import tw from 'twin.macro'
import styled from 'styled-components'

import { variants, inputProps, directionVariants, gapVariants, justifyContentVariants, flexVariants, textAlignVariants, sectionWidthVariants, marginVariants } from '../../utilities/variants'

const BlockStyle = styled.span(({direction = 'horizontal', textAlign='center', justifyContent = 'center', flex = 'auto', gap ='', width='', margin=''}: variants) => [
    tw`flex -space-x-px overflow-hidden`,
    directionVariants[direction],
    justifyContentVariants[justifyContent],
    flexVariants[flex],
    textAlignVariants[textAlign],
    gapVariants[gap],
    sectionWidthVariants[width],
    marginVariants[margin],
])

const Block = ({variants, children}: inputProps) => {
    return (
        <BlockStyle {...variants}>
            {children}
        </BlockStyle>
    )
}

export default Block