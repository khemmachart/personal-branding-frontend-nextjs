import { useRouter } from 'next/router';
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

const menuItems = [
  { paths: ['/'], label: 'Khemmachart' },
  { paths: [
      '/profile'
    ],
    label: 'Information' },
  { paths: ['/experiences'], label: 'Experiences' },
];

export const Menu = () => {
  const router = useRouter();

  return (
    <MenuWrapper sticky background>
      <MenuContainer maxWidth="container">
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem 
              key={item.paths[0]} 
              active={item.paths.some(path => router.pathname === path)}
            >
              <Link href={item.paths[0]}>
                {item.label}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </MenuContainer>
    </MenuWrapper>
  );
};