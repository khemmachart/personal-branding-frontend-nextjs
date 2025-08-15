'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { 
  Header, 
  Container,
  colors, 
  spacing, 
  typography, 
  transitions,
  breakpoints 
} from './design-system';
import { navigationItems, isPathActive } from '@/config/navigation';

// Remove sticky positioning from MenuWrapper since Header component will handle it
const MenuWrapper = styled(Header)`
  background: ${colors.ivoryWhite};
  padding: 0;
`;

const MenuContainer = styled(Container)`
  padding: ${spacing.lg} ${spacing.containerPadding};
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: ${spacing.lg};
  justify-content: center;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Enable smooth scrolling */
  scroll-behavior: smooth;
  
  /* Add padding to prevent items from touching edges during scroll */
  padding: 0 ${spacing.md};
  margin: 0 -${spacing.md};
  
  /* Responsive behavior */
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: flex-start;
    padding: 0 ${spacing.lg};
    margin: 0 -${spacing.lg};
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    gap: ${spacing.md};
    padding: 0 ${spacing.md};
    margin: 0 -${spacing.md};
  }
`;

const MenuItem = styled('li')<{ $active?: boolean }>`
  /* Prevent items from shrinking */
  flex-shrink: 0;
  white-space: nowrap;
  
  a {
    color: ${props => props.$active ? colors.darkGray : colors.graphite};
    text-decoration: none;
    font-weight: ${props => props.$active ? typography.fontWeight.semiBold : typography.fontWeight.regular};
    font-size: ${typography.fontSize.body};
    transition: color ${transitions.normal};
    display: block;
    outline: none; /* Remove blue outline in Chrome */
    
    &:hover {
      color: ${colors.darkGray};
    }
    
    &:focus {
      outline: none; /* Remove focus outline */
    }
  }
  
  /* Add responsive font sizing for better mobile experience */
  @media (max-width: ${breakpoints.mobile}) {
    a {
      font-size: ${props => props.$active ? typography.fontSize.body : typography.fontSize.small};
      transition: font-size ${transitions.normal};
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    a {
      font-size: ${props => props.$active ? typography.fontSize.body : typography.fontSize.caption};
      transition: font-size ${transitions.normal};
    }
  }
`;

// Menu items are now imported from centralized navigation config

export const Menu = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>('');
  const menuListRef = useRef<HTMLUListElement>(null);

  // Function to scroll active menu item to center
  const scrollToActiveItem = () => {
    if (!menuListRef.current) return;

    const menuList = menuListRef.current;
    const activeItem = menuList.querySelector('[data-active="true"]') as HTMLElement;
    
    if (!activeItem) return;

    const menuListRect = menuList.getBoundingClientRect();
    const activeItemRect = activeItem.getBoundingClientRect();
    
    // Calculate the position to center the active item
    const menuListCenter = menuListRect.width / 2;
    const activeItemCenter = activeItemRect.left - menuListRect.left + activeItemRect.width / 2;
    const scrollDistance = activeItemCenter - menuListCenter;
    
    // Scroll to center the active item
    menuList.scrollBy({
      left: scrollDistance,
      behavior: 'smooth'
    });
  };

  // Effect to scroll to active item when it changes
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToActiveItem();
    }, 100); // Small delay to ensure DOM is updated
    
    return () => clearTimeout(timer);
  }, [pathname, activeHash]);

  useEffect(() => {
    // Function to update active hash based on scroll position
    const updateActiveHash = () => {
      // Get all sections with IDs that match navigation items
      const sections = navigationItems
        .filter(item => item.paths[0]?.includes('#'))
        .map(item => {
          const path = item.paths[0];
          if (!path) return null;
          const hash = path.split('#')[1];
          if (!hash) return null;
          return {
            hash,
            element: document.getElementById(hash)
          };
        })
        .filter((section): section is NonNullable<typeof section> => section !== null)
        .filter(section => section.element);

      // Find the section currently in view
      let currentSection = '';
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if we're at the very top of the page (before any section)
      const firstSection = sections[0];
      if (firstSection && firstSection.element) {
        const firstSectionTop = firstSection.element.getBoundingClientRect().top + scrollY;
        // If we're above the first section (in hero area), no hash should be active
        if (scrollY < firstSectionTop - windowHeight / 3) {
          setActiveHash('');
          return;
        }
      }
      
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementHeight = rect.height;
          
          // Check if section is in viewport (with some offset for better UX)
          if (scrollY >= elementTop - windowHeight / 3 && 
              scrollY < elementTop + elementHeight - windowHeight / 3) {
            currentSection = section.hash;
            break;
          }
        }
      }
      
      setActiveHash(currentSection);
    };

    // Set initial active hash from URL
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      setActiveHash(hash);
    }

    // Add scroll listener
    window.addEventListener('scroll', updateActiveHash, { passive: true });
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      setActiveHash(hash);
    });

    // Call once to set initial state
    updateActiveHash();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateActiveHash);
      window.removeEventListener('hashchange', updateActiveHash);
    };
  }, [pathname]);

  return (
    <MenuWrapper $sticky $background data-navbar="true">
      <MenuContainer $maxWidth="container">
        <MenuList ref={menuListRef}>
          {navigationItems.map((item) => {
            const href = item.paths[0];
            if (!href) return null;
            
            const isActive = isPathActive(item.paths, pathname, activeHash);
            
            return (
              <MenuItem 
                key={href} 
                $active={isActive}
                data-active={isActive}
              >
                {item.external ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link href={href}>
                    {item.label}
                  </Link>
                )}
              </MenuItem>
            );
          })}
        </MenuList>
      </MenuContainer>
    </MenuWrapper>
  );
};