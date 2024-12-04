import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
const outfit = localFont({
  src: "./fonts/Outfit-Regular.ttf",
  variable: "--font-outfit",
  weight: "100 900",
});

const play = localFont({
  src: "./fonts/Play-Regular.ttf",
  variable: "--font-play",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TaskBar App",
  description: "TaskBar App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={` ${outfit.variable} ${poppins.variable}  ${play.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
