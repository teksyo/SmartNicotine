import {
  BrainCircuitIcon,
  MessageSquareIcon,
  TrendingDownIcon,
  AwardIcon,
  TrophyIcon,
  HeartPulseIcon,
} from "lucide-react";

export function AICoachPreview() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* David Haye Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">
            Meet Your AI Coach
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border rounded-3xl p-8 lg:p-12">
            {/* David Haye Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-2xl"></div>
                <img
                  src="https://assets.polymet.ai/awful-crimson-986843"
                  alt="David Haye - Former World Champion Boxer"
                  className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-2xl border-2 border-cyan-500/30 shadow-2xl"
                />

                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg">
                  DH - Founder
                </div>
              </div>
            </div>

            {/* David Haye Bio */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
                <TrophyIcon className="w-5 h-5 text-cyan-400" />

                <span className="text-sm font-semibold text-cyan-400">
                  Former World Champion
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                David Haye
              </h3>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Former world champion boxer and founder of SmartNicotine. David
                understands the mental and physical challenges of breaking
                habits and has channeled his championship mindset into creating
                an AI-powered solution to help you quit smoking.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <TrophyIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      World Champion
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Boxing Legend
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center">
                    <HeartPulseIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Health Advocate
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Wellness Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by advanced AI technology, your personal David Haye coach
            guides you every step of the way to a smoke-free life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="group p-8 rounded-2xl bg-card/50 border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BrainCircuitIcon className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Intelligent Guidance
            </h3>
            <p className="text-muted-foreground">
              AI-powered insights tailored to your smoking patterns and
              triggers, helping you make informed decisions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 rounded-2xl bg-card/50 border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquareIcon className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              24/7 Support
            </h3>
            <p className="text-muted-foreground">
              Your AI coach is always available when cravings hit, providing
              instant support and motivation.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 rounded-2xl bg-card/50 border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingDownIcon className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Track Progress
            </h3>
            <p className="text-muted-foreground">
              Monitor your journey with detailed analytics and celebrate
              milestones as you reduce cigarette consumption.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group p-8 rounded-2xl bg-card/50 border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <AwardIcon className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Proven Methods
            </h3>
            <p className="text-muted-foreground">
              Evidence-based techniques combined with AI personalization for
              maximum success in quitting smoking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
