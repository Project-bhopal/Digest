"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "../context/theme.js";
import { useEffect, useState } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import PostContext from "@/context/postContext";
import axios from "axios";
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({ children }) {
  const [themeMode, setThemeMode] = useState("light");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/posts/allpost/"
        );
        const data = response.data.data;
        setPosts(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("themeMode", "dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("themeMode", "light");
  };

  useEffect(() => {
    const theme = localStorage.getItem("themeMode") || "light";

    setThemeMode(theme);
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [themeMode]);

  return (
    <html lang="en">
      <body className="bg-white dark:bg-black ">
        <AppRouterCacheProvider>
          <PostContext.Provider value={{posts, setPosts}}>
            <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
              <Navbar />
              <div className="xl:px-[7%] lg:px-[3%]">{children}</div>
              <Footer />
              <ScrollToTopButton />
            </ThemeProvider>
          </PostContext.Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
