import React, { ReactNode } from "react"
import tw from 'twin.macro'
import styled from 'styled-components'

import { variants, inputProps, fontSizeVariants, paddingXVariants, buttonColorVariants, widthVariants } from "../../utilities/variants"

const ButtonStyle = styled.button(({fontSize = 'md', color='primary', width='fit'}:variants) => [
    tw`py-2 tracking-wide capitalize transition-colors duration-300 transform rounded-lg border-2 focus:outline-none focus:ring focus:ring-opacity-80`,
    paddingXVariants[fontSize],
    fontSizeVariants[fontSize],
    buttonColorVariants[color], 
    widthVariants[width],
])

const Button = ({variants, children,  id, onClick}: inputProps) => {
    return (
        <ButtonStyle onClick={onClick} id={id} {...variants}>
            {children}
        </ButtonStyle>
    )
}

export default Button