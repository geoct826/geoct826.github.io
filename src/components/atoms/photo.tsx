import React, { ReactNode } from "react"
import tw from "twin.macro"
import styled from "styled-components"

import { variants, flexVariants, alignSelfVariants, marginVariants, sectionWidthVariants, sectionSmWidthVariants, sectionMdWidthVariants, sectionLgWidthVariants } from "../../utilities/variants"

type photoProps = {
    src: string,
    id?: string,
    variants?: variants,
}


const PhotoStyle = styled.img(({flex='auto', alignSelf='auto', width='whole', smWidth='', mdWidth='', lgWidth='', margin='none'}:variants) => [
    tw`rounded-2xl`,
    sectionWidthVariants[width],
    sectionSmWidthVariants[smWidth],
    sectionMdWidthVariants[mdWidth],
    sectionLgWidthVariants[lgWidth],
    marginVariants[margin],
    flexVariants[flex],
    alignSelfVariants[alignSelf],
])

const Photo = ({src, id='', variants}: photoProps) => {
    return (
        <PhotoStyle id={id} src={src} {...variants} />
    )
}

export default Photo