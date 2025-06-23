import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Yummy Restaurant",
  description:
    "Discover the best in modern cuisine with Yummy Restaurant. Digital menu, fast ordering, and an unforgettable dining experience.",


  icons: {
    icon: "/yummy-logo.svg",                        
    shortcut: "/yummy-logo.svg",         
    apple: "/yummy-logo.svg",          
    other: [
      {
        rel: "mask-icon",
        url: "/yummy-logo.svg",
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
    url: "https://yummyrestaurant.com",
    siteName: "Yummy Restaurant",
    images: [
      {
        url: "/yummy-logo.svg", 
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
    images: ["/yummy-logo.svg"],
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
      </body>
    </html>
  );
}
