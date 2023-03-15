import React, { ReactNode } from "react"
import tw from "twin.macro"
import styled from "styled-components"

import { variants, inputProps, fontSizeVariants, linkColorVariants, textAlignVariants, paddingXVariants } from "../../utilities/variants"

const LinkStyle = styled.a(({fontSize = 'md', linkColor='primary', textAlign='left', paddingX='sm'}:variants) => [
    tw`font-medium`,
    fontSizeVariants[fontSize],
    linkColorVariants[linkColor], 
    textAlignVariants[textAlign],
    paddingXVariants[paddingX],
])

const Link = ({variants, children, id, onClick}: inputProps) => {
    return (
        <LinkStyle onClick={onClick} id={id} {...variants}>
            {children}
        </LinkStyle>
    )
}

export default Link