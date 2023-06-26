"use client"
import "../styles/globals.css"
import "../styles/custom.css"
import "../styles/fonts.css"
import {useEffect} from 'react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900 relative">
        <div className="absolute inset-0 -left-px bottom-0 z-[-3] bg-cover bg-center new-bg" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
