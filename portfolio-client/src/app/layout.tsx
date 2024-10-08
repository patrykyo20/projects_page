import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
import StoreProvider from "./storeProvider";
import Footer from "./components/Footer";
import CreateButtons from "./components/CreateButtons";

export const metadata: Metadata = {
  title: "Show your project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider >
      <ClerkProvider>
        <html lang="en">
          <body className="bg-primary">
            <Header />
            {children}

            <CreateButtons />

            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
};
