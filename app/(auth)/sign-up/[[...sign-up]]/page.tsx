import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        background: "linear-gradient(to bottom, #5a47a5, #8974c0, #bba2e0)", // Gradient from deep purple to soft lavender
      }}
    >
      <div className="relative flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section - Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-[#8974c0] p-4"> {/* Mid-tone purple to blend */}
          <Image 
            src="/signin2.png"  // Replace with your uploaded image path
            alt="Sign In Guide"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Right Section - Clerk Sign-In */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <SignUp />
        </div>

      </div>
    </div>
  );
}
