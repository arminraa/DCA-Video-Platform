import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NextNprogress from "@/components/lib/NextNprogress";
import "./globals.css";
import { Metadata } from "next";
import { getAxios } from "@/utils/axios";

export const metadata: Metadata = {
  title: "Dca Video",
  description: "Home & Office Security Products",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fetchedData = await getAxios("/home");
  return (
    <html lang="fa" dir="rtl" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        <Header data={fetchedData} />
        <NextNprogress>
          <main>
            <div className="container mx-auto max-w-8xl w-[95vw] flex items-start justify-between">
              {children}
            </div>
          </main>
          <Footer />
        </NextNprogress>
      </body>
    </html>
  );
}
