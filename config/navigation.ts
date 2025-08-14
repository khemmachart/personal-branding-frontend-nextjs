export interface NavigationItem {
  paths: string[];
  label: string;
  description?: string;
  external?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { 
    paths: ['/'], 
    label: 'Home',
    description: 'Home page - Personal brand, 9 keywords, and complete profile'
  },
  { 
    paths: ['/#contact'], 
    label: 'Contact',
    description: 'Contact information and ways to reach out'
  },
  {
    paths: ['/#experience'], 
    label: 'Experience',
    description: 'Professional work experience and career timeline'
  },
  {
    paths: ['/#entrepreneurship'], 
    label: 'Entrepreneurship',
    description: 'Own products, business ventures and entrepreneurship'
  },
  {
    paths: ['/#independent-projects'], 
    label: 'Independent Projects',
    description: 'Part-time projects, freelance work and side hustles'
  },
  {
    paths: ['/#education'],
    label: 'Education',
    description: 'Education background and certifications'
  },
  {
    paths: ['/#skills'],
    label: 'Skills',
    description: 'Technical skills and competencies'
  },
  { 
    paths: ['https://blog.khemmachart.dev'], 
    label: 'Blog',
    description: 'Blog and articles',
    external: true
  },
];

// Helper function to check if a path is active
export const isPathActive = (itemPaths: string[], currentPath: string, activeHash?: string): boolean => {
  // For hash-based navigation, check if the hash matches
  if (activeHash && itemPaths.some(path => path.includes('#'))) {
    return itemPaths.some(path => {
      const [pathOnly, hash] = path.split('#');
      return currentPath === pathOnly && activeHash === hash;
    });
  }
  
  // For regular paths, check exact match
  return itemPaths.some(path => currentPath === path);
};

// Helper function to get navigation item by path
export const getNavigationItemByPath = (path: string): NavigationItem | undefined => {
  return navigationItems.find(item => item.paths.includes(path));
};

// Helper function to get all navigation paths
export const getAllNavigationPaths = (): string[] => {
  return navigationItems.flatMap(item => item.paths);
};
