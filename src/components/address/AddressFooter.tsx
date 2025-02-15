
import React from 'react';
import { Button } from "@/components/ui/button";

interface AddressFooterProps {
  onBack?: () => void;
  onContinue: () => void;
  hideBack?: boolean;
  isEnabled?: boolean;
}

export const AddressFooter = ({ onBack, onContinue, hideBack, isEnabled }: AddressFooterProps) => {
  return (
    <footer className="border-t border-gray-200 py-4">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {!hideBack && (
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/724db77970f24a8fa58bdac1fccbfc40/3088113d385bec4808d969710b2d1f13b4a453c31e6e961a026aaecf24f42d05"
                alt="Back"
                className="w-4 h-4"
              />
              Back
            </Button>
          )}
          <div className={hideBack ? 'ml-auto' : ''}>
            <Button
              onClick={onContinue}
              disabled={!isEnabled}
              className={`flex items-center gap-2 ${
                isEnabled 
                  ? 'bg-[#00CED1] hover:bg-[#00CED1]/90 text-black' 
                  : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-50'
              }`}
            >
              Continue
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path 
                  d="M13.5 4.5L21 12L13.5 19.5M3 12H20.5" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  fill="none"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
