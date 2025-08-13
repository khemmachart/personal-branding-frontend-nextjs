import sharp from 'sharp';

type OptimizeOptions = {
  buffer: Buffer;
  filename: string;
  width?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpeg' | 'png';
};

export async function optimizeImage({
  buffer,
  filename,
  width = 1920,
  quality = 70,
  format = 'auto',
}: OptimizeOptions): Promise<{
  optimizedBuffer: Buffer;
  mimeType: string;
  ext: string;
}> {
  const ext = filename.split('.').pop()?.toLowerCase();
  const image = sharp(buffer).resize({ width });

  let outputFormat: 'jpeg' | 'png' | 'webp' = 'webp'; // default fallback
  let mimeType = 'image/webp';

  if (format === 'auto') {
    if (ext === 'jpg' || ext === 'jpeg') {
      outputFormat = 'jpeg';
      mimeType = 'image/jpeg';
      image.jpeg({ quality });
    } else if (ext === 'png') {
      outputFormat = 'png';
      mimeType = 'image/png';
      image.png({ quality });
    } else {
      outputFormat = 'webp';
      image.webp({ quality });
    }
  } else {
    outputFormat = format;
    switch (format) {
      case 'jpeg':
        image.jpeg({ quality });
        mimeType = 'image/jpeg';
        break;
      case 'png':
        image.png({ quality });
        mimeType = 'image/png';
        break;
      case 'webp':
        image.webp({ quality });
        mimeType = 'image/webp';
        break;
    }
  }

  const optimizedBuffer = await image.toBuffer();

  return {
    optimizedBuffer,
    mimeType,
    ext: outputFormat,
  };
}

export async function optimizeForThumbnail(
  buffer: Buffer,
  filename: string
) {
  return optimizeImage({
    buffer,
    filename,
    width: 300,       // ขนาด thumbnail
    quality: 60,      // บีบอัดมากขึ้น
    format: 'webp',   // แนะนำใช้ webp เพื่อประหยัด
  });
}

export async function optimizeForLarge(
  buffer: Buffer,
  filename: string
) {
  return optimizeImage({
    buffer,
    filename,
    width: 1600,     // ใหญ่แต่ไม่เต็มต้นฉบับ
    quality: 75,
    format: 'webp',
  });
}

export async function optimizeOriginal(
  buffer: Buffer,
  filename: string
) {
  // Get original image dimensions
  const sharp = require('sharp');
  const metadata = await sharp(buffer).metadata();
  const originalWidth = metadata.width || 1920;
  
  return optimizeImage({
    buffer,
    filename,
    width: originalWidth,  // Use original width instead of fixed 1920
    quality: 100,          // คุณภาพสูง
    format: 'auto',        // ใช้ตามนามสกุลไฟล์เดิม
  });
}

export async function optimizeForWeb(
  buffer: Buffer,
  filename: string
) {
  return optimizeImage({
    buffer,
    filename,
    width: 1200,     // ขนาดที่เหมาะสมสำหรับเว็บ
    quality: 70,
    format: 'webp',  // ประหยัดแบนด์วิธ
  });
}

export async function optimizeForMobile(
  buffer: Buffer,
  filename: string
) {
  return optimizeImage({
    buffer,
    filename,
    width: 800,      // ขนาดที่เหมาะสมสำหรับมือถือ
    quality: 65,
    format: 'webp',
  });
} 