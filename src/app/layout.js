"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Navbar from "@/components/Navbar"
import './globals.css'
import Footer from '@/components/Footer';
import { ThemeProvider } from '../context/theme.js';
import { useEffect, useState } from 'react';
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({ children }) {
  const [themeMode, setThemeMode] = useState("light")


  const darkTheme = () =>{
    setThemeMode("dark")
    localStorage.setItem("themeMode", "dark")
  }

  const lightTheme = () =>{
    setThemeMode("light")
    localStorage.setItem("themeMode", "light")
  }

  useEffect(()=>{
    const theme = localStorage.getItem("themeMode") || "light";

      console.log(theme)
      setThemeMode(theme)
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
 
  },[themeMode])

  return (
    <html lang="en">
      <body className='bg-white dark:bg-black '>
        <AppRouterCacheProvider>
        <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
          <Navbar/>
          <div className='xl:px-[7%] lg:px-[3%]'>
            {children}
          </div>
          <Footer/>
        </ThemeProvider>  
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
