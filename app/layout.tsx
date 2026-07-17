import type React from "react"
import type { Metadata } from "next"
import { Patrick_Hand } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Rahul Chavali",
  description: "Personal portfolio website showcasing projects and experience",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={patrickHand.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
