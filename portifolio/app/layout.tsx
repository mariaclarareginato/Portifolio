import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";


export const metadata: Metadata = {
  title: "Portifólio - Maria Clara Reginato",
  description: "Trabalhos e habilidades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
