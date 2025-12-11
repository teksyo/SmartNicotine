export function AssessmentPage() {
  return (
    <div className="min-h-screen relative" style={{
      backgroundImage: 'linear-gradient(rgba(26, 26, 46, 0.85), rgba(15, 52, 96, 0.85)), url("/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full lg:max-w-[1200px] mx-auto">
          {/*<div className="text-center space-y-6 mb-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-10">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Free Assessment
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium" style={{ color: '#ffffff' }}>
                Take the first step towards your smoke-free journey
              </p>
            </div>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
              This personalized assessment will help us understand your smoking patterns and create a tailored roadmap for your success. It takes just 5 minutes to complete.
            </p>
          </div> */}

          {/* Typeform Container */}
          <div className="backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg" style={{ 
            backgroundColor: 'rgba(26, 26, 46, 0.8)', 
            border: '1px solid rgba(64, 224, 208, 0.3)' 
          }}>
            <div className="w-full h-[84vh] min-[400px]:h-[86vh]" >
              <iframe
                src="https://form.typeform.com/to/DhUzA1Mm"
                className="w-full h-full border-0"
                title="Smart Nicotine Assessment"
                allow="camera; microphone; autoplay; encrypted-media; fullscreen"
              />
            </div>
          </div>

          {/* Footer Information */}
          <div className="mt-8 text-center space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm" style={{ color: '#ffffff' }}>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                100% Free
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                No Credit Card Required
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Science-Backed
              </span>
            </div>
            <p className="text-xs" style={{ color: '#ffffff' }}>
              Your responses are confidential and will only be used to create your personalized quit plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}