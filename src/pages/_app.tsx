import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawlerContextProvider } from '../context/SidebarContext'
import { Component } from 'react'

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <SidebarDrawlerContextProvider >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SidebarDrawlerContextProvider>
  )
}

export default MyApp
