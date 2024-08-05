"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { createContext, useRef } from "react";
import Navbar from "@/components/Navbar/navbar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import StoreProvider from "./StoreProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Whatsapp from "../components/Whatsapp";
import { AuthProvider } from "@/context/AuthContext"; // Import AuthProvider
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Uniford Organization",
// };

export const RefsContext = createContext<any>(null);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apply = useRef<any>(null);
  const who_are_we = useRef<any>(null);
  const get_involved = useRef<any>(null);
  const global_pre = useRef<any>(null);
  const upcoming = useRef<any>(null);
  const refs = {
    apply,
    who_are_we,
    get_involved,
    global_pre,
    upcoming,
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <AppRouterCacheProvider>
            <RefsContext.Provider value={refs}>
              <AuthProvider> {/* Wrap components with AuthProvider */}
                <Navbar />
                {children}
                <ProgressBar
                  height="4px"
                  color="#263960"
                  options={{ showSpinner: false }}
                  shallowRouting
                />
                <Chatbot />
                <Whatsapp />
                <Footer />
              </AuthProvider> {/* Close AuthProvider */}
            </RefsContext.Provider>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
