'use client'

import React from 'react';
import { scrollToElement } from '@/lib/scroll-utils';

interface ScrollTestButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollTestButton: React.FC<ScrollTestButtonProps> = ({
  targetId,
  children,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      scrollToElement(targetElement, {
        duration: 1000,
        // offset will be calculated automatically
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`scroll-test-button ${className}`}
      style={{
        padding: '8px 16px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.2s ease',
        ...({
          '&:hover': {
            backgroundColor: '#2563eb',
          }
        } as any)
      }}
    >
      {children}
    </button>
  );
};
