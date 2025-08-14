'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';
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
      font-size: ${typography.fontSize.caption};
    }
  }
`;

// Menu items are now imported from centralized navigation config

export const Menu = () => {
  const pathname = usePathname();

  return (
    <MenuWrapper $sticky $background data-navbar="true">
      <MenuContainer $maxWidth="container">
        <MenuList>
          {navigationItems.map((item) => {
            const href = item.paths[0];
            if (!href) return null;
            
            return (
              <MenuItem 
                key={href} 
                $active={isPathActive(item.paths, pathname)}
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