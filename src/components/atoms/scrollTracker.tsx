import * as React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { ScrollTimeline } from '../../utilities/scroll-timeline/scroll-timeline.cjs'
//export const ScrollTimeline = require('../../utilities/scroll-timeline/scroll-timeline.cjs')

const ScrollTracker = styled.div(() => [
    tw`fixed top-0 h-2 bg-blue-200 w-full z-1 origin-left`
])

class ScrollTrackerIndicator extends React.Component {
    componentDidMount() {
        const scrollPosition = document.getElementById("scroll-tracker-indicator")

        const scrollTrackerTimeline = new ScrollTimeline({
            source: document.scrollingElement,
            orientation: "block",
            scrollOffsets: [CSS.percent(0), CSS.percent(50)],
        })

        scrollPosition?.animate(
            {
                transform:["scaleX(0)", "scaleX(1)"],
            },
            { 
                duration: 1,
                timeline: scrollTrackerTimeline,
            }
        )
        
        
        //const scrollTrackingTimeline:KeyframeAnimationOptions = 
        
        //scrollPosition?.
        //)
    }
    
    componentWillUnMount() {
    }

    render() {
        return (
            <ScrollTracker id="scroll-tracker-indicator" />
        )
    }
}

export default ScrollTrackerIndicator
