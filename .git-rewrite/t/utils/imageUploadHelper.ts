import { message } from 'antd';
import { FileRecord } from 'libs/modules/cms/repositories/fileRepository';

export interface ImageUploadResult {
  success: boolean;
  fileRecord: FileRecord;
  versions: {
    thumbnail: {
      url: string;
      key: string;
      mimeType: string;
      extension: string;
      size: number;
    };
    original: {
      url: string;
      key: string;
      mimeType: string;
      extension: string;
      size: number;
    };
    webp: {
      url: string;
      key: string;
      mimeType: string;
      extension: string;
      size: number;
    };
  };
  originalSize: number;
  optimizationInfo: {
    thumbnail: {
      compressionRatio: string;
      dimensions: string;
    };
    original: {
      compressionRatio: string;
      dimensions: string;
    };
    webp: {
      compressionRatio: string;
      dimensions: string;
    };
  };
}

export interface UploadOptions {
  onProgress?: (progress: number) => void;
  onSuccess?: (result: ImageUploadResult) => void;
  onError?: (error: string) => void;
  maxFileSize?: number;
}

/**
 * Upload and auto-optimize an image with multiple versions
 * @param file - The image file to upload
 * @param path - The file path
 * @param options - Upload options including callbacks and max file size
 * @returns Promise<ImageUploadResult>
 */
export async function uploadAndOptimizeImage(
  file: File, 
  path: string,
  options: UploadOptions = {}
): Promise<ImageUploadResult> {
  const { onProgress, onSuccess, onError, maxFileSize } = options;

  // กำหนดค่าเริ่มต้นสำหรับขนาดไฟล์สูงสุด (10MB)
  const defaultMaxSize = 10 * 1024 * 1024; // 10MB
  const maxSize = maxFileSize || defaultMaxSize;
  const maxBase64Size = maxSize; // ใช้ขนาดเดียวกันสำหรับ base64

  try {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      throw new Error('File must be an image');
    }

    // Validate file size using parameter
    if (file.size > maxSize) {
      const maxSizeFormatted = formatFileSize(maxSize);
      throw new Error(`File size must be less than ${maxSizeFormatted}. Current size: ${formatFileSize(file.size)}`);
    }

    // Update progress
    onProgress?.(Math.floor(Math.random() * (60 - 20 + 1)) + 20); // Random progress between 20% and 60%

    // Convert file to base64 with size check
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Buffer = buffer.toString('base64');

    // Check base64 size using parameter
    if (base64Buffer.length > maxBase64Size) {
      const maxBase64SizeFormatted = formatFileSize(maxBase64Size);
      throw new Error(`File too large when encoded. Please use a smaller image. Encoded size: ${formatFileSize(base64Buffer.length)}, Max allowed: ${maxBase64SizeFormatted}`);
    }

    onProgress?.(Math.floor(Math.random() * (80 - 30 + 1)) + 30); // Random progress between 30% and 80%

    // Call the optimization API
    const response = await fetch('/api/cms/v1/files/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filePath: path,
        fileName: file.name,
        fileType: file.type,
        fileBuffer: base64Buffer,
      }),
    });

    onProgress?.(100); // Set progress to 100%

    if (!response.ok) {
      let errorMessage = `Server error: ${response.status} ${response.statusText}`;
      
      try {
        // Read response as text first
        const responseText = await response.text();
        
        // Try to parse as JSON
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = errorData.error || errorMessage;
        } catch (jsonError) {
          // If not JSON, check for specific error patterns in text
          if (responseText.includes('Body exceeded') || responseText.includes('too large')) {
            const maxSizeFormatted = formatFileSize(maxSize);
            errorMessage = `File too large. Please use an image smaller than ${maxSizeFormatted}.`;
          } else {
            errorMessage = responseText || errorMessage;
          }
        }
      } catch (textError) {
        // If we can't even read the text, use the default error message
        console.error('Failed to read response:', textError);
      }
      
      throw new Error(errorMessage);
    }

    const result: ImageUploadResult = await response.json();
    
    setTimeout(() => {
      onSuccess?.(result);
    }, 1000); // 1000ms delay for smoother progress updates
    
    return result;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Upload failed';
    onError?.(errorMessage);
    throw error;
  }
}

/**
 * Get the appropriate image URL based on use case
 * @param result - The upload result
 * @param useCase - The intended use case
 * @returns string - The appropriate image URL
 */
export function getImageUrlForUseCase(
  result: ImageUploadResult, 
  useCase: 'thumbnail' | 'original' | 'webp'
): string {
  return result.versions[useCase].url;
}

/**
 * Get image metadata for a specific version
 * @param result - The upload result
 * @param version - The image version
 * @returns object - Image metadata
 */
export function getImageMetadata(
  result: ImageUploadResult, 
  version: 'thumbnail' | 'original' | 'webp'
) {
  return {
    url: result.versions[version].url,
    size: result.versions[version].size,
    mimeType: result.versions[version].mimeType,
    extension: result.versions[version].extension,
    compressionRatio: result.optimizationInfo[version].compressionRatio,
    dimensions: result.optimizationInfo[version].dimensions,
  };
}

/**
 * Format file size in human-readable format
 * @param bytes - File size in bytes
 * @returns string - Formatted file size
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Calculate total size savings from optimization
 * @param result - The upload result
 * @returns object - Size savings information
 */
export function calculateSizeSavings(result: ImageUploadResult) {
  const totalOptimizedSize = 
    result.versions.thumbnail.size + 
    result.versions.original.size + 
    result.versions.webp.size;
  
  const totalSavings = result.originalSize - totalOptimizedSize;
  const savingsPercentage = (totalSavings / result.originalSize) * 100;

  return {
    originalSize: result.originalSize,
    totalOptimizedSize,
    totalSavings,
    savingsPercentage: savingsPercentage.toFixed(1),
    formattedOriginalSize: formatFileSize(result.originalSize),
    formattedOptimizedSize: formatFileSize(totalOptimizedSize),
    formattedSavings: formatFileSize(totalSavings),
  };
}

/**
 * Validate image file before upload
 * @param file - The file to validate
 * @param maxFileSize - Maximum file size in bytes (optional)
 * @returns object - Validation result
 */
export function validateImageFile(
  file: File, 
  maxFileSize?: number
): { isValid: boolean; error?: string } {
  // Check file type
  if (!file.type.startsWith('image/')) {
    return { isValid: false, error: 'File must be an image' };
  }

  // Check file size using parameter or default
  const defaultMaxSize = 7 * 1024 * 1024; // 7MB default
  const maxSize = maxFileSize || defaultMaxSize;
  
  if (file.size > maxSize) {
    const maxSizeFormatted = formatFileSize(maxSize);
    return { 
      isValid: false, 
      error: `File size must be less than ${maxSizeFormatted}. Current size: ${formatFileSize(file.size)}` 
    };
  }

  // Check file extension
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'tiff'];
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (!extension || !allowedExtensions.includes(extension)) {
    return { isValid: false, error: 'Unsupported file format' };
  }

  return { isValid: true };
}

/**
 * Show success message with optimization details
 * @param result - The upload result
 */
export function showOptimizationSuccess(result: ImageUploadResult) {
  const savings = calculateSizeSavings(result);
  
  message.success(
    `Image optimized successfully! Saved ${savings.formattedSavings} (${savings.savingsPercentage}%)`,
    5
  );
}

/**
 * Show error message
 * @param error - The error message
 */
export function showOptimizationError(error: string) {
  message.error(`Optimization failed: ${error}`);
} 