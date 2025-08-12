import { useState, useRef, useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { 
  Bold, Italic, Type, List, 
  Link as LinkIcon, CheckSquare, Image as ImageIcon,
  Copy
} from 'react-feather';

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  padding: 1rem;
  background-color: #f5f5f5;
`;

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const EditorContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Toolbar = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuBarContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const MenuButton = styled.button<{ isActive?: boolean }>`
  padding: 0.5rem;
  border: 1px solid #ddd;
  background: ${props => props.isActive ? '#e2e8f0' : 'white'};
  border-color: ${props => props.isActive ? '#cbd5e1' : '#ddd'};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f5f5f5;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Status = styled.span`
  font-size: 0.875rem;
  color: #666;
`;

const EditorContent = styled.div`
  min-height: 500px;
  padding: 1rem;
  border: none;
  font-size: 1.125rem;
  line-height: 1.75;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  &:focus {
    outline: none;
  }

  /* Base text styles */
  color: #2d3748;
  
  /* Heading styles */
  h1 { 
    font-size: 2.25em; 
    font-weight: 700;
    margin: 1.2em 0 0.6em;
    color: #1a202c;
  }
  
  h2 { 
    font-size: 1.75em; 
    font-weight: 600;
    margin: 1em 0 0.5em;
    color: #1a202c;
  }

  h3 { 
    font-size: 1.25em; 
    font-weight: 500;
    margin: 0.8em 0 0.4em;
    color: #1a202c;
  }
  
  /* List styles */
  ul { 
    padding-left: 1.75em;
    margin: 1em 0;
    list-style-type: disc;
    
    li {
      margin: 0.5em 0;
    }
  }

  ol { 
    padding-left: 1.75em;
    margin: 1em 0;
    list-style-type: decimal;
    
    li {
      margin: 0.5em 0;
    }
  }
  
  /* Paragraph styles */
  p { 
    margin: 1em 0;
    line-height: 1.8;
  }

  /* Selection highlight */
  ::selection {
    background: #e2e8f0;
  }

  /* Checkbox list styles */
  li input[type="checkbox"] {
    margin-right: 0.5em;
    cursor: pointer;
  }

  /* Link styles */
  a {
    color: #3182ce;
    text-decoration: underline;
    
    &:hover {
      color: #2c5282;
    }
  }

  /* Image styles */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1em 0;
  }
`;

const NotePage: NextPage = () => {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const [lastChar, setLastChar] = useState<string>('');

  const isFormatActive = useCallback((command: string) => {
    if (typeof document !== 'undefined') {
      return document.queryCommandState(command);
    }
    return false;
  }, []);

  const handleSave = async () => {
    if (!editorRef.current) return;
    
    setIsSaving(true);
    try {
      await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: editorRef.current.innerHTML }),
      });
    } catch (error) {
      console.error('Failed to save note:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const execCommand = useCallback((command: string, value: string | boolean = false) => {
    document.execCommand(command, false, value as string);
    editorRef.current?.focus();
    handleSave();
  }, []);

  const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const selection = window.getSelection();
    if (!selection || !selection.anchorNode) return;

    const currentChar = e.key;
    const textContent = selection.anchorNode.textContent || '';
    
    // Check for bullet lists and numbered lists
    if (lastChar === '-' && currentChar === ' ') {
      const trimmedContent = textContent.trim();
      if (trimmedContent === '-') {
        e.preventDefault();
        document.execCommand('delete', false);
        document.execCommand('delete', false);
        document.execCommand('insertUnorderedList', false);
        handleSave();
      }
    }
    
    // Add checkbox list transformation
    if (lastChar === ']' && currentChar === ' ') {
      const trimmedContent = textContent.trim();
      if (trimmedContent === '[]') {
        e.preventDefault();
        document.execCommand('delete', false);
        document.execCommand('delete', false);
        document.execCommand('delete', false);
        execCommand('insertHTML', '<li style="list-style-type: none;"><label><input type="checkbox"><span contenteditable="true"> </span></label></li>');
      }
    }

    if (lastChar === '.' && currentChar === ' ') {
      const trimmedContent = textContent.trim();
      if (['1.'].includes(trimmedContent)) {
        e.preventDefault();
        // Delete the number and period
        document.execCommand('delete', false);
        document.execCommand('delete', false);
        document.execCommand('delete', false);
        document.execCommand('insertOrderedList', false);
        handleSave();
      }
    }

    // Update the last character typed
    setLastChar(currentChar);
  }, [lastChar, handleSave, execCommand]);

  const handleImageUpload = useCallback(async (file: File) => {
    // Create a local URL for the file
    const localUrl = URL.createObjectURL(file);
        
    // Insert the image HTML at cursor position
    execCommand('insertHTML', `<img src="${localUrl}" alt="Uploaded image" />`);

    // Optional: Clean up the object URL when the component unmounts
    return () => URL.revokeObjectURL(localUrl);

    // Replace this with your actual image upload API endpoint
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      
      // Insert the image HTML at cursor position
      execCommand('insertHTML', `<img src="${data.url}" alt="Uploaded image" />`);
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  }, [execCommand]);

  const copyAsXML = useCallback(() => {
    if (!editorRef.current) return;
    
    // Create a temporary element to manipulate the content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = editorRef.current.innerHTML;
    
    // Convert the HTML structure to XML-like format
    const processNode = (node: Element): string => {
      if (node.nodeType === 3) return node.textContent || ''; // Text node
      
      const tagName = node.tagName.toLowerCase();
      const attributes = Array.from(node.attributes)
        .map(attr => ` ${attr.name}="${attr.value}"`)
        .join('');
      
      if (node.children.length === 0) {
        const content = node.textContent?.trim() || '';
        return content ? `<${tagName}${attributes}>${content}</${tagName}>` : '';
      }
      
      const children = Array.from(node.children)
        .map(child => processNode(child as Element))
        .join('\n');
        
      return `<${tagName}${attributes}>\n${children}\n</${tagName}>`;
    };
    
    const xml = processNode(tempDiv);
    
    // Copy to clipboard
    navigator.clipboard.writeText(xml).then(() => {
      alert('Content copied as XML!');
    }).catch(err => {
      console.error('Failed to copy:', err);
      alert('Failed to copy content');
    });
  }, [editorRef]);

  

  return (
    <Container>
      <h1>Note</h1>
    </Container>
  );
};

export default NotePage;
