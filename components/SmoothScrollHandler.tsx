'use client'

import { useEffect } from 'react';
import { 
  initializeHashNavigation, 
  disableDefaultSmoothScroll,
  type ScrollOptions 
} from '@/lib/scroll-utils';

interface SmoothScrollHandlerProps {
  /**
   * Additional offset from navbar (default: 20px)
   */
  extraOffset?: number;
  /**
   * Animation duration in milliseconds (default: 800ms)
   */
  duration?: number;
  /**
   * Whether to disable browser's default smooth scroll (default: true)
   */
  disableDefault?: boolean;
}

export const SmoothScrollHandler: React.FC<SmoothScrollHandlerProps> = ({
  extraOffset = 20,
  duration = 800,
  disableDefault = true,
}) => {
  useEffect(() => {
    // Disable browser's default smooth scrolling
    if (disableDefault) {
      disableDefaultSmoothScroll();
    }

    // Calculate offset dynamically
    const getOffset = () => {
      const navbar = document.querySelector('header[data-navbar="true"]') as HTMLElement;
      const navbarHeight = navbar?.offsetHeight || 80;
      return navbarHeight + extraOffset;
    };

    // Initialize custom hash navigation with dynamic offset
    const scrollOptions: ScrollOptions = {
      duration,
      get offset() {
        return getOffset();
      },
    };

    initializeHashNavigation(scrollOptions);

    // Cleanup function
    return () => {
      // Remove event listeners if needed
      // The scroll utils handle their own cleanup
    };
  }, [extraOffset, duration, disableDefault]);

  // This component doesn't render anything, it just handles scroll behavior
  return null;
};
