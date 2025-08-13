import type { NextApiRequest, NextApiResponse } from 'next';
import { errorHandlerMiddleware } from 'libs/middlewares/errorHandlerMiddleware';
import { corsMiddleware } from 'libs/middlewares/corsMiddleware';
import { PgContentPurposeRepository } from 'libs/modules/backOffices/repositories/contentPurposeRepository';
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
  .get(getContentPurposesHandler);

async function getContentPurposesHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const repository = new PgContentPurposeRepository();
    const contentPurposes = await repository.getContentPurposes();
    
    const pageConfig: PageConfig = {
      title: "Content Purpose",
      description: "ระบบจัดการ Content Purpose สำหรับกำหนดเป้าหมายหลักของเนื้อหา",
      definition: "Content Purpose คือ \"เป้าหมายหลัก\" ในเชิงกลยุทธ์ ที่เนื้อหานั้นสร้างขึ้นมาเพื่อบรรลุ เช่น ให้คนรู้จักแบรนด์, ให้ความรู้, ชวนคนมีส่วนร่วม, หรือกระตุ้นให้ซื้อ — เพื่อให้ทีมสร้างคอนเทนต์ตรงจุด ไม่หลงเป้าหมาย ว่าถูกสร้างขึ้นเพื่อ \"ทำหน้าที่อะไร\" ในกระบวนการสื่อสารกับผู้ชม เช่น ให้ความรู้, สร้างการมีส่วนร่วม, กระตุ้นการซื้อ หรือสร้างความเชื่อมั่นในแบรนด์",
      responsibilities: [
        "เป็นเข็มทิศให้ทีมรู้ว่าโพสต์นี้ต้อง \"ส่งผลลัพธ์\" อะไร",
        "ช่วยกำหนด แนวทางการเล่า, ระดับข้อมูล, CTA และ วัดผลลัพธ์ได้ชัดเจน",
        "ใช้เพื่อวาง Content Mix ในแผนงาน เช่น สัปดาห์นี้เราควรมี Awareness 30% + Conversion 20% ฯลฯ",
        "ทำให้คอนเทนต์ไม่หลุดจุดประสงค์ของแบรนด์"
      ]
    };

    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400'); // 1 day browser cache, 1 day CDN cache, 1 day stale while revalidate
    res.setHeader('ETag', `"${Date.now()}"`); // Simple ETag for cache validation

    const response: ApiResponse = {
      data: contentPurposes,
      pageConfig
    };
    
    return res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching content purposes:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch content purposes',
      details: error instanceof Error ? error.message : String(error)
    });
  }
}
