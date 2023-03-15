import { ReactNode } from "react"
import tw from 'twin.macro'

export type inputProps = {
    variants?: variants
    children?: ReactNode
    id?: string
    onClick?: VoidFunction 
}

export type variants = {
    iconSize?: string,
    fontSize?: string,
    linkColor?: string,
    fontColor?: string,
    color?: string,
    paddingX?: string,
    width?: string,
    smWidth?: string,
    mdWidth?: string,
    lgWidth?: string,
    margin?: string,
    direction?: string,
    smDirection?: string,
    mdDirection?: string,
    gap?: string,
    display?: string,
    textAlign?: string,
    verticalAlign?: string,
    justifyItem?: string,
    justifyContent?: string,
    alignSelf?: string,
    flex?: string,
    show?: string,
    hide?: string,
}

export const buttonColorVariants = {
    primary: tw`text-white bg-blue-600 border-blue-600 hover:bg-blue-400 focus:ring-blue-300`,
    alert: tw`text-white bg-red-600 border-red-600 hover:bg-red-400 focus:ring-red-300`,
    dark: tw`text-blue-600 bg-white border-blue-600 border-2 hover:bg-gray-200 focus:ring-gray-100`,
}

export const linkColorVariants = {
    primary: tw`text-gray-300 hover:text-gray-500 focus:ring-blue-300`,
    alert: tw`text-red-300 hover:text-red-400 focus:ring-red-300`,
    dark: tw`text-gray-200 hover:text-gray-400 focus:ring-gray-100`,
}

export const fontColorVariants = {
    primary: tw`text-blue-100`,
    alert: tw`text-red-100`,
    dark: tw`text-white`,
}

export const iconSizeVariants = {
    xs: tw`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4`,
    sm: tw`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5`,
    md: tw`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`,
    lg: tw`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8`,
    xl: tw`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10`,
    xxl: tw`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12`,
    xxxl: tw`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14`,
}

export const fontSizeVariants = {
    xs: tw`text-xs sm:text-sm md:text-base`,
    sm: tw`text-sm sm:text-base md:text-lg`,
    md: tw`text-base sm:text-lg md:text-xl`,
    lg: tw`text-lg sm:text-xl md:text-2xl`,
    xl: tw`text-xl sm:text-2xl md:text-3xl`,
    xxl: tw`text-2xl sm:text-3xl md:text-4xl`,
    xxxl: tw`text-3xl sm:text-4xl md:text-5xl`,   
}

export const paddingXVariants = {
    none: tw``,
    xs: tw`px-2 sm:px-2.5 md:px-3`,
    sm: tw`px-3 sm:px-3.5 md:px-4`,
    md: tw`px-3.5 sm:px-4 md:px-5`,
    lg: tw`px-4 sm:px-5 md:px-6`,
    xl: tw`px-5 sm:px-6 md:px-7`,
    xxl: tw`px-6 sm:px-7 md:px-8`,
    xxxl: tw`px-7 sm:px-8 md:px-10`,
}

export const widthVariants = {
    fit: tw`w-fit`,
    xxs: tw`w-8`,
    xs: tw`w-16`,
    sm: tw`w-28`,
    md: tw`w-32`,
    lg: tw`w-44`,
    xl: tw`w-60`,
}

export const sectionWidthVariants = {
    twelves: tw`w-1/12`,
    sixths: tw`w-1/6`,
    quarter: tw`w-1/4`,
    third: tw`w-1/3`,
    fiveTwelves: tw`w-5/12`,
    half: tw`w-1/2`,
    sevenTwelves: tw`w-7/12`,
    twoThirds: tw`w-2/3`,
    threeQuarter: tw`w-3/4`,
    fiveSixths: tw`w-5/6`,
    elevenTwelves: tw`w-11/12`,
    whole: tw`w-full`,
    screen: tw`w-screen`,
    doubleScreen: tw`w-2screen`,
    inScreen: tw`w-inScreen`,
}

export const sectionSmWidthVariants = {
    twelves: tw`sm:w-1/12`,
    sixths: tw`sm:w-1/6`,
    quarter: tw`sm:w-1/4`,
    third: tw`sm:w-1/3`,
    fiveTwelves: tw`sm:w-5/12`,
    half: tw`sm:w-1/2`,
    sevenTwelves: tw`sm:w-7/12`,
    twoThirds: tw`sm:w-2/3`,
    threeQuarter: tw`sm:w-3/4`,
    fiveSixths: tw`sm:w-5/6`,
    elevenTwelves: tw`sm:w-11/12`,
    whole: tw`sm:w-full`,
}

export const sectionMdWidthVariants = {
    twelves: tw`md:w-1/12`,
    sixths: tw`md:w-1/6`,
    quarter: tw`md:w-1/4`,
    third: tw`md:w-1/3`,
    fiveTwelves: tw`md:w-5/12`,
    half: tw`md:w-1/2`,
    sevenTwelves: tw`md:w-7/12`,
    twoThirds: tw`md:w-2/3`,
    threeQuarter: tw`md:w-3/4`,
    fiveSixths: tw`md:w-5/6`,
    elevenTwelves: tw`md:w-11/12`,
    whole: tw`md:w-full`,
}

export const sectionLgWidthVariants = {
    twelves: tw`lg:w-1/12`,
    sixths: tw`lg:w-1/6`,
    quarter: tw`lg:w-1/4`,
    third: tw`lg:w-1/3`,
    fiveTwelves: tw`lg:w-5/12`,
    half: tw`lg:w-1/2`,
    sevenTwelves: tw`lg:w-7/12`,
    twoThirds: tw`lg:w-2/3`,
    threeQuarter: tw`lg:w-3/4`,
    fiveSixths: tw`lg:w-5/6`,
    elevenTwelves: tw`lg:w-11/12`,
    whole: tw`lg:w-full`,
}

export const marginVariants = {
    none: tw`m-0`,
    auto: tw`!m-auto`,
    xAuto: tw`!mx-auto`,
    yAuto: tw`!my-auto`,
    all: tw`m-4`,
    x: tw`mx-4`,
    y: tw`my-4`,
    right: tw`!mr-4`,
    left: tw`!ml-4`,
    top: tw`!mt-4`,
    bottom: tw`!mb-4`,
}

export const directionVariants = {
    col: tw`flex-col`,
    colReverse: tw`flex-col-reverse`,
    row: tw`flex-row`,
    rowReverse: tw`flex-row-reverse`,
}

export const directionSmVariants = {
    col: tw`sm:flex-col`,
    colReverse: tw`sm:flex-col-reverse`,
    row: tw`sm:flex-row`,
    rowReverse: tw`sm:flex-row-reverse`,
}

export const directionMdVariants = {
    col: tw`md:flex-col`,
    colReverse: tw`md:flex-col-reverse`,
    row: tw`md:flex-row`,
    rowReverse: tw`md:flex-row-reverse`,
}

export const gapVariants = {
    around: tw`flex-auto justify-around`,
    xs: tw`gap-2`,
    sm: tw`gap-4`,
    md: tw`gap-8`,
    lg: tw`gap-12`,
    none: tw``,
}

export const displayVariants = {
    absolute: tw`absolute`,
    relative: tw`relative`,
}

export const textAlignVariants = {
    left: tw`text-left`,
    center: tw`text-center`,
    right: tw`text-right`,
    justify: tw`text-justify`,
}

export const verticalAlignVariants = {
    base: tw`align-baseline`,
    top: tw`align-top`,
    middle: tw`align-middle`,
    bottom: tw`align-bottom`,
    sub: tw`align-sub`,
    super: tw`align-super`,
}

export const justifyItemVariants = {
    start: tw`justify-start`,
    center: tw`justify-center`,
    end: tw`justify-end`,
}

export const justifyContentVariants = {
    start: tw`justify-start`,
    center: tw`justify-center`,
    end: tw`justify-end`,
    between: tw`justify-between`,
    around: tw`justify-around`,
    evenly: tw`justify-evenly`,
}

export const flexVariants = {
    none: tw`flex-none`, //Prevent a flex item from growing or shrinking
    auto: tw`flex-auto`, //Allow a flex item to grow and shrink, taking into account its initial size 
    initial: tw`flex-initial`, //Allow a flex item to shrink but not grow, taking into account its initial size
    ignore: tw`flex-1`, //Allow a flex item to grow and shrink as needed, ignoring its initial size
}

export const alignSelfVariants = {
    auto: tw`self-auto`,
    start: tw`self-start`,
    end: tw`self-end`,
    center: tw`self-center`,
    stretch: tw`self-stretch`,
    baseline: tw`self-baseline`,
}

export const showVariants = {
    all: tw`flex`,
    small: tw`hidden sm:flex`,
    medium: tw`hidden md:flex`,
    large: tw`hidden lg:flex`,
    none: tw``,
}

export const hideVariants = {
    all: tw`hidden`,
    small: tw`flex sm:hidden`,
    medium: tw`flex md:hidden`,
    large: tw`flex lg:hidden`,
    none: tw``,
}
