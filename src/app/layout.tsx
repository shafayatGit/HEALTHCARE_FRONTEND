import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";

import "./globals.css";
import QueryProviders from "../providers/QueryProvider";
import { cn } from "@/src/lib/utils";

const nunitoSans = Nunito_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healthcare App",
  description:
    "A healthcare application which allows patients to book appointments with doctors and manage their health records. Doctors can manage their appointments and view patient records. Admin can manage users and appointments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        nunitoSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <QueryProviders>{children}</QueryProviders>
      </body>
    </html>
  );
}
