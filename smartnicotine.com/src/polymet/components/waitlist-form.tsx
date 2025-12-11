import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2Icon, LoaderIcon, AlertCircleIcon } from "lucide-react";

export function WaitlistForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://smartnicotine-n0nv.onrender.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullName,
          email: email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 409) {
          setError("This email is already on our waitlist!");
        } else if (response.status === 400) {
          setError(data.error || "Please check your information and try again.");
        } else {
          setError("Something went wrong. Please try again later.");
        }
        setIsSubmitting(false);
        return;
      }

      // Success
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFullName("");
        setEmail("");
        setIsSubmitted(false);
      }, 3000);

    } catch (err) {
      console.error("Waitlist submission error:", err);
      setError("Unable to connect. Please check your internet and try again.");
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-black/40 border border-cyan-400/90 backdrop-blur-md">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-500/30 flex items-center justify-center">
            <CheckCircle2Icon className="w-8 h-8 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              You're on the list!
            </h3>
            <p className="text-gray-200">
              We'll notify you when SmartNicotine launches. Get ready to break
              free!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-black/30 border border-cyan-400/20 backdrop-blur-md">
      <div className="text-left mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Join the Waitlist
        </h2>
        <p className="text-gray-200">
          Be the first to know when we launch and get exclusive early access.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 flex items-start gap-3">
            <AlertCircleIcon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <p className="text-red-200 text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-white">
            Full Name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="John Smith"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (error) setError("");
            }}
            required
            className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400/50 focus:ring-cyan-400/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            required
            className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400/50 focus:ring-cyan-400/20"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-gradient-to-r from-cyan-400 to-emerald-500 hover:from-cyan-500 hover:to-emerald-600 text-white font-semibold text-base shadow-lg shadow-cyan-400/30"
        >
          {isSubmitting ? (
            <>
              <LoaderIcon className="w-5 h-5 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </Button>

        <p className="text-xs text-center text-gray-300">
          By joining, you agree to receive updates about SmartNicotine.
          Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
