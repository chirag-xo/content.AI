"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { LayoutTemplate, Settings, BookOpen, Headphones } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const features = [
    { title: "25+ Templates", desc: "Responsive, mobile-first project templates.", icon: <LayoutTemplate size={32} className="text-blue-600" /> },
    { title: "Customizable", desc: "Easily extend and modify components.", icon: <Settings size={32} className="text-green-600" /> },
    { title: "Free to Use", desc: "All components are well documented.", icon: <BookOpen size={32} className="text-purple-600" /> },
    { title: "24/7 Support", desc: "We are here to help anytime.", icon: <Headphones size={32} className="text-red-600" /> },
  ];

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundColor: "rgba(230, 220, 235, 0.85)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 20%, url('/pattern.svg') 20%, url('/pattern.svg') 80%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0) 100%)`,
          backgroundSize: "20%",
          backgroundRepeat: "repeat",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      <nav className="relative flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-800 flex items-center">
          <span className="text-primary">Content.AI</span>
        </div>
        <div className="flex items-center gap-4">
          <UserButton />
          <Button onClick={() => router.push("/dashboard")}>Get Started</Button>
        </div>
      </nav>

      <section className="relative text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to <span className="text-primary">Content.AI</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Revolutionizing content creation with AI-powered tools for effortless, high-quality writing.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg" onClick={() => router.push("/dashboard")}>
          Get Started
        </Button>
      </section>

      <section className="relative py-16 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg text-center flex flex-col items-center"
            style={{
              position: 'relative',
              backgroundColor: 'transparent', // Transparent background
              border: '2px dotted rgba(128, 128, 128, 0.5)', // Dotted outline
            }}
          >
            {/* Larger Tape Effect */}
            <div
              style={{
                position: 'absolute',
                top: '-20px', // Larger top offset
                left: '50%',
                width: '100px', // Larger width
                height: '30px', // Larger height
                backgroundColor: 'rgba(200, 200, 200, 0.7)', // Slightly more opaque
                borderRadius: '10px 10px 0 0',
                zIndex: 1,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Added shadow for depth
                transform: 'rotate(-3deg) translateX(-50%)', // Slight rotation for candid look
              }}
            ></div>

            {feature.icon}
            <h3 className="text-xl font-bold text-gray-800 mt-4">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}