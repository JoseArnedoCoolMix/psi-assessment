import type { Metadata } from "next";
import "./globals.css";
import MainNav from "./(main)/MainComponents/MainNav";
import MobileNav from "./(main)/MainComponents/MobileNav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "PSI Assessment",
  description: "App assessment for PSI Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <MainNav />
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
