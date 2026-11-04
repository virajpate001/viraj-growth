import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: {
    default: "Viraj Pate | E-commerce Growth Partner",
    template: "%s | Viraj Pate",
  },
  description:
    "Freelance Shopify & WooCommerce developer. Get a free Business Growth Report and find out what's holding your online store back.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}