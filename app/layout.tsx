import type { Metadata } from "next";
import { Inter ,Prompt} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Prompt({
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Content.AI - AI-Powered Content Generator",
  description: "Generate high-quality content with AI tools built for creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}