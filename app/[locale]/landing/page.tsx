"use client";

import AnimatedSection from "@/app/components/AnimatedSection";
import BarChart from "@/app/components/BarChart";

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden text-gray-800">
      {/* Hero */}
      <AnimatedSection className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Build Better Web Experiences
        </h1>
        <p className="max-w-2xl text-center text-lg md:text-xl mb-8 opacity-90">
          A modern landing page layout designed to demonstrate scroll-based
          animations.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition">
          Get Started
        </button>
      </AnimatedSection>

      {/* About */}
      <AnimatedSection className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-6xl mx-auto grid gap-12 w-full h-96">
          <BarChart />
        </div>
      </AnimatedSection>

      {/* Features */}
      <AnimatedSection className="min-h-screen bg-gray-50 px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">Feature {item}</h3>
              <p className="text-gray-600">
                Animate each card independently if you want later.
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="min-h-screen bg-white px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-20">Our Process</h2>
        <div className="max-w-4xl mx-auto space-y-16">
          {["Plan", "Design", "Develop", "Launch"].map((step, i) => (
            <div key={step} className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{step}</h3>
                <p className="text-gray-600">
                  Sequential animation works great here.
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection className="min-h-screen bg-indigo-600 text-white px-6 py-20 flex items-center">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {["10K+", "99%", "24/7", "100+"].map((stat, i) => (
            <div key={i}>
              <h3 className="text-5xl font-bold">{stat}</h3>
              <p className="opacity-80">Stat</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Animate This Page?
        </h2>
        <p className="max-w-xl text-gray-300 mb-8">
          Every section is now observer-ready.
        </p>
        <button className="bg-indigo-600 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition">
          Start Now
        </button>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-10 text-center">
        © 2026 Landing Page Demo.
      </footer>
    </div>
  );
}
