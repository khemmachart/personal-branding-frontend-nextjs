/**
 * Custom scroll utilities to handle smooth scrolling with navbar offset
 */

export interface ScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

/**
 * Get the height of the sticky navbar
 */
export function getNavbarHeight(): number {
  const navbar = document.querySelector('header[data-navbar="true"]') as HTMLElement;
  if (navbar) {
    return navbar.offsetHeight;
  }
  
  // Fallback: estimate navbar height based on common patterns
  const menuElement = document.querySelector('nav, [role="navigation"], header') as HTMLElement;
  if (menuElement) {
    return menuElement.offsetHeight;
  }
  
  // Default fallback height
  return 80;
}

/**
 * Easing function for smooth animation
 */
export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Smooth scroll to element with navbar offset
 */
export function scrollToElement(
  target: string | HTMLElement,
  options: ScrollOptions = {}
): Promise<void> {
  return new Promise((resolve) => {
    const {
      offset = getNavbarHeight() + 20, // Add 20px extra padding
      duration = 800, // Slower, smoother animation
      easing = easeInOutCubic,
    } = options;

    const targetElement = typeof target === 'string' 
      ? document.querySelector(target) 
      : target;

    if (!targetElement) {
      console.warn(`Target element not found: ${target}`);
      resolve();
      return;
    }

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    function animation(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(animation);
  });
}

/**
 * Handle hash link navigation with smooth scrolling
 */
export function handleHashNavigation(hash: string, options?: ScrollOptions): void {
  // Remove the # from hash if present
  const targetId = hash.startsWith('#') ? hash.slice(1) : hash;
  
  if (!targetId) return;

  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    scrollToElement(targetElement, options);
  }
}

/**
 * Initialize hash link handling for the page
 */
export function initializeHashNavigation(options?: ScrollOptions): void {
  // Handle initial page load with hash
  if (window.location.hash) {
    // Wait for layout to settle
    setTimeout(() => {
      handleHashNavigation(window.location.hash, options);
    }, 100);
  }

  // Handle hash changes (browser back/forward or programmatic)
  window.addEventListener('hashchange', () => {
    if (window.location.hash) {
      handleHashNavigation(window.location.hash, options);
    }
  });

  // Handle click events on hash links
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a[href*="#"]') as HTMLAnchorElement;
    
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Check if it's a hash link to the same page
    const url = new URL(href, window.location.href);
    const isCurrentPage = url.pathname === window.location.pathname;
    const hasHash = url.hash;

    if (isCurrentPage && hasHash) {
      event.preventDefault();
      
      // Update URL without triggering default scroll
      history.pushState(null, '', href);
      
      // Custom smooth scroll
      handleHashNavigation(url.hash, options);
    }
  });
}

/**
 * Disable browser's default smooth scrolling
 */
export function disableDefaultSmoothScroll(): void {
  // Override CSS scroll-behavior
  const style = document.createElement('style');
  style.textContent = `
    html {
      scroll-behavior: auto !important;
    }
  `;
  document.head.appendChild(style);
}
