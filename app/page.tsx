import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <div className="header">
          <h1>AI Content Generator</h1>
          <p>Create high-quality content in seconds with our AI-powered tool.</p>
        </div>
      </header>

      <div className="container">
        <section className="features">
          <div className="feature">
            <img src="/images/feature1.png" alt="Feature 1" />
            <h2>Fast and Efficient</h2>
            <p>Generate content in seconds, saving you time and effort.</p>
          </div>
          <div className="feature">
            <img src="/images/feature2.png" alt="Feature 2" />
            <h2>User-Friendly Interface</h2>
            <p>Easy to use, no technical skills required.</p>
          </div>
          <div className="feature">
            <img src="/images/feature3.png" alt="Feature 3" />
            <h2>High-Quality Output</h2>
            <p>Create engaging and relevant content tailored to your needs.</p>
          </div>
        </section>

        <section className="cta">
          <Button>Get Started Now</Button>
        </section>

        <footer>
          <UserButton />
        </footer>
      </div>
    </main>
  );
}