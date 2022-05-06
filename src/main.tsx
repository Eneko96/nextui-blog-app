import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import './index.css'

const lightTheme = createTheme({
  type: 'light'
})

const darkTheme = createTheme({
  type: 'dark'
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </NextThemesProvider>
  </React.StrictMode>
)
