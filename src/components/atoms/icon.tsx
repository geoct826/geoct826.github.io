import * as React from "react"
import tw from "twin.macro"
import styled from "styled-components"

import { variants, iconSizeVariants, verticalAlignVariants } from "../../utilities/variants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark, faFileLines, faFileCode, faIdBadge, faMobile } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faXmark)
library.add(faFileLines)
library.add(faFileCode)
library.add(faIdBadge)
library.add(faMobile)

type iconProps = {
    icon: IconProp,
    id?: string,
    variants?: variants,
}

const IconStyle = styled(FontAwesomeIcon)(({iconSize = 'md', verticalAlign = 'base'}:variants) => [
    tw`inline-block my-auto`,
    iconSizeVariants[iconSize],
    verticalAlignVariants[verticalAlign],
])

const Icon = ({ icon, id='', variants }: iconProps)  => {
    return (
        <IconStyle id={id} icon={icon} {...variants} fixedWidth/>
      )
    }

export default Icon