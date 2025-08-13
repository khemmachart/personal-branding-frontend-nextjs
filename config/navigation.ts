export interface NavigationItem {
  paths: string[];
  label: string;
  description?: string;
  external?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { 
    paths: ['/'], 
    label: 'Khemmachart',
    description: 'Home page - Personal brand and character overview'
  },
  { 
    paths: ['/profile'], 
    label: 'Profile',
    description: 'About me and background information'
  },
  { 
    paths: ['/experience'], 
    label: 'Experience',
    description: 'Work experience and career timeline'
  },
  // { 
  //   paths: ['/services'], 
  //   label: 'Services',
  //   description: 'Professional services offered'
  // },
  // { 
  //   paths: ['/services-personal'], 
  //   label: 'Services Personal',
  //   description: 'Personal consulting and advisory services'
  // },
  { 
    paths: ['blog.khemmachart.dev'], 
    label: 'Blog',
    description: 'Blog and articles'
  },
  { 
    paths: ['/contact'], 
    label: 'Contact',
    description: 'Contact me'
  },
  // { 
  //   paths: ['/companies'], 
  //   label: 'Companies',
  //   description: 'Companies and organizations worked with'
  // },
];

// Helper function to check if a path is active
export const isPathActive = (itemPaths: string[], currentPath: string): boolean => {
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
