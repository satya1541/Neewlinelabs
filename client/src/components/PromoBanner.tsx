import { X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [, setLocation] = useLocation();

  if (!isVisible) return null;

  return (
    <div 
      className="relative w-full bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-600 mt-16 md:mt-20" 
      data-testid="promo-banner"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center justify-center gap-3 md:gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
              <span className="text-lg md:text-2xl font-bold text-white" data-testid="promo-banner-title">
                Limited Time Offer:
              </span>
            </div>
            
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg" data-testid="promo-banner-discount">
                UP TO 70% OFF
              </span>
              <div className="hidden md:block h-8 w-px bg-white/30"></div>
              <span className="text-sm md:text-base text-white/90" data-testid="promo-banner-dates">
                Nov 1 - Dec 31
              </span>
            </div>
            
            <Button 
              size="sm"
              className="bg-white text-purple-700 hover:bg-gray-100 font-bold px-6 md:px-8 shadow-xl"
              data-testid="button-claim-offer"
              onClick={() => setLocation('/claim-offer')}
            >
              Claim Now →
            </Button>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close banner"
            data-testid="button-close-banner"
          >
            <X className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
