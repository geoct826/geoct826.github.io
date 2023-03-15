import React, { ReactNode } from "react"
import tw from 'twin.macro'
import styled from 'styled-components'
//import { ScrollTimeline } from '../utilities/scroll-timeline'

import { Helmet } from 'react-helmet'

import GlobalStyles from "./globalStyles"
import NavBar from "../components/organisms/navbar"
import Icon from "../components/atoms/icon"
import Link from "../components/atoms/link"
import ScrollTrackerIndicator from "../components/atoms/scrollTracker"
import Menu from "../components/molecules/menu"
import SideBar from "../components/organisms/sidebar"

import Logo from "../assets/logo.inline.svg"

interface Props {
    children?: ReactNode
}

const BodyStyle = styled.body(() => [
    tw`min-w-[360px]`,
])

const Background = styled.div(() => [
    tw`absolute bg-fixed bg-center bg-[url('./bg.jpg')] bg-cover`,
])

const MainStyle = styled.div(() => [
    tw``
])

const DefaultLayout = ({ children }: Props) => {


    return(
    <>
    <GlobalStyles/>
    <Helmet>
        <title>tuan.pro</title>
    </Helmet>
    <BodyStyle>
        <ScrollTrackerIndicator/>
        <Background>
        <NavBar>
            <NavBar.Section variants={{'justifyItem':'center', 'flex':'auto'}}>
                <Logo />
            </NavBar.Section>
        </NavBar>
        <MainStyle>
            { children }
        </MainStyle>
        </Background>
    </BodyStyle>
    </>
    )
}

export default DefaultLayout