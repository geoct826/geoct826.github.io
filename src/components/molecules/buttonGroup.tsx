import React from "react"

import tw from 'twin.macro'
import styled from 'styled-components'

import { variants, inputProps, directionVariants, gapVariants } from '../../utilities/variants'

const ButtonGroupStyle = styled.span(({direction = 'horizontal', gap = 'md'}: variants) => [
    tw`flex -space-x-px overflow-hidden`,
    directionVariants[direction],
    gapVariants[gap],
])

const ButtonGroup = ({variants, children}: inputProps) => {
    return (
        <ButtonGroupStyle {...variants}>
            {children}
        </ButtonGroupStyle>
    )
}

export default ButtonGroup