import React, { ReactNode, useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Link from '../atoms/link'
import Icon from '../atoms/icon'
import useOutsideClick from '../../utilities/outsideClick'
import Button from '../atoms/button'

type Props = {
    children?: ReactNode
}

type variant = {
    show?: string
}

const showVariant = {
    show: tw`transform translate-x-0 translate-y-0 rotate-0 scale-100 skew-x-0 skew-y-0`,
    hide: tw`transform -translate-x-full translate-y-0 rotate-0 scale-100 skew-x-0 skew-y-0`,
}

const SidebarStyle = styled.nav(({show = 'hide'}: variant) => [
    tw`z-40 fixed left-0 top-0 flex w-3/4 h-full flex-col overflow-y-auto bg-gray-600 pt-6 pb-8 sm:max-w-xs lg:w-80`,
    tw`transition-transform`,
    showVariant[show],
])

const SideBar = ({ children }: Props) => {
    const [rightPanelOpened, setRightPanelOpened] = useState(false);

    var sideBarState = 'hide'
    if (rightPanelOpened == true) {
        sideBarState = 'show'
    }

    const closePanel = () => {
        console.log('close panel')
        setRightPanelOpened(false)
    }

    const ref = useOutsideClick('openSideBar', closePanel);

    return (        
        <>
            <Link id="openSideBar" onClick={() => setRightPanelOpened(true)} variants={{'fontSize':'xl'}}>
                <Icon id="openSideBar" icon={'bars'}  variants={{'iconSize':'lg', 'verticalAlign':'sub'}}/>
            </Link>
            <SidebarStyle ref={ref} show={sideBarState}>
                <Link onClick={() => setRightPanelOpened(false)} variants={{'fontSize':'xl', 'textAlign':'right', 'paddingX':'xl'}}>
                    <Icon id="openSideBar" icon={'xmark'} variants={{'iconSize':'xl', 'verticalAlign':'sub'}}/>
                </Link>
                {children}
            </SidebarStyle>
        </>
    )
}

export default SideBar
