export function AssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 dark:from-blue-950/20 dark:via-green-950/20 dark:to-blue-950/20">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-8">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-primary to-green-600 dark:from-blue-400 dark:via-primary dark:to-green-400 bg-clip-text text-transparent">
                  Free Assessment
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Take the first step towards your smoke-free journey
              </p>
            </div>
            <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              This personalized assessment will help us understand your smoking patterns and create a tailored roadmap for your success. It takes just 5 minutes to complete.
            </p>
          </div>

          {/* Typeform Container */}
          <div className="bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full" style={{ height: '600px' }}>
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
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
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
            <p className="text-xs text-muted-foreground">
              Your responses are confidential and will only be used to create your personalized quit plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}