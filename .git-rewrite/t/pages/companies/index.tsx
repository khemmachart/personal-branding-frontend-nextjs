import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { 
  Form, 
  Input, 
  Button, 
  Upload, 
  DatePicker, 
  Switch, 
  Select, 
  Checkbox, 
  Card,
  Row,
  Col,
  Typography,
  message,
  Space
} from 'antd';
import { UploadOutlined, CalendarOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  padding: 0;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #1a202c;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const SubHeader = styled.p`
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const FormCard = styled(Card)`
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: #ffffff;

  .ant-card-head {
    border-bottom: 1px solid #e2e8f0;
    padding: 1.5rem 2rem;
    background: #ffffff;
    border-radius: 12px 12px 0 0;

    .ant-card-head-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1a202c;
    }
  }

  .ant-card-body {
    padding: 2rem;
  }
`;

const FormSection = styled.div`
  margin-bottom: 1.5rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
`;

const RequiredLabel = styled.span`
  color: #dc2626;
  margin-left: 4px;
`;

const FormLabel = styled.label`
  color: #374151;
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  display: block;
`;

interface CompanyFormData {
  companyName: string;
  address: string;
  taxId: string;
  logo: UploadFile[];
  contactNumber: string;
  email: string;
  activeDate: any;
  expiryDate: any;
  noExpiryDate: boolean;
  timezone: string;
  isActive: boolean;
}

const CreateCompanyPage: NextPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [logoFileList, setLogoFileList] = useState<UploadFile[]>([]);
  const [noExpiryDate, setNoExpiryDate] = useState(false);

  // Mock function to check if Tax ID already exists
  const checkTaxIdExists = async (taxId: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    // Mock: return true if taxId is "1234567890123" (for testing)
    return taxId === '1234567890123';
  };

  // TODO: Create function to check if company name already exists
  

  const handleSubmit = async (values: CompanyFormData) => {
    setLoading(true);
    
    try {
      // Check if Tax ID already exists
      const taxIdExists = await checkTaxIdExists(values.taxId);
      
      if (taxIdExists) {
        message.error('เลขนิติบุคคลนี้ถูกใช้งานเเล้ว โปรดตรวจสอบอีกครั้ง / This TaxID has already been used. Please check again');
        setLoading(false);
        return;
      }

      // Create company data
      const companyData = {
        ...values,
        logo: logoFileList,
        timezone: values.timezone || '(UTC+7:00) Western Indo...',
        createdDate: new Date().toISOString(),
        status: 'active'
      };
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      message.success('Company created successfully!');
      
      // Optional: Navigate to account creation or company list
      // router.push('/companies');
      
    } catch (error) {
      message.error('Failed to create company. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = async () => {
    const values = form.getFieldsValue();
    
    const draftData = {
      ...values,
      logo: logoFileList,
      timezone: values.timezone || '(UTC+7:00) Western Indo...',
      createdDate: new Date().toISOString(),
      status: 'draft'
    };
    
    // Simulate API call
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setLoading(false);
    
    message.success('Draft saved successfully!');
  };

  const handleCancel = () => {
    // Navigate back or close modal
    // router.push('/companies');
    message.info('Operation cancelled');
  };

  const handleLogoUpload = (info: any) => {
    setLogoFileList(info.fileList);
  };

  const beforeLogoUpload = (file: File) => {
    const isImage = file.type.startsWith('image/');
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isImage) {
      message.error('You can only upload image files!');
      return false;
    }
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      return false;
    }
    return false; // Prevent auto upload
  };

  return (
    <>
      <Head>
        <title>Create Company - Note Taking App</title>
        <meta name="description" content="Create new company information" />
      </Head>
      
      <PageContainer>
        <MainContent>
          <Header>Companies</Header>
          <SubHeader>Create new companies and set up details.</SubHeader>

          <FormCard 
            title="Company information"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
          >
            <Row gutter={24}>
              <Col span={24}>
                <FormSection>
                  <Form.Item
                    label={
                      <span>
                        Logo image
                        <RequiredLabel>*</RequiredLabel>
                      </span>
                    }
                  >
                    <div style={{ marginBottom: '0.5rem' }}>
                      <Text type="secondary" style={{ fontSize: '0.875rem' }}>
                        Upload a JPG or PNG file smaller than 2 MB.<br/>
                        Recommended size: 300 x 300.
                      </Text>
                    </div>
                    <Upload
                      listType="picture"
                      fileList={logoFileList}
                      onChange={handleLogoUpload}
                      beforeUpload={beforeLogoUpload}
                      accept="image/*"
                      maxCount={1}
                    >
                      <Button 
                        icon={<UploadOutlined />}
                        style={{ 
                          borderRadius: '8px',
                          border: '1px solid #d1d5db',
                          background: '#f9fafb',
                          color: '#374151',
                          height: '40px',
                          fontWeight: '500'
                        }}
                      >
                        Upload a logo
                      </Button>
                    </Upload>
                  </Form.Item>
                </FormSection>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <FormSection>
                  <Form.Item
                    name="companyName"
                    label={
                      <span>
                        Company name
                        <RequiredLabel>*</RequiredLabel>
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Please enter company name' }
                    ]}
                  >
                    <Input 
                      placeholder="Enter company name"
                      style={{ 
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        height: '40px',
                        fontSize: '14px'
                      }}
                    />
                  </Form.Item>
                </FormSection>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <FormSection>
                  <Form.Item
                    name="activeDate"
                    label="Active date"
                  >
                    <DatePicker
                      placeholder="Enter start date"
                      style={{ 
                        width: '100%', 
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        height: '40px'
                      }}
                      suffixIcon={<CalendarOutlined />}
                    />
                  </Form.Item>
                </FormSection>
              </Col>
              <Col span={12}>
                <FormSection>
                  <Form.Item
                    label="Expiry date"
                  >
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Form.Item
                        name="expiryDate"
                        style={{ marginBottom: 0 }}
                      >
                        <DatePicker
                          placeholder="Enter expiry date"
                          style={{ 
                            width: '100%', 
                            borderRadius: '8px',
                            border: '1px solid #d1d5db',
                            height: '40px'
                          }}
                          suffixIcon={<CalendarOutlined />}
                          disabled={noExpiryDate}
                        />
                      </Form.Item>
                      <Checkbox
                        checked={noExpiryDate}
                        onChange={(e) => {
                          setNoExpiryDate(e.target.checked);
                          if (e.target.checked) {
                            form.setFieldsValue({ expiryDate: null });
                          }
                        }}
                      >
                        No expiry date
                      </Checkbox>
                    </Space>
                  </Form.Item>
                </FormSection>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <FormSection>
                  <Form.Item
                    name="contactNumber"
                    label="Contact number"
                  >
                    <Input 
                      placeholder="Enter contact number"
                      style={{ 
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        height: '40px',
                        fontSize: '14px'
                      }}
                    />
                  </Form.Item>
                </FormSection>
              </Col>
              <Col span={12}>
                <FormSection>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input 
                      placeholder="Enter email"
                      style={{ 
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        height: '40px',
                        fontSize: '14px'
                      }}
                    />
                  </Form.Item>
                </FormSection>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <FormSection>
                  <Form.Item
                    name="taxId"
                    label={
                      <span>
                        Tax ID
                        <RequiredLabel>*</RequiredLabel>
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Please enter tax ID' },
                      { len: 13, message: 'Tax ID must be 13 digits' }
                    ]}
                  >
                    <Input 
                      placeholder="Enter tax ID"
                      style={{ 
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        height: '40px',
                        fontSize: '14px'
                      }}
                      maxLength={13}
                    />
                  </Form.Item>
                </FormSection>
              </Col>
              <Col span={12}>
                <FormSection>
                  <Form.Item
                    name="timezone"
                    label="Time zone"
                    initialValue="(UTC+7:00) Western Indo..."
                  >
                    <Select
                      style={{ 
                        borderRadius: '8px',
                        height: '40px'
                      }}
                    >
                      <Option value="(UTC+7:00) Western Indo...">(UTC+7:00) Western Indo...</Option>
                      <Option value="(UTC+0:00) GMT">(UTC+0:00) GMT</Option>
                      <Option value="(UTC+8:00) Singapore">(UTC+8:00) Singapore</Option>
                      <Option value="(UTC+9:00) Japan">(UTC+9:00) Japan</Option>
                    </Select>
                  </Form.Item>
                </FormSection>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <FormSection>
                  <Form.Item
                    name="address"
                    label={
                      <span>
                        Address
                        <RequiredLabel>*</RequiredLabel>
                      </span>
                    }
                    rules={[
                      { required: true, message: 'Please enter company address' }
                    ]}
                  >
                    <TextArea 
                      placeholder="Enter company address"
                      rows={3}
                      style={{ 
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        fontSize: '14px'
                      }}
                    />
                  </Form.Item>
                </FormSection>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <FormSection>
                  <Form.Item
                    name="isActive"
                    label="Inactive:"
                    valuePropName="checked"
                  >
                    <Switch size="default" />
                  </Form.Item>
                </FormSection>
              </Col>
            </Row>

            <ActionButtons>
              <Button 
                onClick={handleCancel}
                style={{ 
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  color: '#6b7280',
                  background: '#ffffff',
                  height: '40px',
                  fontWeight: '500'
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSaveDraft}
                loading={loading}
                style={{ 
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  color: '#374151',
                  background: '#f9fafb',
                  height: '40px',
                  fontWeight: '500'
                }}
              >
                Save draft
              </Button>
              <Button 
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{ 
                  borderRadius: '8px',
                  background: '#1f2937',
                  borderColor: '#1f2937',
                  height: '40px',
                  fontWeight: '600',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                }}
              >
                Confirm
              </Button>
            </ActionButtons>
          </Form>
        </FormCard>
        </MainContent>
      </PageContainer>
    </>
  );
};

export default CreateCompanyPage;
