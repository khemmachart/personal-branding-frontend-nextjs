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
    label: 'Education and Certification',
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
  // Check if any of the item paths have a hash
  const hasHashPath = itemPaths.some(path => path.includes('#'));
  
  // If there's an active hash
  if (activeHash) {
    // For hash-based navigation items, check if the hash matches
    if (hasHashPath) {
      return itemPaths.some(path => {
        const [pathOnly, hash] = path.split('#');
        return currentPath === pathOnly && activeHash === hash;
      });
    }
    // For non-hash items (like Home), don't highlight when there's an active hash
    else {
      return false;
    }
  }
  
  // If no active hash, only highlight exact path matches (like Home when at top of page)
  return itemPaths.some(path => {
    // For hash paths, only match if we're at the base path with no hash
    if (path.includes('#')) {
      return false;
    }
    // For regular paths, check exact match
    return currentPath === path;
  });
};

// Helper function to get navigation item by path
export const getNavigationItemByPath = (path: string): NavigationItem | undefined => {
  return navigationItems.find(item => item.paths.includes(path));
};

// Helper function to get all navigation paths
export const getAllNavigationPaths = (): string[] => {
  return navigationItems.flatMap(item => item.paths);
};
