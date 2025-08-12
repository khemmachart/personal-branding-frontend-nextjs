import type { NextApiRequest, NextApiResponse } from "next";
import { GetAllTargetAudiencesUseCase } from "libs/modules/backOffices/useCases/getAllTargetAudiencesUseCase";
import { PgTargetAudienceRepository } from "libs/modules/backOffices/repositories/targetAudienceRepository";
import { corsMiddleware } from "libs/middlewares/corsMiddleware";
import { errorHandlerMiddleware } from "libs/middlewares/errorHandlerMiddleware";
import connect from "next-connect";

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
  .get(getAllTargetAudiencesHandler);

async function getAllTargetAudiencesHandler(req: NextApiRequest, res: NextApiResponse) {
  const targetAudienceRepository = new PgTargetAudienceRepository();
  
  try {
    const getAllTargetAudiencesUseCase = new GetAllTargetAudiencesUseCase(targetAudienceRepository);
    const targetAudiences = await getAllTargetAudiencesUseCase.execute();
    
    const pageConfig: PageConfig = {
      title: "Target Audience (Journey Stage)",
      description: "ระบบจัดการ Target Audience ตาม Customer Journey Stage ทั้ง 5 ขั้นตอน",
      definition: "Target Audience (Journey Stage) คือการแบ่งกลุ่มผู้ชมตาม \"กลุ่มเป้าหมาย/ช่วงการตัดสินใจ\" หรือ \"ระดับความสัมพันธ์\" ที่เขามีกับแบรนด์ ณ ขณะนั้น เช่น เพิ่งรู้จัก, กำลังพิจารณา, พร้อมซื้อ, หรือเป็นลูกค้าที่ภักดี — เพื่อให้สามารถส่งเนื้อหาที่เหมาะกับสถานะของเขาได้แม่นยำมากขึ้น เช่น ยังไม่รู้จัก, เริ่มสนใจ, พร้อมซื้อ, ซื้อแล้ว, หรือพร้อมบอกต่อ — เพื่อให้ทีมเลือกทำคอนเทนต์ที่ตรงกับความต้องการของแต่ละกลุ่ม",
      responsibilities: [
        "ช่วยให้รู้ว่า \"ใครกำลังอ่านคอนเทนต์นี้\"",
        "กำหนดโทนของเนื้อหา ระดับข้อมูล และ CTA ให้เหมาะกับแต่ละกลุ่ม",
        "ทำให้สามารถสร้าง Content Journey ต่อเนื่อง เช่น Awareness → Consideration → Conversion",
        "ใช้ปรับแผนเนื้อหาให้กระจายครบทุกช่วงของ Funnel"
      ]
    };

    const response: ApiResponse = {
      data: targetAudiences,
      pageConfig
    };

    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400'); // 1 day browser cache, 1 day CDN cache, 1 day stale while revalidate
    res.setHeader('ETag', `"${Date.now()}"`); // Simple ETag for cache validation

    return res.status(200).json(response);
  } catch (error: any) {
    console.error('Error fetching target audiences:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
