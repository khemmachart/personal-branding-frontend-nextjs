import type { NextApiRequest, NextApiResponse } from 'next';
import { errorHandlerMiddleware } from 'libs/middlewares/errorHandlerMiddleware';
import { corsMiddleware } from 'libs/middlewares/corsMiddleware';
import { PgContentThemeRepository } from 'libs/modules/backOffices/repositories/contentThemeRepository';
import connect from 'next-connect';

interface PageConfig {
  title: string;
  description: string;
  definition: string;
  responsibilities: string[];
}

interface ApiResponse {
  data: any[];
  pageConfig: PageConfig;
}

export default connect({ onError: errorHandlerMiddleware })
  .use(corsMiddleware)
  .get(getContentThemesHandler);

async function getContentThemesHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const repository = new PgContentThemeRepository();
    const contentThemes = await repository.getContentThemes();
    
    const pageConfig: PageConfig = {
      title: "Content Themes",
      description: "ระบบจัดการ Content Themes สำหรับการจัดหมวดหมู่เนื้อหา",
      definition: "Content Theme คือ \"หมวดหมู่เนื้อหา\" ที่ใช้เล่าเรื่องในโพสต์ เช่น เคล็ดลับ, รีวิวลูกค้า, โปรโมชัน, หรือเบื้องหลัง – เพื่อให้แบรนด์มีวิธีสื่อสารที่หลากหลายและจับใจกลุ่มเป้าหมาย ที่สะท้อนว่าสาระหลักของโพสต์นั้นคืออะไร",
      responsibilities: [
        "กำหนด \"กลิ่น\" และ \"มุมมอง\" ของแต่ละคอนเทนต์",
        "ช่วยทีมวางแผน Content Mix ให้สมดุล ทั้งสาระ อารมณ์ และเป้าหมายทางธุรกิจ",
        "ทำให้ทีมเล่าเรื่องเดิมได้หลายรูปแบบ ไม่ซ้ำซาก",
        "ช่วยให้การวาง Content Calendar มีความหลากหลายและมีธีมที่ชัดเจน"
      ]
    };

    const response: ApiResponse = {
      data: contentThemes,
      pageConfig
    };
    
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400'); // 1 day browser cache, 1 day CDN cache, 1 day stale while revalidate
    res.setHeader('ETag', `"${Date.now()}"`); // Simple ETag for cache validation

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching content themes:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch content themes',
      details: error instanceof Error ? error.message : String(error)
    });
  }
}
