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

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

const MenuItem = styled('li')<{ active?: boolean }>`
  a {
    color: ${props => props.active ? colors.darkGray : colors.graphite};
    text-decoration: none;
    font-weight: ${props => props.active ? typography.fontWeight.semiBold : typography.fontWeight.regular};
    font-size: ${typography.fontSize.body};
    transition: color ${transitions.normal};
    
    &:hover {
      color: ${colors.darkGray};
    }
  }
`;

interface MenuItem {
  paths: string[];
  label: string;
}

const menuItems: MenuItem[] = [
  { paths: ['/'], label: 'Khemmachart' },
  { paths: ['/profile'], label: 'Profile' },
  { paths: ['/services'], label: 'Services' },
  { paths: ['/services-personal'], label: 'Services Personal' },
  { paths: ['/characters'], label: 'Characters' },
  { paths: ['/companies'], label: 'Companies' },
];

export const Menu = () => {
  const pathname = usePathname();

  return (
    <MenuWrapper sticky background>
      <MenuContainer maxWidth="container">
        <MenuList>
          {menuItems.map((item) => {
            const href = item.paths[0];
            if (!href) return null;
            
            return (
              <MenuItem 
                key={href} 
                active={item.paths.some(path => pathname === path)}
              >
                <Link href={href}>
                  {item.label}
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </MenuContainer>
    </MenuWrapper>
  );
};