import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { MouseFollower } from "@/components/mouse-follower"
import { InteractiveParticles } from "@/components/interactive-particles"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rohan Kumar Sharma - Full Stack Developer",
  description:
    "MERN Stack Developer specializing in AI-driven web development. Building responsive applications with React, Node.js, and modern AI tools.",
  generator: "v0.app",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Node.js", "AI Development", "Web Development"],
  authors: [{ name: "Rohan Kumar Sharma" }],
  openGraph: {
    title: "Rohan Kumar Sharma - Full Stack Developer",
    description: "MERN Stack Developer specializing in AI-driven web development",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <MouseFollower />
            <InteractiveParticles />
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
