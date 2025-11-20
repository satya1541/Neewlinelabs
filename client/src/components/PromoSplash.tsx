import { useEffect, useState } from "react";
import promoImage from '@assets/generated_images/Tech_sale_promotional_banner_2281fd03.png';

export default function PromoSplash() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const hasSeenPromo = sessionStorage.getItem('hasSeenPromo');
    
    if (hasSeenPromo) {
      setShouldRender(false);
      return;
    }

    setIsVisible(true);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('hasSeenPromo', 'true');
    }, 3000);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 3500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenPromo', 'true');
    setTimeout(() => {
      setShouldRender(false);
    }, 500);
  };

  if (!shouldRender) return null;

  return (
    <div
      onClick={handleClick}
      className={`fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      data-testid="promo-splash-overlay"
    >
      <div
        className={`relative w-full transform transition-all duration-500 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        data-testid="promo-splash-content"
      >
        <img
          src={promoImage}
          alt="Limited Time Offer - 70% OFF"
          className="w-full h-auto object-contain"
          data-testid="promo-splash-image"
        />
        <p className="text-center text-white/70 text-sm mt-4 absolute bottom-[-3rem] left-0 right-0" data-testid="promo-splash-hint">
          Click anywhere to continue
        </p>
      </div>
    </div>
  );
}
