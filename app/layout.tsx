import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Account Abstraction (ERC-4337)",
  description: "Learning Account Abstraction (ERC-4337) With ZeroDev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900`}
      >
        {children}
      </body>
    </html>
  )
};