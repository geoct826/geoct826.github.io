import React from "react"

import tw from 'twin.macro'
import styled from 'styled-components'

import { variants, inputProps, directionVariants, directionSmVariants, directionMdVariants, gapVariants, marginVariants, sectionWidthVariants } from '../../utilities/variants'

const StrapStyle = styled.span(({direction = 'horizontal', smDirection= '', mdDirection= '', gap = 'md', margin='all', width=''}: variants) => [
    tw`flex bg-zinc-800/80 p-6 -space-x-px overflow-hidden rounded-3xl`,
    directionVariants[direction],
    directionSmVariants[smDirection],
    directionMdVariants[mdDirection],
    gapVariants[gap],
    marginVariants[margin],
    sectionWidthVariants[width],
])

const Strap = ({variants, children}: inputProps) => {
    return (
        <StrapStyle {...variants}>
            {children}
        </StrapStyle>
    )
}

export default Strap