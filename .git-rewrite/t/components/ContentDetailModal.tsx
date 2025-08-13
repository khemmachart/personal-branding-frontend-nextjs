import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Content, ContentImage } from './ContentList';
import { useConfirm } from '../hooks/useConfirm';
import { 
  uploadAndOptimizeImage, 
  ImageUploadResult, 
  formatFileSize, 
  showOptimizationSuccess,
  showOptimizationError
} from '../utils/imageUploadHelper';
import imageCompression from 'browser-image-compression';
import { WorkflowStage, WorkflowStageStatus } from './ContentList';
import { message } from 'antd';
import { generateSlug } from '../utils';
// Import design system components
import { 
  Button, 
  IconButton, 
  Input, 
  Textarea, 
  Card, 
  CardHeader, 
  CardContent, 
  H2, 
  H3, 
  H4, 
  Body, 
  Caption, 
  Small, 
  Label, 
  ErrorText,
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
  typography
} from './design-system';

// Helper type guards for state determination
export const isPendingUpload = (image: ContentImage): boolean => image.id === null;
export const isUploaded = (image: ContentImage): boolean => image.id !== null && 'id' in image.file && image.file.id !== null;
export const isPendingRemove = (image: ContentImage): boolean => image.deleted_date !== null && image.deleted_date !== '';

export interface UnifiedImage extends ContentImage {
  pendingUploadFile?: File;
  status?: 'uploading' | 'error' | 'pending-remove' | 'pending-upload' | 'pending-save' | 'saved';
  progress?: number;
  errorMessage?: string;
}

export interface ContentDetailModalProps {
  contentId: string;
  isOpen: boolean;
  onClose: () => void;
  onUpdateSuccess: () => void;
  onDelete?: () => void;
  disableBackdropClick?: boolean;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  transition: opacity ${transitions.normal};
  &.open {
    opacity: 1;
  }
`;

const ModalContainer = styled(Card)`
  background: ${colors.offWhite};
  width: 90%;
  max-width: 700px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: translateY(20px);
  transition: transform ${transitions.normal};
  padding: 0;
  &.open {
    transform: translateY(0);
  }
`;

const ModalHeader = styled(CardHeader)`
  background: ${colors.ivoryWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: ${spacing.sm} ${spacing.lg};
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: ${spacing.sm};
  align-items: center;
`;

const ModalBody = styled(CardContent)`
  overflow-y: auto;
  flex-grow: 1;
  padding: ${spacing.lg};
`;

const CloseButton = styled(IconButton)`
  background: ${colors.mutedSage};
  border: 1px solid ${colors.lightGray};
  color: ${colors.graphite};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding-bottom: 2px;
  &:hover {
    background: ${colors.lightGray};
    color: ${colors.darkGray};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;
const FormGroup = styled.div` 
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;
const SubmitButton = styled(Button)<{ isSuccess: boolean }>`
  background: ${({ isSuccess }) => isSuccess ? '#2e7d32' : colors.accentBlue};
  &:hover:not(:disabled) { 
    background: ${({ isSuccess }) => isSuccess ? '#388e3c' : '#2563EB'}; 
  }
`;

const Message = styled.div`
  padding: ${spacing.md};
  border-radius: ${borderRadius.lg};
  margin-top: ${spacing.md};
  text-align: center;
  background: #ffebee;
  color: ${colors.softRed};
`;
const LoadingMessage = styled(Body)`
    text-align: center;
    padding: ${spacing.xl};
    color: ${colors.graphite};
`;

const FileUploaderContainer = styled.div`
  margin-top: ${spacing.md};
`;

const Dropzone = styled.div`
  border: 2px dashed ${colors.lightGray};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.lg};
  text-align: center;
  cursor: pointer;
  background-color: ${colors.offWhite};
  transition: all ${transitions.normal};
  margin-bottom: ${spacing.md};
  margin-top: ${spacing.sm};

  &:hover, &.drag-over {
    border-color: ${colors.accentBlue};
    background-color: #f0f8ff;
  }
`;

const UploadIconContainer = styled.div`
  margin-bottom: ${spacing.sm};
  svg {
    width: 28px;
    height: 28px;
    color: ${colors.accentBlue};
  }
`;

const DropzoneText = styled(Body)`
  margin: ${spacing.xs} 0;
  color: ${colors.graphite};
`;

const DropzoneHint = styled(Caption)`
  color: ${colors.graphite};
  margin: 0;
`;

const UploadsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

const UploadsHeader = styled(H4)`
  margin: 0 0 ${spacing.sm} 0;
`;

const FileItem = styled(Card)`
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 0;
  transition: all ${transitions.normal};
  position: relative;
  padding: 0;
  
  /* CSS Custom Properties for better maintainability */
  --file-item-bg: ${colors.ivoryWhite};
  --file-item-border: ${colors.lightGray};
  --file-item-opacity: 1;
  --file-item-text-color: ${colors.darkGray};
  --file-item-warning-bg: #fff8e1;
  --file-item-warning-border: #ffcc02;
  --file-item-warning-text: #e65100;
  --file-item-error-bg: #ffebee;
  --file-item-error-border: #ffcdd2;
  --file-item-error-text: ${colors.softRed};
  --file-item-uploaded-bg: #e8f5e8;
  --file-item-uploaded-border: ${colors.lightGray};
  --file-item-uploaded-text: #2e7d32;
  
  /* Default variant */
  background: var(--file-item-bg);
  border: 1px solid var(--file-item-border);
  opacity: var(--file-item-opacity);
  
  /* Hover effects for default variant */
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${shadows.medium};
  }
  
  /* Success state */
  &.uploaded {
    border: 1px solid var(--file-item-uploaded-border);
  }
  
  /* Error state */
  &.error {
    background: var(--file-item-error-bg);
    border: 1px solid var(--file-item-error-border);
    
    .file-name {
      color: var(--file-item-error-text);
    }
  }
  
  /* Pending remove variant */
  &.pending-remove {
    background: var(--file-item-warning-bg);
    border: 1px solid var(--file-item-warning-border);
    opacity: 0.85;
    position: relative;
    
    &:hover {
      opacity: 0.95;
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(255, 204, 2, 0.2);
    }
  }
  
  /* Uploading state */
  &.uploading {
    background: #f3f4f6;
    border: 1px solid #d1d5db;
    
    .file-name {
      color: #6b7280;
    }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const FileItemWrapper = styled.div`
  padding: ${spacing.sm};
`;

const FileIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: ${borderRadius.md};
  background-color: ${colors.mutedSage};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${typography.fontWeight.semiBold};
  font-size: ${typography.fontSize.small};
  text-transform: uppercase;
  color: ${colors.graphite};
  margin-right: ${spacing.sm};
  flex-shrink: 0;
  border: 1px solid ${colors.lightGray};
  transition: all ${transitions.normal};
  
  &:hover {
    background-color: ${colors.lightGray};
    border-color: ${colors.graphite};
  }
`;

const FileInfo = styled.div`
  flex-grow: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

const FileName = styled(Body)`
  font-weight: ${typography.fontWeight.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  transition: color ${transitions.normal};
  font-size: ${typography.fontSize.tiny};

  /* CSS Custom Properties */
  --file-name-color: ${colors.darkGray};
  --file-name-warning-color: #e65100;
  --file-name-warning-suffix-color: #e65100;
  
  /* Default variant */
  color: var(--file-name-color);
  
  /* Pending remove variant */
  &.pending-remove {
    color: var(--file-name-warning-color);
    position: relative;
    
    &::after {
      content: ' (Pending Remove)';
      font-style: italic;
      color: var(--file-name-warning-suffix-color);
      font-size: ${typography.fontSize.tiny};
      opacity: 0.8;
      font-weight: ${typography.fontWeight.regular};
      margin-left: ${spacing.xs};
    }
  }
`;

const FileSize = styled(Caption)`
  color: ${colors.graphite};
  padding-left: 2.4rem;
  margin: 0;
`;

const FileProgress = styled.div`
  background: ${colors.mutedSage};
  border-radius: 0 0 ${borderRadius.lg} ${borderRadius.lg};
  height: 3px;
  width: 100%;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${props => props.progress}%;
  background: ${colors.accentBlue};
  transition: width 0.3s ease;
  border-radius: 1.5px;
`;

const FileActions = styled.div`
  margin-left: ${spacing.sm};
`;

const ActionButton = styled(IconButton)`
  background: transparent;
  color: ${colors.graphite};
  padding: ${spacing.xs};
  min-width: 24px;
  min-height: 24px;
  transition: all ${transitions.normal};

  &:hover {
    color: ${colors.darkGray};
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  /* Special styling for restore button */
  &[title*="Restore"] {
    color: #2e7d32;
    
    &:hover {
      color: #1b5e20;
      background: rgba(46, 125, 50, 0.1);
    }
  }
  
  /* Special styling for confirm delete button */
  &[title*="Confirm"] {
    color: ${colors.softRed};
    
    &:hover {
      color: #c62828;
      background: rgba(211, 47, 47, 0.1);
    }
  }
`;

// Add new styled components for workflow display
const WorkflowContainer = styled(Card)`
  margin-top: ${spacing.md};
  overflow: hidden;
  padding: 0;
`;

const WorkflowHeader = styled(CardHeader)`
  background: ${colors.mutedSage};
  
  h3 {
    margin: 0;
    font-size: ${typography.fontSize.caption};
    font-weight: ${typography.fontWeight.semiBold};
    color: ${colors.darkGray};
  }
  
  p {
    margin: ${spacing.xs} 0 0 0;
    font-size: ${typography.fontSize.small};
    color: ${colors.graphite};
  }
`;

const WorkflowStagesContainer = styled.div`
  // max-height: 750px;
  overflow-y: auto;
`;

const WorkflowStageItem = styled.div<{ isCurrentStage: boolean }>`
  border-bottom: 1px solid ${colors.mutedSage};
  background: ${props => props.isCurrentStage ? '#e3f2fd' : colors.ivoryWhite};
  
  &:last-child {
    border-bottom: none;
  }
`;

const StageHeader = styled.div<{ isCurrentStage: boolean }>`
  padding: ${spacing.sm} ${spacing.md};
  background: ${props => props.isCurrentStage ? '#bbdefb' : colors.offWhite};
  border-left: 3px solid ${props => props.isCurrentStage ? colors.accentBlue : colors.lightGray};
  
  h4 {
    margin: 0;
    font-size: ${typography.fontSize.caption};
    font-weight: ${typography.fontWeight.semiBold};
    color: ${props => props.isCurrentStage ? colors.accentBlue : colors.darkGray};
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
  }
  
  .stage-info {
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
    flex-wrap: wrap;
  }
  
  .stage-title {
    font-weight: ${typography.fontWeight.semiBold};
    color: ${props => props.isCurrentStage ? colors.accentBlue : colors.darkGray};
  }
  
  .stage-description {
    font-size: ${typography.fontSize.small};
    color: ${props => props.isCurrentStage ? colors.accentBlue : colors.graphite};
    font-weight: ${typography.fontWeight.regular};
  }
`;

const StatusesContainer = styled.div`
  padding: ${spacing.xs} ${spacing.md} ${spacing.sm} ${spacing.md};
`;

const StatusItem = styled.div<{ isCurrentStatus: boolean }>`
  padding: ${spacing.sm} ${spacing.sm};
  margin: ${spacing.xs} 0;
  border-radius: ${borderRadius.sm};
  background: ${props => props.isCurrentStatus ? '#e8f5e8' : colors.offWhite};
  border: 1px solid ${props => props.isCurrentStatus ? '#c8e6c9' : colors.lightGray};
  
  .status-info {
    display: flex;
    align-items: center;
    gap: ${spacing.xs};
    flex-wrap: wrap;
  }
  
  .status-title {
    font-size: ${typography.fontSize.caption};
    font-weight: ${props => props.isCurrentStatus ? typography.fontWeight.semiBold : typography.fontWeight.medium};
    color: ${props => props.isCurrentStatus ? '#2e7d32' : colors.darkGray};
  }
  
  .status-description {
    font-size: ${typography.fontSize.small};
    color: ${props => props.isCurrentStatus ? '#388e3c' : colors.graphite};
    font-weight: ${typography.fontWeight.regular};
  }
`;

// Add new styled component for selectable status items
const SelectableStatusItem = styled.div<{ isCurrentStatus: boolean; isSelected: boolean }>`
  padding: ${spacing.sm} ${spacing.sm};
  margin: ${spacing.xs} 0;
  border-radius: ${borderRadius.sm};
  background: ${props => {
    if (props.isSelected) return '#e3f2fd';
    if (props.isCurrentStatus) return '#e8f5e8';
    return colors.offWhite;
  }};
  border: 1px solid ${props => {
    if (props.isSelected) return colors.accentBlue;
    if (props.isCurrentStatus) return '#c8e6c9';
    return colors.lightGray;
  }};
  cursor: pointer;
  transition: all ${transitions.normal};
  
  &:hover {
    background: ${props => props.isSelected ? '#bbdefb' : colors.mutedSage};
    transform: translateY(-1px);
    box-shadow: ${shadows.soft};
  }
  
  .status-info {
    display: flex;
    align-items: center;
    gap: ${spacing.xs};
    flex-wrap: wrap;
  }
  
  .status-title {
    font-size: ${typography.fontSize.caption};
    font-weight: ${props => props.isSelected || props.isCurrentStatus ? typography.fontWeight.semiBold : typography.fontWeight.medium};
    color: ${props => {
      if (props.isSelected) return colors.accentBlue;
      if (props.isCurrentStatus) return '#2e7d32';
      return colors.darkGray;
    }};
  }
  
  .status-description {
    font-size: ${typography.fontSize.small};
    color: ${props => {
      if (props.isSelected) return colors.accentBlue;
      if (props.isCurrentStatus) return '#388e3c';
      return colors.graphite;
    }};
    font-weight: ${typography.fontWeight.regular};
  }
`;

const CurrentStatusBadge = styled.div`
  display: inline-block;
  background: #2e7d32;
  color: ${colors.ivoryWhite};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: 10px;
  font-size: ${typography.fontSize.small};
  font-weight: ${typography.fontWeight.semiBold};
  white-space: nowrap;
`;

// Add new styled components for full-screen image modal
const FullScreenImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  opacity: 0;
  transition: opacity ${transitions.slow};
  &.open {
    opacity: 1;
  }
`;

const FullScreenImageContainer = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  transform: scale(0.9);
  transition: transform ${transitions.slow};
  &.open {
    transform: scale(1);
  }
`;

const FullScreenImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: ${borderRadius.lg};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

const FullScreenCloseButton = styled(IconButton)`
  position: absolute;
  top: -40px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: ${colors.ivoryWhite};
  font-size: ${typography.fontSize.bodyLarge};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all ${transitions.normal};
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

const FullScreenImageInfo = styled(Body)`
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  text-align: center;
  color: ${colors.ivoryWhite};
  opacity: 0.8;
  margin: 0;
`;

// Add new styled components for the menu
const MenuButton = styled(IconButton)`
  width: 36px;
  height: 36px;
  padding-bottom: 2px;
  position: relative;
  background: none; 
  border: none;
  margin-right: 10px;
  color: ${colors.darkGray};
`;

const MenuDropdown = styled(Card)`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${colors.ivoryWhite};
  box-shadow: ${shadows.medium};
  z-index: 1001;
  min-width: 150px;
  margin-top: ${spacing.xs};
  padding: 0;
`;

const MenuItem = styled(Button)`
  width: 100%;
  padding: ${spacing.sm} ${spacing.md};
  border: none;
  background: none;
  text-align: left;
  justify-content: flex-start;
  font-size: ${typography.fontSize.caption};
  color: ${colors.darkGray};
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  border-radius: 0;
  
  &:hover {
    background: ${colors.mutedSage};
  }
  
  &:first-child {
    border-radius: ${borderRadius.lg} ${borderRadius.lg} 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 ${borderRadius.lg} ${borderRadius.lg};
  }
  
  &.danger {
    color: ${colors.softRed};
    
    &:hover {
      background: #ffebee;
    }
  }
`;

// Add new styled component for file content wrapper
const FileContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

const ContentDetailModal: React.FC<ContentDetailModalProps> = ({ contentId, isOpen, onClose, onUpdateSuccess, onDelete, disableBackdropClick }) => {
  const [content, setContent] = useState<Content | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { confirm, ConfirmDialog } = useConfirm();

  const [files, setFiles] = useState<UnifiedImage[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [workflowStages, setWorkflowStages] = useState<WorkflowStage[]>([]);
  const [workflowLoading, setWorkflowLoading] = useState(false);

  // Add state for full-screen image modal
  const [fullScreenImage, setFullScreenImage] = useState<{
    src: string;
    alt: string;
    fileName: string;
    fileSize?: string;
  } | null>(null);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);

  // Add state for selected workflow status
  const [selectedWorkflowStatus, setSelectedWorkflowStatus] = useState<WorkflowStageStatus | null>(null);

  // Add state for menu dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const maxFileSize = 10 * 1024 * 1024; // 10MB

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 250);
    }
  }, [isOpen]);

  const fetchContent = useCallback(async () => {
    if (!contentId) return;
    setLoading(true);
    setHasChanges(false);
    setIsSuccess(false);
    setError(null);
    
    // Clear upload state
    setFiles([]);
    setDragOver(false);
    
    try {
      // Fetch content and workflow stages in parallel
      const [contentResponse, workflowResponse] = await Promise.all([
        fetch(`/api/cms/v1/contents/${contentId}`),
        fetch('/api/cms/v1/workflows/stages/statuses')
      ]);
      
      if (!contentResponse.ok) throw new Error('Failed to fetch content data.');
      if (!workflowResponse.ok) throw new Error('Failed to fetch workflow stages.');
      
      const contentData = await contentResponse.json();
      const workflowData = await workflowResponse.json();
      
      setContent(contentData);
      setWorkflowStages(workflowData);
      setSelectedWorkflowStatus(contentData.status || null);
      setFiles(contentData.images.map(image => ({
        id: image.id,
        content_id: image.content_id,
        file: image.file,
        created_date: image.created_date,
        updated_date: image.updated_date,
        deleted_date: image.deleted_date,
        status: 'saved' as const,
        progress: 100,
        uploadTimestamp: Date.now(),
        thumbnailUrl: image.file.file_thumbnail_url
      })));
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [contentId]);

  useEffect(() => {
    if (isOpen) {
      fetchContent();
    }
  }, [isOpen, fetchContent]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!content) return;
    setHasChanges(true);
    
    const { name, value } = e.target;
    
    if (name === 'title') {
      setContent({ 
        ...content, 
        [name]: value,
        name:  generateSlug(value)
      });
    } else {
      setContent({ ...content, [name]: value });
    }
  };

  // Add function to handle workflow status selection
  const handleWorkflowStatusSelect = (status: WorkflowStageStatus) => {
    setSelectedWorkflowStatus(status);
    setHasChanges(true);
  };

  const handleCloseRequest = async () => {
    if (hasChanges && !isSuccess) {
      const confirmed = await confirm({
        title: 'Unsaved Changes',
        message: 'You have unsaved changes. Are you sure you want to close?',
        confirmText: 'Close',
        cancelText: 'Stay'
      });
      if (!confirmed) return;
    }
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) return;
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Prepare content data with selected workflow status
      const contentData = {
        ...content,
        status: selectedWorkflowStatus
      };
      
      const response = await fetch(`/api/cms/v1/contents/${contentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contentData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update content.');
      }
      message.success('Content updated successfully!', 5);
      setIsSuccess(true);
      setHasChanges(false);
      setTimeout(() => {
        onUpdateSuccess();
        onClose();
      }, 500);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disableBackdropClick && e.target === e.currentTarget) {
      handleCloseRequest();
    }
  }

  const compressImage = async (file: File): Promise<File> => {
    const options = {
      maxSizeMB: 5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error('Compression error:', error);
      throw error;
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newUploadingFiles: UnifiedImage[] = Array.from(selectedFiles).map(file => ({
      id: null,
      content_id: content?.id || '',
      pendingUploadFile: file,
      status: 'pending-upload' as const,
      progress: 0
    }));

    setFiles(prev => [...prev, ...newUploadingFiles]);
    newUploadingFiles.forEach(uploadImageFile);
  };

  const getFileName = (contentImage: UnifiedImage): string | null => {
    if (contentImage?.pendingUploadFile instanceof File) {
      return contentImage.pendingUploadFile.name;
    } else if (contentImage?.file && 'file_name' in contentImage.file) {
      return contentImage.file.file_name as string;
    }
    return null;
  };

  const getFileSize = (contentImage: UnifiedImage): number | null => {
    if (contentImage?.pendingUploadFile instanceof File) {
      return contentImage.pendingUploadFile.size;
    }
    return contentImage?.file?.file_size || null;
  };

  const isFileImage = (contentImage: UnifiedImage): boolean => {
    if (contentImage?.pendingUploadFile instanceof File) {
      return contentImage.pendingUploadFile.type.startsWith('image/');
    }
    return contentImage?.file?.mime_type?.startsWith('image/');
  };

  const uploadImageFile = async (contentImage: UnifiedImage) => {
    const pendingUploadFile = contentImage.pendingUploadFile;

    // Set the status of current image to uploading
    setFiles(prev => prev.map(f => f.pendingUploadFile?.name === contentImage.pendingUploadFile?.name ? { ...f, status: 'uploading' } : f));

    try {
      let compressedFile = pendingUploadFile;
      if (pendingUploadFile instanceof File && isFileImage(contentImage)) {
        try {
          compressedFile = await compressImage(pendingUploadFile);
        } catch (e) {
          console.warn(`Could not compress image, uploading original.`, e);
        }
      }

      const result = await new Promise<ImageUploadResult>((resolve, reject) => {
        const filePath = `${content.id}-${content.name}`;
        // Keep updating the progress of the current image
        uploadAndOptimizeImage(compressedFile as File, filePath, {
          onProgress: (progress) => {
            setFiles(prev => prev.map(f => f.pendingUploadFile?.name === contentImage.pendingUploadFile?.name ? { ...f, progress } : f));
          },
          onSuccess: (uploadResult) => {
            showOptimizationSuccess(uploadResult);
            resolve(uploadResult);
          },
          onError: (error) => {
            showOptimizationError(`${getFileName(contentImage)}: ${error}`);
            reject(new Error(error));
          },
          maxFileSize: maxFileSize,
        });
      });

      // Create a new image with the uploaded file
      const newFileAttributes = { 
        id: null, // Set the id to null to indicate that the file is not yet uploaded
        content_id: content.id,
        file: result.fileRecord, // Set the file to the uploaded file
        pendingUploadFile: null, // Remove the pending upload file
        status: 'saved', // Set the status to uploaded
        progress: 100, // Set the progress to 100
      } as UnifiedImage;

      // Set the file to the uploaded file
      setFiles(prev => prev.map(f => f.pendingUploadFile?.name === contentImage.pendingUploadFile?.name ? {...f, ...newFileAttributes} : f));
      setHasChanges(true);
      setContent(prevContent => {
        if (!prevContent) return prevContent;
        return {
          ...prevContent,
          images: [...prevContent.images, newFileAttributes]
        };
      });

    } catch (error: any) {
      setFiles(prev => prev.map(f => f.pendingUploadFile?.name === contentImage.pendingUploadFile?.name ? { ...f, status: 'error', errorMessage: error.message } : f));
    }
  };

  const handleCancelUpload = (contentImage: ContentImage) => {
    setFiles(prev => prev.filter(f => f.created_date === contentImage.created_date));
  };
  
  const handleDeleteFile = async (contentImage: UnifiedImage) => {
    const isMatchedName = (f: UnifiedImage) => f.pendingUploadFile && (f.pendingUploadFile?.name === contentImage.pendingUploadFile?.name);
    const isMatchedId = (f: UnifiedImage) => f.file && (f.file?.id === contentImage.file?.id);
    
    setFiles(prev => prev.map(f => isMatchedName(f) || isMatchedId(f) ? { ...f, status: 'pending-remove' } : f ));
    setHasChanges(true);
    setContent(prevContent => {
      if (!prevContent) return prevContent;
      return {
        ...prevContent,
        images: prevContent.images.map(image => 
          image.id === contentImage.id 
            ? { ...image, deleted_date: new Date().toISOString() }
            : image
        )
      };
    });
  };

  const handleRestoreFile = (contentImage: ContentImage) => {
    setFiles(prev => prev.map(f => 
      f.id === contentImage.id ? { ...f, status: 'saved' } : f
    ));
    setHasChanges(true);
  };

  // Add function to handle copy URL
  const handleCopyURL = async () => {
    try {
      const source = 'copy';
      const medium = 'website';
      const url = `${window.location.origin}/?contentSlug=${content.name}&contentId=${contentId}&utm_source=${source}&utm_medium=${medium}`;
      await navigator.clipboard.writeText(url);
      message.success('URL copied to clipboard', 5);
    } catch (error) {
      console.error('Failed to copy URL:', error);
    }
    setIsMenuOpen(false);
  };

  // Modify handleDelete to close menu
  const handleDelete = async () => {
    setIsMenuOpen(false);
    const confirmed = await confirm({
      title: 'Delete Content',
      message: 'Are you sure you want to delete this content? This action cannot be undone.',
      confirmText: 'Delete',
      cancelText: 'Cancel'
    });
    
    if (!confirmed) return;

    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch(`/api/cms/v1/contents/${contentId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete content');
      }

      // Call the onDelete callback if provided
      if (onDelete) {
        onDelete();
      }
      
      // Close the modal
      onClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to delete content');
    } finally {
      setIsDeleting(false);
    }
  };

  // Add function to handle menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add function to handle clicking outside menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const isCurrentStage = (stage: WorkflowStage, contentStatus: WorkflowStageStatus): boolean => {
    if (!contentStatus || !contentStatus.code) return false;
    const isCurrent = stage.statuses.some(status => status.code === contentStatus.code);
    return isCurrent;
  };

  const isCurrentStatus = (statusCode: string, contentStatus: any): boolean => {
    if (!contentStatus || !contentStatus.code) return false;
    const isCurrent = statusCode === contentStatus.code;
    return isCurrent;
  };

  // Add function to handle opening full-screen image
  const handleOpenFullScreenImage = (contentImage: UnifiedImage) => {
    if (!isUploaded(contentImage)) return;
    
    let imageSrc = '';
    let fileName = getFileName(contentImage);
    let fileSize = formatFileSize(getFileSize(contentImage));
    
    // If it's an uploaded image with versions, use the webp version for better quality
    if (contentImage.file?.image_webp_url) {
      imageSrc = contentImage.file.image_webp_url;
    } else if (contentImage.file?.image_original_url) {
      imageSrc = contentImage.file.image_original_url;
    } else {
      // For existing images from content, try to get the URL
      const contentImage = content?.images.find(img => img.id === contentImage.id);
      if (contentImage?.file?.image_webp_url) {
        imageSrc = contentImage.file.image_webp_url;
      } else if (contentImage?.file?.image_original_url) {
        imageSrc = contentImage.file.image_original_url;
      } else if (contentImage?.file?.file_url) {
        imageSrc = contentImage.file.file_url;
      } else {
        // Fallback to blob URL for new uploads
        imageSrc = URL.createObjectURL(contentImage.pendingUploadFile as File);
      }
    }

    // If imageSrc does not start with http(s), prepend AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN
    if (imageSrc && !/^https?:\/\//i.test(imageSrc)) {
      const cloudfrontDomain = process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN || '';
      if (cloudfrontDomain) {
        // Ensure no double slash
        imageSrc = `${cloudfrontDomain.replace(/\/$/, '')}/${imageSrc.replace(/^\//, '')}`;
      }
    }
    
    setFullScreenImage({
      src: imageSrc,
      alt: fileName,
      fileName,
      fileSize
    });
    setIsFullScreenOpen(true);
  };

  // Add function to handle closing full-screen image
  const handleCloseFullScreenImage = () => {
    setIsFullScreenOpen(false);
    setTimeout(() => setFullScreenImage(null), 300);
  };

  // Add function to handle backdrop click for full-screen modal
  const handleFullScreenBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseFullScreenImage();
    }
  };

  // Add keyboard event handler for ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isFullScreenOpen) {
          handleCloseFullScreenImage();
        } else if (isOpen && !isSubmitting) {
          handleCloseRequest();
        }
      }
    };

    if (isOpen || isFullScreenOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isFullScreenOpen, isSubmitting, hasChanges, isSuccess]);

  if (!isVisible) return null;

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick} className={isOpen ? 'open' : ''}>
        <ModalContainer className={isOpen ? 'open' : ''}>
          <ModalHeader>
            <H2 style={{ margin: 0 }}>Edit Content</H2>
            <ActionsContainer>
              <CloseButton onClick={handleCloseRequest} disabled={isSubmitting}>&times;</CloseButton>
              <div className="menu-container" style={{ position: 'relative' }}>
                <MenuButton onClick={handleMenuToggle} disabled={isSubmitting}>
                  ⋮
                </MenuButton>
                {isMenuOpen && (
                  <MenuDropdown>
                    <MenuItem onClick={handleCopyURL} variant="text">
                      📋 Copy URL
                    </MenuItem>
                    <MenuItem onClick={handleDelete} className="danger" disabled={isDeleting} variant="text">
                      {isDeleting ? '🗑️ Deleting...' : '🗑️ Delete content'}
                    </MenuItem>
                  </MenuDropdown>
                )}
              </div>
              <SubmitButton 
                type="button" 
                form="content-form" 
                onClick={handleSubmit} 
                disabled={isSubmitting || isSuccess || !hasChanges} 
                isSuccess={isSuccess}
                size="small"
              >
                {isSuccess ? 'Saved!' : isSubmitting ? 'Saving...' : 'Save Changes'}
              </SubmitButton>
            </ActionsContainer>
          </ModalHeader>

          <ModalBody>
            {loading ? (
              <LoadingMessage>Loading...</LoadingMessage>
            ) : content ? (
              <Form id="content-form" onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Name (Slug)</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={content.name} 
                    onChange={handleInputChange}
                    disabled={true}
                    style={{ 
                      backgroundColor: '#f5f5f5', 
                      color: '#666',
                      cursor: 'not-allowed'
                    }}
                    title="This field is automatically generated from the title"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" value={content.title} onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" value={content.description} onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="short_form_content_text">Short Form Content Text</Label>
                  <Textarea id="short_form_content_text" name="short_form_content_text" style={{ height: '300px' }} value={content.short_form_content_text} onChange={handleInputChange} />
                </FormGroup>
                
                <FileUploaderContainer>
                  {files.length > 0 && (
                    <UploadsList>
                      <UploadsHeader>Uploads</UploadsHeader>
                      {files.sort((a, b) => new Date(a.created_date).getTime() - new Date(b.created_date).getTime()).map((unifiedImage) => {
                        const { file, pendingUploadFile, status, progress, errorMessage } = unifiedImage;
                        const isImage = isFileImage(unifiedImage);
                        const thumbnailUrl = file?.file_thumbnail_url ? `${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN}${file.file_thumbnail_url}` : (isImage && pendingUploadFile instanceof File ? URL.createObjectURL(pendingUploadFile) : null);
                        const extension = getFileName(unifiedImage)?.split('.').pop()?.substring(0, 3) || 'file';
                        return (
                          <FileItem 
                            key={unifiedImage.id || unifiedImage.pendingUploadFile?.name || `temp-${Date.now()}-${Math.random()}`} 
                            className={status}
                            style={{ cursor: status === 'pending-save' && isImage ? 'pointer' : 'default' }}
                            onClick={() => status === 'saved' && isImage && handleOpenFullScreenImage(unifiedImage)}
                          >
                            <FileItemWrapper>
                            <FileContent>
                              {isImage ? (
                                <FileIcon>
                                  <img 
                                    src={thumbnailUrl} 
                                    alt={getFileName(unifiedImage)}
                                    style={{ 
                                      width: '100%', 
                                      height: '100%', 
                                      objectFit: 'cover',
                                      borderRadius: '4px'
                                    }} 
                                  />
                                </FileIcon>
                              ) : (
                                <FileIcon>{extension}</FileIcon>
                              )}
                              <FileInfo className={status}>
                                <FileName className={`file-name ${status}`}>{getFileName(unifiedImage)}</FileName>
                                {status === 'pending-upload'}
                                {status === 'error' && <FileSize style={{ color: '#ff4d4f' }}>Error: {errorMessage}</FileSize>}
                              </FileInfo>
                              <FileActions>
                                {status === 'uploading' && (
                                  <ActionButton onClick={(e) => { e.stopPropagation(); handleCancelUpload(unifiedImage); }} title="Cancel upload">
                                    &times;
                                  </ActionButton>
                                )}
                                {status === 'saved' && (
                                  <ActionButton onClick={(e) => { e.stopPropagation(); handleDeleteFile(unifiedImage); }} title="Delete file">
                                    &#x1F5D1;
                                  </ActionButton>
                                )}
                                {status === 'pending-save' && (
                                  <ActionButton onClick={(e) => { e.stopPropagation(); handleDeleteFile(unifiedImage); }} title="Delete file">
                                    &#x1F5D1;
                                  </ActionButton>
                                )}
                                {status === 'pending-remove' && (
                                  <>
                                    <ActionButton onClick={(e) => { e.stopPropagation(); handleRestoreFile(unifiedImage); }} title="Restore file">
                                      &#x21BA;
                                    </ActionButton>
                                  </>
                                )}
                                {status === 'error' && (
                                  <ActionButton onClick={(e) => { e.stopPropagation(); handleDeleteFile(unifiedImage); }} title="Remove">
                                    &times;
                                  </ActionButton>
                                )}
                              </FileActions>
                            </FileContent>
                            {status === 'uploading' && (
                              <FileSize>
                                {formatFileSize(getFileSize(unifiedImage) * (progress / 100))} of {formatFileSize(getFileSize(unifiedImage))}
                              </FileSize>
                            )}
                            </FileItemWrapper>
                            {status === 'uploading' && (
                              <FileProgress>
                                <ProgressBarFill progress={progress} />
                              </FileProgress>
                            )}
                            
                          </FileItem>
                        );
                      })}
                    </UploadsList>
                  )}

                  <Dropzone
                    className={dragOver ? 'drag-over' : ''}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-upload-input')?.click()}
                  >
                    <input
                      type="file"
                      multiple
                      id="file-upload-input"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileSelect(e.target.files)}
                    />
                    <UploadIconContainer>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></svg>
                    </UploadIconContainer>
                    <DropzoneText>Drop your files here or browse</DropzoneText>
                    <DropzoneHint>Max file size up to {maxFileSize / 1024 / 1024} MB</DropzoneHint>
                  </Dropzone>
                </FileUploaderContainer>

                {/* Add workflow stages display */}
                {!loading && content && workflowStages.length > 0 && (
                  <WorkflowContainer>
                    <WorkflowHeader>
                      <h3>Workflow Status</h3>
                      <p>
                        Current workflow stage and status for this content
                        {content.status && (
                          <span style={{ display: 'block', marginTop: '0.25rem', fontSize: '0.75rem', color: '#1976d2' }}>
                            Current: {content.status.title} ({content.status.code})
                            {content.status.workflow_stage && ` - Stage: ${content.status.workflow_stage.title}`}
                          </span>
                        )}
                        {selectedWorkflowStatus && selectedWorkflowStatus !== content.status && (
                          <span style={{ display: 'block', marginTop: '0.25rem', fontSize: '0.75rem', color: '#ff9800' }}>
                            Selected: {selectedWorkflowStatus.title} ({selectedWorkflowStatus.code})
                            {selectedWorkflowStatus.workflow_stage && ` - Stage: ${selectedWorkflowStatus.workflow_stage.title}`}
                          </span>
                        )}
                      </p>
                    </WorkflowHeader>
                    
                    <WorkflowStagesContainer>
                      {workflowStages.map((stage) => {
                        const currentStage = isCurrentStage(stage, content.status);
                        
                        return (
                          <WorkflowStageItem key={stage.code} isCurrentStage={currentStage}>
                            <StageHeader isCurrentStage={currentStage}>
                              <div className="stage-info">
                                <span className="stage-title">{stage.title}</span>
                                <span className="stage-description">{stage.description}</span>
                                {currentStage && <CurrentStatusBadge>Current Stage</CurrentStatusBadge>}
                              </div>
                            </StageHeader>
                            
                            <StatusesContainer>
                              {stage.statuses.map((status) => {
                                const currentStatus = isCurrentStatus(status.code, content.status);
                                const isSelected = selectedWorkflowStatus && selectedWorkflowStatus.code === status.code;
                                
                                return (
                                  <SelectableStatusItem 
                                    key={status.code} 
                                    isCurrentStatus={currentStatus}
                                    isSelected={isSelected}
                                    onClick={() => handleWorkflowStatusSelect(status)}
                                  >
                                    <div className="status-info">
                                      <span className="status-title">{status.title}</span>
                                      <span className="status-description">{status.description}</span>
                                      {currentStatus && <CurrentStatusBadge>Current</CurrentStatusBadge>}
                                      {isSelected && <CurrentStatusBadge style={{ backgroundColor: '#2196f3' }}>Selected</CurrentStatusBadge>}
                                    </div>
                                  </SelectableStatusItem>
                                );
                              })}
                            </StatusesContainer>
                          </WorkflowStageItem>
                        );
                      })}
                    </WorkflowStagesContainer>
                  </WorkflowContainer>
                )}

                {error && (
                  <Message>
                    <ErrorText>{error}</ErrorText>
                  </Message>
                )}
              </Form>
            ) : (
              <Message>
                <ErrorText>{error || 'Could not load content.'}</ErrorText>
              </Message>
            )}
          </ModalBody>
        </ModalContainer>
      </ModalOverlay>

      {/* Full-screen image modal */}
      {fullScreenImage && (
        <FullScreenImageOverlay 
          onClick={handleFullScreenBackdropClick} 
          className={isFullScreenOpen ? 'open' : ''}
        >
          <FullScreenImageContainer className={isFullScreenOpen ? 'open' : ''}>
            <FullScreenCloseButton onClick={handleCloseFullScreenImage}>
              &times;
            </FullScreenCloseButton>
            <FullScreenImage 
              src={fullScreenImage.src} 
              alt={fullScreenImage.alt}
              onLoad={() => setIsFullScreenOpen(true)}
            />
            <FullScreenImageInfo>
              {fullScreenImage.fileName} {fullScreenImage.fileSize && `(${fullScreenImage.fileSize})`}
            </FullScreenImageInfo>
          </FullScreenImageContainer>
        </FullScreenImageOverlay>
      )}

      {ConfirmDialog}
    </>
  );
};

export default ContentDetailModal; 