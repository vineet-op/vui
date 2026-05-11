import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ViewTransitions } from "next-view-transitions";
import { RootProvider } from "fumadocs-ui/provider/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VUI",
  description:
    "Beautiful, animated components for modern web applications built with Tailwind CSS, Shadcn UI, and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ViewTransitions>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          <TooltipProvider>
            <RootProvider
              search={{
                enabled: true,
              }}
              theme={{
                defaultTheme: "light",
                enabled: false,
              }}
            >
              {children}
            </RootProvider>
          </TooltipProvider>
        </body>
      </ViewTransitions>
    </html>
  );
}
