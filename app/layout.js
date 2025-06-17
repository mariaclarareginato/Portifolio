import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portifólio Maria Clara Reginato",
  description: "Projetos, habilidades e currículo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT"
          crossOrigin="anonymous"
          
        />
      
      </head>
      <body


        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >


        {children}

          <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />


      </body>



      
    </html>

    

  )}
