import React, { ReactNode } from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { ViewTimeline } from '../../utilities/scroll-timeline/scroll-timeline.cjs'

type variant = {
    direction?: string
}

const SlideIn = styled.div(({direction = 'right'}:variant) => [
    tw`overflow-visible transition-transform relative w-screen`,
    directionVariantStyle[direction],
])

const directionVariantStyle = {
    right: tw`translate-x-full translate-y-0 rotate-0 scale-100 skew-x-0 skew-y-0`,
    left: tw`-translate-x-full translate-y-0 rotate-0 scale-100 skew-x-0 skew-y-0`,
}

interface Props {
    direction?: string
    children?: ReactNode
}

const isBrowser = typeof window !== "undefined"

class SlideInEffect extends React.Component<Props> {
    componentDidMount() {
        if (!isBrowser) {
            return;
        }
    
        console.log("load slide in")
        console.log(this.props.direction)
        var translateStart: string
        var translateStop: string

        switch(this.props.direction){
            case 'right':
                translateStart = 'translateX(0%)'
                translateStop = 'translateX(100%)'
                break;
            default:
                translateStart = 'translateX(0%)'
                translateStop = 'translateX(-100%)'
        }

        console.log(translateStart)
        const slideInElement = document.getElementById("slide-in")

        slideInElement?.animate(
            {
                transform:[translateStart, translateStop],
            },
            {
                    fill: 'both',
                    timeline: new ViewTimeline({subject: slideInElement}),
                    delay: { phase: 'contain', percent: CSS.percent(55) },
                    endDelay: { phase: 'contain', percent: CSS.percent(65) },
            }
        )
    }
    
    componentWillUnMount() {
    }


    render() {
        if (!isBrowser) {
            return;
        }
    
        console.log("render slide in element")
        return (
            <SlideIn id="slide-in" direction={this.props.direction}>
                {this.props.children}
            </SlideIn>
        )
    }
}

export default SlideInEffect
