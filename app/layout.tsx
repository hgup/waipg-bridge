import "@/app/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import { Metadata } from "next"
import Footer from "@/components/footer"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  metadataBase: new URL("https://bridge.aipowergrid.io/"),
  title: {
    default: "PowerGrid",
    template: "%s | PowerGrid",
  },
  description: "Wrap Unwrap Tokens",
  openGraph: {
    title: "PowerGrid",
    description: "Wrap Unwrap Tokens",
    url: "https://bridge.aipowergrid.io/",
    siteName: "PowerGrid",
    images: "opengraph-image.png",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Hursh Gupta",
    card: "summary_large_image",
  },
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("bg-background font-sans antialiased dark", fontSans.variable)}
      >
        <ScrollArea className="h-screen">
          <Navbar />
          {children}
          {/* <Footer /> */}
        </ScrollArea>
      </body>
    </html>
  )
}
