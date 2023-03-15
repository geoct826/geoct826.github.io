import * as React from "react"

import DefaultLayout from "../templates/default"
import {P} from "../components/atoms/heading"
import Photo from "../components/atoms/photo"
import Strap from "../components/molecules/strap"
import Block from "../components/molecules/block"
import Heading from "../components/atoms/heading"
import SlideInEffect from "../components/atoms/slideInEffect"

const Index = () => {
    return (
        <DefaultLayout>
            <Strap variants={{'direction':'colReverse', 'smDirection':'row'}}>
                <Photo src="./headshot.jpg" variants={{'flex':'none', 'alignSelf':'center', 'width':'fiveSixths', 'margin':'xAuto','smWidth':'third', 'mdWidth':'quarter'}} />
                <Block variants={{'direction':'col', 'gap':'xs'}}>
                    <Heading level={3} variants={{'margin':'xAuto', 'fontColor':'alert'}}>
                        Hi! My name is
                    </Heading>
                    <Heading level={1} variants={{'margin':'xAuto'}}>
                        George Tuan
                    </Heading>                    
                </Block>
            </Strap>

            <SlideInEffect>
                <Block variants={{'width':'doubleScreen', 'margin':'right'}}>
                    <Strap variants={{'margin':'right', 'width':'inScreen'}}>
                        <Block variants={{'textAlign':'center'}}>
                            <Heading level={4} variants={{'margin':'xAuto', justifyItem:'center' }}>
                            Project management professional with experience in aerospace and software development industries.
                            </Heading>
                        </Block>
                    </Strap>
                    <Strap variants={{'margin':'left', 'width':'inScreen'}}>
                        <Block variants={{'textAlign':'center'}}>
                            <Heading level={4} variants={{'margin':'xAuto', justifyItem:'center' }}>
                            Full stack developer that looks for ways to solve complex problems with creatively simple solutions.
                            </Heading>
                        </Block>
                    </Strap>
                </Block>
            </SlideInEffect>

            <Strap variants={{'direction':'col'}}>
                <P>
                I’m a seasoned project management professional who not only excels at leading teams but is also a capable full-stack engineer, able to design and architect web applications. I utilize my unique skill set to help develop and create solutions that drive results.
                </P>
                <P>
                With a BS in Aerospace engineering from Georgia Tech and an MS in Astronautical engineering from USC, I worked at NASA Johnson Space Center for ten years in the Environmental Control and Life Support System Division. I worked on advanced thermal control systems projects, developing, researching, and evaluating thermal control system designs for spacecraft. Later, I was a subsystem manager working on Orion Spacecraft, focusing on Water and Waste Management.
                </P>
                <P>
                Using my project management skills, I got my Project Management Professional Certification and transitioned into software development. While I do not have a formal education in computer science, programming has always been something I have done since I got my first computer. Whether it was programming games on my TI calculator or building a spacecraft radiator thermal model in Excel, writing programs always complimented my career.
                </P>
                <P>
                Having worked in various tech startups, I managed development projects as a Project Manager and Scrum Master, focusing on high-level product goals and objectives while working closely with the development team on code implementation and architecture design. In addition, my programming abilities and passion for learning have enabled me to jump in and help, whether it’s back end, front end, dev ops, or database management.
                </P>
            </Strap>
        </DefaultLayout>
    )}

export default Index