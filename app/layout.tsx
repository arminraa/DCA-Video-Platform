import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NextNprogress from "@/components/lib/NextNprogress";
import "./globals.css";
import { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import DataProvider from "@/context/data/provider";

export const metadata: Metadata = {
  title: "Dca Video",
  description: "Home & Office Security Products",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        <DataProvider>
          <AppRouterCacheProvider>
            <Header />
            
            {/* <NextNprogress>
              <main>
                <div className="container mx-auto max-w-8xl w-[95vw] flex items-start justify-between">
                  {children}
                </div>
              </main>
              <Footer />
            </NextNprogress> */}
          </AppRouterCacheProvider>
        </DataProvider>
      </body>
    </html>
  );
}
