import React, { useState, useCallback, useEffect, useMemo } from 'react';

interface ConfirmOptions {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmationDialogComponent: React.FC<ConfirmOptions & { onConfirm: () => void; onCancel: () => void; }> = ({ 
  title, 
  message, 
  confirmText, 
  cancelText, 
  onConfirm, 
  onCancel 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onConfirm();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onConfirm, onCancel]);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.4)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 1001
    }}>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', width: '90%', maxWidth: '400px', textAlign: 'center' }}>
        {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
        <p>{message}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <button onClick={onCancel} style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #ccc' }}>
            {cancelText || 'Cancel'}
          </button>
          <button autoFocus onClick={onConfirm} style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', background: '#c62828', color: 'white' }}>
            {confirmText || 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export const useConfirm = () => {
  const [confirmProps, setConfirmProps] = useState<ConfirmOptions | null>(null);
  const [resolveCallback, setResolveCallback] = useState<((value: boolean) => void) | null>(null);

  const confirm = useCallback((options: ConfirmOptions): Promise<boolean> => {
    return new Promise((resolve) => {
      setConfirmProps(options);
      setResolveCallback(() => resolve);
    });
  }, []);

  const handleConfirm = useCallback(() => {
    if (resolveCallback) {
      resolveCallback(true);
      setConfirmProps(null);
      setResolveCallback(null);
    }
  }, [resolveCallback]);

  const handleCancel = useCallback(() => {
    if (resolveCallback) {
      resolveCallback(false);
      setConfirmProps(null);
      setResolveCallback(null);
    }
  }, [resolveCallback]);

  const ConfirmDialog = useMemo(() => {
    if (!confirmProps) return null;
    return (
      <ConfirmationDialogComponent
        {...confirmProps}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    );
  }, [confirmProps, handleConfirm, handleCancel]);

  return {
    confirm,
    ConfirmDialog,
  };
}; 