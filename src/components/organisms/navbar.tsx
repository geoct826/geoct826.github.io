import React, { ReactNode } from "react"
import tw from 'twin.macro'
import styled from 'styled-components'
import { variants, inputProps, justifyItemVariants, widthVariants, flexVariants, showVariants, hideVariants } from "../../utilities/variants"

const HeaderStyle = styled.header(() => [
    tw`bg-gradient-to-b from-gray-900  via-gray-800 to-gray-700/80 mx-auto flex h-16 items-center`
])

const SectionStyle = styled.div(({justifyItem = 'center', flex = 'auto', show = 'all', hide ='none', width ='fit'}: variants) => [
    tw`self-baseline my-auto`,
    justifyItemVariants[justifyItem],
    flexVariants[flex],
    showVariants[show],
    hideVariants[hide],
    widthVariants[width],
])

const NavBarSection = ({variants, children }:inputProps) => {
    return (
        <SectionStyle {...variants}>
            {children}
        </SectionStyle>
    )
}

const NavBar = ({ children }: inputProps) => {
    return (
        <HeaderStyle>
            {children}
        </HeaderStyle>
    )
}

NavBar.Section = NavBarSection

export default NavBar