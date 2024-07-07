import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterCom from "@/components/FooterCom";
import { dbConnect } from "@/services/dbConnect";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry-Home",
  description: "A World wide Event System",
};

export default async function RootLayout({ children }) {

  await dbConnect()
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
          <Navbar/>
          <main className="py-8">
            {children}
            
            </main>
         
          <FooterCom/>
          </AuthProvider>
      </body>
    </html>
  );
}
