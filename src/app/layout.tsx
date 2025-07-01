import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yummy-restaurant-five.vercel.app"),
  title: "Yummy Restaurant",
  description:
    "Discover the best in modern cuisine with Yummy Restaurant. Digital menu, fast ordering, and an unforgettable dining experience.",

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
        color: "#ff6600",
      },
    ],
  },


  keywords: [
    "restaurant",
    "food",
    "digital menu",
    "delivery",
    "Yummy Restaurant",
    "fast ordering",
  ],


  openGraph: {
    title: "Yummy Restaurant 🍽️",
    description: "Digital menu with delicious meals and a great user experience.",
    url: "https://yummy-restaurant-five.vercel.app",
    siteName: "Yummy Restaurant",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "Yummy Restaurant Open Graph Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yummy Restaurant",
    description: "Tasty food, fast service, and digital convenience.",
    site: "@yummyrestaurant",
    creator: "@yummyrestaurant",
    images: ["/ico.svg"],
  },

  authors: [{ name: "Yummy Dev Team", url: "https://yummyrestaurant.com" }],
  generator: "Next.js",
  applicationName: "Yummy Restaurant",
  category: "restaurant",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
