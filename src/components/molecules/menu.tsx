import React, { Children } from "react"
import tw from 'twin.macro'
import styled from 'styled-components'

import { variants, inputProps, directionVariants, gapVariants, displayVariants } from "../../utilities/variants"

const MenuStyle = styled.ul(({direction = 'horizontal', gap = 'lg'}: variants) => [
    tw`flex -space-x-px overflow-hidden list-none list-outside px-0`,
    directionVariants[direction],
    gapVariants[gap],
])

const MenuItemStyle = styled.li(() => [
    tw`my-auto`
])

const MenuAccordianDetails = styled.details(() => [
   tw`[&_summary::-webkit-details-marker]:hidden`,
])

const MenuAccordianSummary = styled.summary(() => [
    tw`flex items-center -space-x-px overflow-hidden list-none py-0`,
])

const MenuAccordianItems = styled.div(({display = 'absolute'}: variants) => [
    tw`absolute origin-top-right`,
    displayVariants[display],
])

const MenuAccordian = ({variants, children}:inputProps) => {
    const arrayChildren = Children.toArray(children);

    return (
        <MenuAccordianDetails>
            <MenuAccordianSummary>
                {arrayChildren[0]}
            </MenuAccordianSummary>
            <MenuAccordianItems {...variants}>
            {Children.map(arrayChildren, (child, index) => {
                const isFirst = index === 0
                return (
                    <MenuStyle>
                        { isFirst ? (
                            <>
                            </>
                        ) : (
                            <MenuItemStyle>
                                {child}
                            </MenuItemStyle>
                        )}
                    </MenuStyle>
                )
            })}
            </MenuAccordianItems>
        </MenuAccordianDetails>
    )
}

const Menu = ({variants, children}: inputProps) => {
    const arrayChildren = Children.toArray(children);

    return (
        <MenuStyle {...variants}>
            {Children.map(arrayChildren, (child, index) => {
            return(
                <MenuItemStyle>
                    {child}
                </MenuItemStyle>
            )
            })}
        </MenuStyle>
    )
}

Menu.Accordian = MenuAccordian 

export default Menu