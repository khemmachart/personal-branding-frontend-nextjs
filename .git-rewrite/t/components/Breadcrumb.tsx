import Link from 'next/link';
import React from 'react';

export interface BreadcrumbItem {
  label: string;
  path: string;
  prefix?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="breadcrumb" style={{ marginBottom: '24px' }}>
      <p>
        {items.map((item, index) => (
          <React.Fragment key={item.path}>
            {index > 0 && <span className="separator"> &gt; </span>}
            <Link href={item.path} legacyBehavior>
              <a className="breadcrumb-link">
                {item.prefix && <span className="prefix">{item.prefix}: </span>}
                {item.label}
              </a>
            </Link>
          </React.Fragment>
        ))}
      </p>

      <style jsx>{`
        .breadcrumb {
          font-size: 0.9rem;
          color: #666;
        }

        .separator {
          margin: 0 8px;
          color: #999;
        }

        .breadcrumb-link {
          color: #2196F3;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .breadcrumb-link:hover {
          color: #1976D2;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
} 