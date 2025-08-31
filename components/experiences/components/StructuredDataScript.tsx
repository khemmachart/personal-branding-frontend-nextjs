'use client'

import React from 'react'

// Characters data for structured data
const characters = [
  {
    keyword: 'Bits',
    category: 'เทคโนโลยี',
    description: 'สายคอม, โปรแกรมเมอร์, ไอที',
  },
  {
    keyword: 'Brew',
    category: 'ไลฟ์สไตล์',
    description: 'กาแฟ, ความละมุน, ความชิล',
  },
  {
    keyword: 'Beer',
    category: 'ไลฟ์สไตล์',
    description: 'สังสรรค์, ความเป็นกันเอง',
  },
  {
    keyword: 'Build',
    category: 'ฟิตเนส / เกม',
    description: 'การสร้างร่างกาย, พัฒนาตัวเอง, วางแผนในเกม',
  },
  {
    keyword: 'Bokeh',
    category: 'การถ่ายภาพ',
    description: 'ภาพละลายหลัง, ความอาร์ต',
  },
  {
    keyword: 'Blazer',
    category: 'แฟชั่น',
    description: 'สายแต่งตัวเนี้ยบ, Sartorial',
  },
  {
    keyword: 'Bunny',
    category: 'สัตว์เลี้ยง',
    description: 'ด้านน่ารัก, ความอ่อนโยน, ความละมุน',
  },
  {
    keyword: 'Battle',
    category: 'เกม',
    description: 'การต่อสู้, ความท้าทาย, การแข่งขัน',
  },
  {
    keyword: 'Beat',
    category: 'ดนตรี',
    description: 'จังหวะ, vibe, การเคลื่อนไหว, ความรู้สึกดนตรี',
  },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Khemmachart Chutapetch",
  "alternateName": ["Kao", "Khemmachart"],
  "description": "Developer, Designer & Creator with diverse interests in technology, lifestyle, photography, fashion, gaming, fitness, and music",
  "url": "https://khemmachart.dev",
  "email": "k.chutapetch+career@gmail.com",
  "nationality": "Thai",
  "knowsAbout": characters.map(char => ({
    "@type": "Thing",
    "name": char.keyword,
    "description": char.description,
    "category": char.category
  })),
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "Product Software Engineer"
    },
    {
      "@type": "Occupation", 
      "name": "UI/UX Designer"
    },
    {
      "@type": "Occupation",
      "name": "Creative Consultant"
    }
  ],
  "interest": characters.map(char => char.category).filter((value, index, self) => self.indexOf(value) === index),
  "sameAs": [
    "https://github.com/khemmachart",
    "https://linkedin.com/in/khemmachart",
    "https://twitter.com/khemmachart"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Khemmachart",
    "description": "Personal brand representing diverse creativity and technical expertise"
  }
}

const StructuredDataScript = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

export default StructuredDataScript
