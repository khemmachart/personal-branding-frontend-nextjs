import React, { useState } from 'react';
import { Button, Upload, message, Card, Row, Col, Space, Typography, Divider, Progress } from 'antd';
import { UploadOutlined, PictureOutlined, DownloadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import imageCompression from 'browser-image-compression';
import { 
  uploadAndOptimizeImage, 
  ImageUploadResult, 
  formatFileSize, 
  calculateSizeSavings,
  showOptimizationSuccess,
  showOptimizationError
} from '../utils/imageUploadHelper';

const { Title, Text } = Typography;

const ImageUploadWithOptimization: React.FC<{ filePath: string }> = ({ filePath }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResults, setUploadResults] = useState<ImageUploadResult[]>([]);

  const compressImage = async (file: File): Promise<File> => {
    const image = new Image();
    image.src = URL.createObjectURL(file);
    const height = image.height;
    const width = image.width;
    const maxSize = Math.max(height, width, 1920);

    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: maxSize,
        useWebWorker: true,
    };

    try {
        message.info(`Compressing ${file.name}...`, 1);
        const compressedFile = await imageCompression(file, options);
        message.success(`Finished compressing ${file.name}.`, 1.5);
        return compressedFile;
    } catch (error) {
        console.error('Compression error:', error);
        throw error;
    }
  };

  const handleUpload = async (file: File, filePath: string) => {
    setUploadProgress(0);
    try {
      const compressedFile = await compressImage(file);
      
      await uploadAndOptimizeImage(compressedFile, filePath, {
        onProgress: (progress) => {
          setUploadProgress(progress);
        },
        onSuccess: (result) => {
          setUploadResults(prev => [...prev, { ...result, fileName: file.name }]);
          showOptimizationSuccess(result);
        },
        onError: (error) => {
          showOptimizationError(error);
        },
        maxFileSize: 5 * 1024 * 1024 // 5MB
      });
    } catch (error) {
      console.error(`Failed to process ${file.name}:`, error);
      showOptimizationError(`Failed for ${file.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleFileChange = (info: any) => {
    setFileList(info.fileList);
  };

  const handleUploadClick = async () => {
    if (fileList.length === 0) {
      message.warning('Please select a file first');
      return;
    }
    
    setLoading(true);
    setUploadResults([]);

    for (const file of fileList) {
      if (file.originFileObj) {
        await handleUpload(file.originFileObj, filePath);
      }
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Image Upload with Auto-Optimization</Title>
      <Text type="secondary">
        Upload an image to automatically generate thumbnail, original, and WebP versions
      </Text>
      
      <Card title="Upload Image" style={{ marginBottom: '24px', marginTop: '16px' }}>
        <Upload
          fileList={fileList}
          onChange={handleFileChange}
          beforeUpload={() => false} // Prevent auto upload
          accept="image/*"
          multiple={true}
        >
          <Button icon={<UploadOutlined />}>Select Image</Button>
        </Upload>
        
        {loading && (
          <div style={{ marginTop: '16px' }}>
            <Progress percent={uploadProgress} status="active" />
            <Text type="secondary">Processing and optimizing image...</Text>
          </div>
        )}
        
        <Button
          type="primary"
          icon={<PictureOutlined />}
          onClick={handleUploadClick}
          loading={loading}
          disabled={fileList.length === 0}
          style={{ marginTop: '16px' }}
        >
          Upload & Optimize
        </Button>
      </Card>

      {uploadResults.length > 0 && (
        <Card title="Optimization Results">
          {uploadResults.map((result, index) => (
             <div key={result.fileRecord.id || index} style={{ marginBottom: '24px', border: '1px solid #f0f0f0', padding: '16px', borderRadius: '4px' }}>
              <Title level={4} style={{ marginBottom: '16px' }}>Result for: {result.fileRecord.file_name}</Title>
              <Space direction="vertical" style={{ width: '100%' }}>
                {/* Summary Information */}
                <Card size="small" title="Summary" style={{ marginBottom: '16px' }}>
                  <Row gutter={16}>
                    <Col span={6}>
                      <Text strong>Original Size:</Text><br />
                      <Text>{formatFileSize(result.originalSize)}</Text>
                    </Col>
                    <Col span={6}>
                      <Text strong>Image ID:</Text><br />
                      <Text code>{result.fileRecord.id}</Text>
                    </Col>
                    <Col span={6}>
                      <Text strong>Total Optimized:</Text><br />
                      <Text>{formatFileSize(result.versions.thumbnail.size + result.versions.original.size + result.versions.webp.size)}</Text>
                    </Col>
                    <Col span={6}>
                      <Text strong>Total Savings:</Text><br />
                      <Text type="success">{calculateSizeSavings(result).formattedSavings} ({calculateSizeSavings(result).savingsPercentage}%)</Text>
                    </Col>
                  </Row>
                </Card>

                <Divider />

                {/* Thumbnail Version */}
                <Card size="small" title="Thumbnail Version" style={{ marginBottom: '16px' }}>
                  <Row gutter={16} align="middle">
                    <Col span={8}>
                      <img 
                        src={result.versions.thumbnail.url} 
                        alt="Thumbnail" 
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
                      />
                    </Col>
                    <Col span={16}>
                      <Space direction="vertical">
                        <div>
                          <Text strong>Size:</Text> {formatFileSize(result.versions.thumbnail.size)}
                        </div>
                        <div>
                          <Text strong>Compression:</Text> {result.optimizationInfo.thumbnail.compressionRatio}
                        </div>
                        <div>
                          <Text strong>Format:</Text> {result.versions.thumbnail.extension.toUpperCase()}
                        </div>
                        <div>
                          <Text strong>Dimensions:</Text> {result.optimizationInfo.thumbnail.dimensions}
                        </div>
                        <Button 
                          type="link" 
                          icon={<DownloadOutlined />}
                          onClick={() => window.open(result.versions.thumbnail.url, '_blank')}
                        >
                          Download
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </Card>

                {/* Original Version */}
                <Card size="small" title="Original Version" style={{ marginBottom: '16px' }}>
                  <Row gutter={16} align="middle">
                    <Col span={8}>
                      <img 
                        src={result.versions.original.url} 
                        alt="Original" 
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
                      />
                    </Col>
                    <Col span={16}>
                      <Space direction="vertical">
                        <div>
                          <Text strong>Size:</Text> {formatFileSize(result.versions.original.size)}
                        </div>
                        <div>
                          <Text strong>Compression:</Text> {result.optimizationInfo.original.compressionRatio}
                        </div>
                        <div>
                          <Text strong>Format:</Text> {result.versions.original.extension.toUpperCase()}
                        </div>
                        <div>
                          <Text strong>Dimensions:</Text> {result.optimizationInfo.original.dimensions}
                        </div>
                        <Button 
                          type="link" 
                          icon={<DownloadOutlined />}
                          onClick={() => window.open(result.versions.original.url, '_blank')}
                        >
                          Download
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </Card>

                {/* WebP Version */}
                <Card size="small" title="WebP Version (for Web Display)" style={{ marginBottom: '16px' }}>
                  <Row gutter={16} align="middle">
                    <Col span={8}>
                      <img 
                        src={result.versions.webp.url} 
                        alt="WebP" 
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
                      />
                    </Col>
                    <Col span={16}>
                      <Space direction="vertical">
                        <div>
                          <Text strong>Size:</Text> {formatFileSize(result.versions.webp.size)}
                        </div>
                        <div>
                          <Text strong>Compression:</Text> {result.optimizationInfo.webp.compressionRatio}
                        </div>
                        <div>
                          <Text strong>Format:</Text> {result.versions.webp.extension.toUpperCase()}
                        </div>
                        <div>
                          <Text strong>Dimensions:</Text> {result.optimizationInfo.webp.dimensions}
                        </div>
                        <Button 
                          type="link" 
                          icon={<DownloadOutlined />}
                          onClick={() => window.open(result.versions.webp.url, '_blank')}
                        >
                          Download
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </Card>
              </Space>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};

export default ImageUploadWithOptimization; 