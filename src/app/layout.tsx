import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Home | Unicelestia ",
  description:
    "Unicelestia Pvt. Ltd. advances healthcare through innovative, high-quality pharmaceutical products. Committed to safety and efficacy, we meet the needs of patients and healthcare professionals, striving for a healthier future for all.",
  keywords:
    "Unicelestia, pharmaceutical products, prescription medications, health supplements, drug manufacturing, clinical trials, pharmacy services",
  openGraph: {
    title: "Unicelestia",
    description:
      "Unicelestia Pvt. Ltd. advances healthcare through innovative, high-quality pharmaceutical products. Committed to safety and efficacy, we meet the needs of patients and healthcare professionals, striving for a healthier future for all.",
    url: "https://unicelestia.com/",
    siteName: "Unicelestia",
    images: [
      {
        url: "https://unicelestia.com/images/full-logo.png",
        width: 1920,
        height: 1080
      }
    ],
    locale: "en-US",
    type: "website"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased light`}>
        <Analytics/>
        <Navbar />
        {children}
        <div className="h-fit w-full ">
          <svg
            className="inline-block fill-current w-full h-auto text-primaryBlue"
            viewBox="0 0 1440 450"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1189.2 169.2H421H253.8C159.8 169.2 69.1 203.1 0 262.6V449.8C30.5 349.9 131.3 276.7 252 276.7H424.1H1187.4C1280.9 276.7 1371 243.2 1440 184.3V0C1408.1 97.9 1308.3 169.2 1189.2 169.2Z"></path>
          </svg>
        </div>
        <Footer />
      </body>
    </html>
  )
}
