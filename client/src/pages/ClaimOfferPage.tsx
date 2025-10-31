import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function ClaimOfferPage() {
  const GOOGLE_FORM_EMBED = "https://docs.google.com/forms/d/e/1FAIpQLSfBdvPrGaIDZ9Jxzz_YzQMEzAjBKKcNPkqHrPVpZSzToRMIgg/viewform?embedded=true";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full my-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 text-white hover:text-purple-400" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <Card className="bg-slate-900/80 border-purple-500/20 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 pointer-events-none" />
          
          <CardHeader className="text-center space-y-6 pb-8 relative">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full">
                  <p className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <Sparkles className="h-6 w-6 md:h-8 md:w-8" />
                    UP TO 70% OFF
                    <Sparkles className="h-6 w-6 md:h-8 md:w-8" />
                  </p>
                </div>
              </div>
            </div>

            <CardTitle className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Claim Your Exclusive Offer
            </CardTitle>
            
            <CardDescription className="text-lg md:text-xl text-gray-300">
              Limited time offer valid from Nov 1 - Dec 31
            </CardDescription>
          </CardHeader>

          <CardContent className="relative p-0">
            <div className="w-full h-[1200px] overflow-hidden rounded-b-lg">
              <iframe
                src={GOOGLE_FORM_EMBED}
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="Claim Your Offer Form"
                data-testid="google-form-iframe"
              >
                Loading…
              </iframe>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Questions? <Link href="/#contact"><span className="text-purple-400 hover:text-purple-300 cursor-pointer">Contact us</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
