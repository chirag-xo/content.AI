import type { Metadata } from "next";
import { Inter ,Prompt} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Prompt({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Content AI",
  description: "Generate Content Faster and with Ease with Content AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // @ts-ignore
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
    
  );
}
