import { SparklesIcon, RocketIcon } from "lucide-react";
import { WaitlistForm } from "@/polymet/components/waitlist-form";

export function ComingSoonHero() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://assets.polymet.ai/electronic-coral-050418')",
        }}
      />
      <div className="bg-[linear-gradient(to_bottom,rgba(26,26,46,0.60),rgba(15,52,96,0.60))] absolute inset-0"></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container mx-auto px-4 py-20 md:py-32 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300">
              <SparklesIcon className="w-4 h-4" />

              <span className="text-sm font-medium">Coming Soon</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                SMART NICOTINE
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-4xl font-semibold text-white">
              Break Free From Combustible Cigarettes
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Revolutionary AI-powered coaching to help you quit smoking. Join
              the waitlist and be among the first to experience the future of
              smoking cessation.
            </p>

            {/* Stats Section */}
            <section className="flex max-w-sm justify-around items-center mt-10 mb-4 md:mb-10 flex-wrap gap-5 text-white">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 p-0.5 rounded-full">
                <div className="w-full h-full rounded-full flex flex-col justify-center items-center text-center bg-gray-900 hover:bg-gray-900/80 transition backdrop-blur-sm relative">
                  <div className="absolute -inset-2 border border-cyan-400/30 rounded-full"></div>
                  <div className="text-sm font-black leading-none mb-1">600K</div>
                  <div className="text-xs font-semibold leading-none mb-0.5">SMOKERS</div>
                  <div className="text-xs font-normal opacity-80 leading-none">THE TARGET</div>
                </div>
              </div>
              
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 p-0.5 rounded-full">
                <div className="w-full h-full rounded-full flex flex-col justify-center items-center text-center bg-gray-900 hover:bg-gray-900/80 transition backdrop-blur-sm relative">
                  <div className="absolute -inset-2 border border-cyan-400/30 rounded-full"></div>
                  <div className="text-sm font-black leading-none mb-1">FREE</div>
                  <div className="text-xs font-semibold leading-none mb-0.5">6 MONTHS</div>
                  <div className="text-xs font-normal opacity-80 leading-none">PLAN</div>
                </div>
              </div>
              
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 p-0.5 rounded-full">
                <div className="w-full h-full rounded-full flex flex-col justify-center items-center text-center bg-gray-900 hover:bg-gray-900/80 transition backdrop-blur-sm relative">
                  <div className="absolute -inset-2 border border-cyan-400/30 rounded-full"></div>
                  <div className="text-sm font-black leading-none mb-1">ZERO</div>
                  <div className="text-xs font-semibold leading-none mb-0.5">CIGARETTES</div>
                  <div className="text-xs font-normal opacity-80 leading-none">THE GOAL</div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}
