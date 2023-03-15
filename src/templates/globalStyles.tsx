import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
`
const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles