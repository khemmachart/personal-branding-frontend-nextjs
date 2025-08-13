import React, { useState } from 'react';
import Head from 'next/head';
import {
  // Layout Components
  PageLayout,
  Container,
  Header,
  Main,
  Section,
  Grid,
  GridItem,
  Flex,
  Stack,
  Inline,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardGrid,
  
  // Compact Card Components
  CompactCard,
  CompactCardThumbnail,
  CompactCardContent,
  CompactCardMeta,
  CompactCardActions,
  CompactCardBadge,
  CompactCardList,
  
  // Typography Components
  H1,
  H2,
  H3,
  H4,
  Body,
  BodyLarge,
  Caption,
  Link,
  Code,
  Strong,
  Em,
  Muted,
  
  // Button Components
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  
  // Input Components
  Input,
  Textarea,
  Select,
  InputGroup,
  InputLabel,
  HelperText,
  SearchInput,
  FileUploadArea,
  FileUploadText,
  Checkbox,
  Radio,
  FormGroup,
  FormItem,
  FormItemLabel,
  
  // Design Tokens
  colors,
  spacing,
  typography,
  
  // Box utility
  Box,
  Divider,
  Spacer,
  
  // Custom Components
  QuoteBlock,
  QuoteBody,
} from '../../components/design-system';

const DividerExamples = () => (
  <Section>
    <H2>Divider</H2>
    {/* Divider Examples */}
    <Card padding="large">
        <H3>Divider Examples</H3>
        <Stack gap="large">
          
          <div>
            <H4>Horizontal Dividers</H4>
            <Body>Content above the divider</Body>
            <Divider />
            <Body>Content below the divider</Body>
          </div>
          
          <div>
            <H4>Dividers with Spacing</H4>
            <Body>Section 1 content</Body>
            <Spacer size="medium" />
            <Divider />
            <Spacer size="medium" />
            <Body>Section 2 content</Body>
          </div>
          
          <div>
            <H4>Dividers with Custom Styling</H4>
            <Body>You can style dividers using the style prop:</Body>
            <Spacer size="small" />
            <Divider style={{ borderColor: colors.accentBlue, borderWidth: '2px' }} />
            <Spacer size="small" />
            <Body>This divider has a custom color and thickness.</Body>
          </div>
        </Stack>
      </Card>
  </Section>
);

// Color Palette Component
const ColorPalette = () => (
  <Section>
    <H2>Color Palette</H2>
    <Grid columns={3} gap="medium">
      {Object.entries(colors).map(([name, value]) => (
        <Card key={name} padding="medium">
          <Flex align="center" gap="medium">
            <Box
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: value,
                border: `1px solid ${colors.lightGray}`,
                borderRadius: '8px',
              }}
            />
            <Stack gap="small">
              <Strong>{name}</Strong>
              <Code>{value}</Code>
            </Stack>
          </Flex>
        </Card>
      ))}
    </Grid>
  </Section>
);

// Typography Examples
const TypographyExamples = () => (
  <Section>
    <H2>Typography</H2>
    <Grid columns={1} gap="large">
      <Card padding="large">
        <Stack gap="large">
          <div>
            <H1>Heading 1 - Main pages/articles</H1>
            <Body>This is the largest heading, used for main page titles and article headlines.</Body>
          </div>
          
          <div>
            <H2>Heading 2 - Content headings</H2>
            <Body>Secondary headings for major content sections.</Body>
          </div>
          
          <div>
            <H3>Heading 3 - Section subheadings</H3>
            <Body>Tertiary headings for subsections within content areas.</Body>
          </div>
          
          <div>
            <H4>Heading 4 - Minor headings</H4>
            <Body>Smaller headings for detailed sections.</Body>
          </div>
          
          <div>
            <BodyLarge>Body Large - Emphasized content</BodyLarge>
            <Body>Body - Standard paragraph text with optimal readability.</Body>
            <Caption>Caption - Small details and metadata</Caption>
          </div>
          
          <div>
            <Body>
              Text can include <Link href="#">links</Link>, <Strong>bold text</Strong>, 
              <Em> italic text</Em>, <Muted>muted text</Muted>, and <Code>inline code</Code>.
            </Body>
          </div>
        </Stack>
      </Card>
    </Grid>
  </Section>
);

// Button Examples
const ButtonExamples = () => {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Section>
      <H2>Buttons</H2>
      <Grid columns={2} gap="large">
        <Card padding="large">
          <Stack gap="medium">
            <H3>Button Variants</H3>
            <Inline gap="medium">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="text">Text</Button>
              <Button variant="danger">Danger</Button>
            </Inline>
          </Stack>
        </Card>
        
        <Card padding="large">
          <Stack gap="medium">
            <H3>Button Sizes</H3>
            <Inline gap="medium">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </Inline>
          </Stack>
        </Card>
        
        <Card padding="large">
          <Stack gap="medium">
            <H3>Button States</H3>
            <Inline gap="medium">
                             <Button loading={loading} onClick={handleLoadingClick}>
                 {loading ? 'Loading...' : 'Click to Load'}
               </Button>
               <Button disabled>Disabled</Button>
            </Inline>
          </Stack>
        </Card>
        
        <Card padding="large">
          <Stack gap="medium">
            <H3>Button Groups & Toggle</H3>
            <ButtonGroup>
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Center</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
            <Spacer size="small" />
            <ToggleButton
              variant="secondary"
              active={toggle}
              onClick={() => setToggle(!toggle)}
            >
              Toggle ({toggle ? 'On' : 'Off'})
            </ToggleButton>
          </Stack>
        </Card>
      </Grid>
    </Section>
  );
};

// Input Examples
const InputExamples = () => {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    textarea: '',
    select: '',
    search: '',
    checkbox: false,
    radio: 'option1',
  });

  const [inputState, setInputState] = useState<'default' | 'error' | 'success'>('default');

  return (
    <Section>
      <H2>Form Inputs</H2>
      <Grid columns={2} gap="large">
        <Card padding="large">
          <Stack gap="medium">
            <H3>Text Inputs</H3>
            
            <InputGroup>
              <InputLabel required>Text Input</InputLabel>
              <Input
                value={formData.text}
                onChange={(e) => setFormData({...formData, text: e.target.value})}
                placeholder="Enter text..."
                state={inputState}
              />
              <HelperText state={inputState}>
                {inputState === 'error' ? 'This field is required' : 'Helper text goes here'}
              </HelperText>
            </InputGroup>
            
            <InputGroup>
              <InputLabel>Email Input</InputLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter email..."
              />
            </InputGroup>
            
            <InputGroup>
              <InputLabel>Search Input</InputLabel>
              <SearchInput
                value={formData.search}
                onChange={(e) => setFormData({...formData, search: e.target.value})}
                placeholder="Search..."
              />
            </InputGroup>
            
            <Inline gap="small">
              <Button 
                size="small" 
                variant="secondary"
                onClick={() => setInputState('default')}
              >
                Default
              </Button>
              <Button 
                size="small" 
                variant="secondary"
                onClick={() => setInputState('error')}
              >
                Error
              </Button>
              <Button 
                size="small" 
                variant="secondary"
                onClick={() => setInputState('success')}
              >
                Success
              </Button>
            </Inline>
          </Stack>
        </Card>
        
        <Card padding="large">
          <Stack gap="medium">
            <H3>Other Inputs</H3>
            
            <InputGroup>
              <InputLabel>Textarea</InputLabel>
              <Textarea
                value={formData.textarea}
                onChange={(e) => setFormData({...formData, textarea: e.target.value})}
                placeholder="Enter longer text..."
                rows={4}
              />
            </InputGroup>
            
            <InputGroup>
              <InputLabel>Select</InputLabel>
              <Select
                value={formData.select}
                onChange={(e) => setFormData({...formData, select: e.target.value})}
              >
                <option value="">Choose an option...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </InputGroup>
            
            <FormGroup>
              <FormItem>
                <Checkbox
                  checked={formData.checkbox}
                  onChange={(e) => setFormData({...formData, checkbox: e.target.checked})}
                />
                <FormItemLabel>Checkbox option</FormItemLabel>
              </FormItem>
            </FormGroup>
            
            <FormGroup>
              <FormItem>
                <Radio
                  name="radio-group"
                  value="option1"
                  checked={formData.radio === 'option1'}
                  onChange={(e) => setFormData({...formData, radio: e.target.value})}
                />
                <FormItemLabel>Radio Option 1</FormItemLabel>
              </FormItem>
              <FormItem>
                <Radio
                  name="radio-group"
                  value="option2"
                  checked={formData.radio === 'option2'}
                  onChange={(e) => setFormData({...formData, radio: e.target.value})}
                />
                <FormItemLabel>Radio Option 2</FormItemLabel>
              </FormItem>
            </FormGroup>
          </Stack>
        </Card>
      </Grid>
    </Section>
  );
};

// Card Examples
const CardExamples = () => (
  <Section>
    <H2>Cards</H2>
    <CardGrid gap="large" minWidth="300px">
      <Card variant="default" padding="medium">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            This is a default card with soft shadow and white background.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button size="small">Action</Button>
        </CardFooter>
      </Card>
      
      <Card variant="elevated" padding="medium">
        <CardContent>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>
            This card has a more prominent shadow for emphasis.
          </CardDescription>
        </CardContent>
      </Card>
      
      <Card variant="outlined" padding="medium">
        <CardContent>
          <CardTitle>Outlined Card</CardTitle>
          <CardDescription>
            This card uses a border instead of shadow.
          </CardDescription>
        </CardContent>
      </Card>
      
      <Card variant="filled" padding="medium">
        <CardContent>
          <CardTitle>Filled Card</CardTitle>
          <CardDescription>
            This card has a subtle background fill.
          </CardDescription>
        </CardContent>
      </Card>
      
      <Card variant="default" interactive padding="medium">
        <CardContent>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>
            This card responds to hover and can be clicked.
          </CardDescription>
        </CardContent>
      </Card>
      
      <Card variant="default" padding="medium">
        <CardContent>
          <CardTitle>Content Card</CardTitle>
          <CardDescription>
            Cards can contain various types of content including text, images, and actions.
          </CardDescription>
          <Spacer size="medium" />
          <Inline gap="small">
            <Button size="small" variant="primary">Primary</Button>
            <Button size="small" variant="secondary">Secondary</Button>
          </Inline>
        </CardContent>
      </Card>
    </CardGrid>
  </Section>
);

// Compact Card Examples
const CompactCardExamples = () => (
  <Section>
    <H2>Compact Cards</H2>
    <Stack gap="large">

      {/* Vertical Layout Examples */}
      <Card padding="large">
        <H3>Vertical Layout - Grid View</H3>
        <Grid columns={3} gap="medium">
          <CompactCard layout="vertical" variant="outlined" interactive>
            <CompactCardThumbnail size="large" style={{ width: '100%', height: '120px', marginBottom: spacing.sm }}>
              <Box background="sage" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <H3 style={{ margin: 0 }}>📊</H3>
              </Box>
            </CompactCardThumbnail>
            <CompactCardContent>
              <CardTitle>Sales Report</CardTitle>
              <CardDescription>Monthly sales performance analysis with key metrics and trends.</CardDescription>
              <CompactCardMeta>
                <span>3 days ago</span>
                <CompactCardBadge variant="success">Published</CompactCardBadge>
              </CompactCardMeta>
            </CompactCardContent>
          </CompactCard>
          
          <CompactCard layout="vertical" variant="outlined" interactive>
            <CompactCardThumbnail size="large" style={{ width: '100%', height: '120px', marginBottom: spacing.sm }}>
              <Box background="sage" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <H3 style={{ margin: 0 }}>🎯</H3>
              </Box>
            </CompactCardThumbnail>
            <CompactCardContent>
              <CardTitle>Marketing Strategy</CardTitle>
              <CardDescription>Comprehensive plan for the upcoming marketing campaign across multiple channels.</CardDescription>
              <CompactCardMeta>
                <span>1 week ago</span>
                <CompactCardBadge variant="warning">Review</CompactCardBadge>
              </CompactCardMeta>
            </CompactCardContent>
          </CompactCard>
          
          <CompactCard layout="vertical" variant="outlined" interactive>
            <CompactCardThumbnail size="large" style={{ width: '100%', height: '120px', marginBottom: spacing.sm }}>
              <Box background="sage" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <H3 style={{ margin: 0 }}>📚</H3>
              </Box>
            </CompactCardThumbnail>
            <CompactCardContent>
              <CardTitle>Study Notes</CardTitle>
              <CardDescription>Comprehensive notes from the advanced JavaScript course covering modern ES6+ features.</CardDescription>
              <CompactCardMeta>
                <span>2 weeks ago</span>
                <CompactCardBadge variant="default">Archive</CompactCardBadge>
              </CompactCardMeta>
            </CompactCardContent>
          </CompactCard>
        </Grid>
      </Card>
      
      {/* Horizontal Layout Examples */}
      <Card padding="large">
        <H3>Horizontal Layout - Item Listings</H3>
        <CompactCardList gap="medium">
          <CompactCard layout="horizontal" variant="default" interactive>
            <CompactCardThumbnail size="medium">
              <Box background="sage" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Caption>📄</Caption>
              </Box>
            </CompactCardThumbnail>
            <CompactCardContent>
              <CardTitle>Meeting Notes - Q4 Planning</CardTitle>
              <CardDescription>Quarterly planning session with stakeholders to discuss upcoming projects and resource allocation.</CardDescription>
              <CompactCardMeta>
                <span>Dec 15, 2023</span>
                <span>•</span>
                <span>Work</span>
                <CompactCardBadge variant="success">Completed</CompactCardBadge>
              </CompactCardMeta>
            </CompactCardContent>
            <CompactCardActions>
              <Button size="small" variant="text">Edit</Button>
              <Button size="small" variant="text">Share</Button>
            </CompactCardActions>
          </CompactCard>
          
          <CompactCard layout="horizontal" variant="default" interactive>
            <CompactCardThumbnail size="medium">
              <Box background="sage" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Caption>📋</Caption>
              </Box>
            </CompactCardThumbnail>
            <CompactCardContent>
              <CardTitle>Project Proposal - Mobile App</CardTitle>
              <CardDescription>Detailed proposal for developing a new mobile application with user requirements and technical specifications.</CardDescription>
              <CompactCardMeta>
                <span>Dec 10, 2023</span>
                <span>•</span>
                <span>Projects</span>
                <CompactCardBadge variant="warning">In Progress</CompactCardBadge>
              </CompactCardMeta>
            </CompactCardContent>
            <CompactCardActions>
              <Button size="small" variant="text">Edit</Button>
              <Button size="small" variant="text">Share</Button>
            </CompactCardActions>
          </CompactCard>
          
          <CompactCard layout="horizontal" variant="default" interactive>
            <CompactCardThumbnail size="medium">
              <Box background="sage" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Caption>💡</Caption>
              </Box>
            </CompactCardThumbnail>
            <CompactCardContent>
              <CardTitle>Ideas for Weekend Trip</CardTitle>
              <CardDescription>Collection of ideas and plans for a weekend getaway including destinations, activities, and budget considerations.</CardDescription>
              <CompactCardMeta>
                <span>Dec 8, 2023</span>
                <span>•</span>
                <span>Personal</span>
                <CompactCardBadge variant="default">Draft</CompactCardBadge>
              </CompactCardMeta>
            </CompactCardContent>
            <CompactCardActions>
              <Button size="small" variant="text">Edit</Button>
              <Button size="small" variant="text">Share</Button>
            </CompactCardActions>
          </CompactCard>
        </CompactCardList>
      </Card>
      
      {/* Compact List with Small Thumbnails */}
      <Card padding="large">
        <H3>Compact List - Small Thumbnails</H3>
        <CompactCardList gap="small">
          <CompactCard layout="horizontal" variant="filled" interactive>
            <CompactCardThumbnail size="small">
              <Box background="sage" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Caption style={{ fontSize: '18px' }}>📝</Caption>
              </Box>
            </CompactCardThumbnail>
            <CompactCardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <CardTitle style={{ marginBottom: '2px' }}>Daily Standup Notes</CardTitle>
                <CompactCardMeta style={{ marginTop: 0 }}>
                  <span>Today, 9:30 AM</span>
                  <CompactCardBadge variant="success">Active</CompactCardBadge>
                </CompactCardMeta>
              </div>
              <Button size="small" variant="text">Open</Button>
            </CompactCardContent>
          </CompactCard>
          
          <CompactCard layout="horizontal" variant="filled" interactive>
            <CompactCardThumbnail size="small">
              <Box background="sage" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Caption style={{ fontSize: '18px' }}>🎨</Caption>
              </Box>
            </CompactCardThumbnail>
            <CompactCardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <CardTitle style={{ marginBottom: '2px' }}>Design System Guidelines</CardTitle>
                <CompactCardMeta style={{ marginTop: 0 }}>
                  <span>Yesterday, 3:15 PM</span>
                  <CompactCardBadge variant="warning">Updated</CompactCardBadge>
                </CompactCardMeta>
              </div>
              <Button size="small" variant="text">Open</Button>
            </CompactCardContent>
          </CompactCard>
          
          <CompactCard layout="horizontal" variant="filled" interactive>
            <CompactCardThumbnail size="small">
              <Box background="sage" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Caption style={{ fontSize: '18px' }}>🚀</Caption>
              </Box>
            </CompactCardThumbnail>
            <CompactCardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <CardTitle style={{ marginBottom: '2px' }}>Product Launch Checklist</CardTitle>
                <CompactCardMeta style={{ marginTop: 0 }}>
                  <span>Dec 12, 2023</span>
                  <CompactCardBadge variant="default">Draft</CompactCardBadge>
                </CompactCardMeta>
              </div>
              <Button size="small" variant="text">Open</Button>
            </CompactCardContent>
          </CompactCard>
        </CompactCardList>
      </Card>
      
    </Stack>
  </Section>
);

// Layout Examples
const LayoutExamples = () => (
  <Section>
    <H2>Layout Components</H2>
    <Stack gap="large">
      <Card padding="large">
        <H3>Grid System</H3>
        <Grid columns={4} gap="medium">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Box
              key={item}
              padding="medium"
              background="sage"
              rounded
              style={{ textAlign: 'center' }}
            >
              <Body>Grid Item {item}</Body>
            </Box>
          ))}
        </Grid>
      </Card>

      {/* GridItem Examples */}
      <Card padding="large">
        <H3>GridItem Examples</H3>
        <Grid columns={3} gap="medium">
          <GridItem>
            <Box padding="medium" background="sage" rounded>
              <H4>GridItem 1</H4>
              <Body>This is a standard GridItem that automatically sizes based on the grid.</Body>
            </Box>
          </GridItem>
          
          <GridItem>
            <Box padding="medium" background="sage" rounded>
              <H4>GridItem 2</H4>
              <Body>GridItems can contain any content and will maintain consistent spacing.</Body>
            </Box>
          </GridItem>
          
          <GridItem>
            <Box padding="medium" background="sage" rounded>
              <H4>GridItem 3</H4>
              <Body>Perfect for creating responsive layouts with consistent spacing.</Body>
            </Box>
          </GridItem>
        </Grid>
        
        <Spacer size="medium" />
        
        <Grid columns={2} gap="large">
          <GridItem>
            <Box padding="large" background="sage" rounded>
              <H3>Wide GridItem</H3>
              <Body>This GridItem spans half the container width in a 2-column grid.</Body>
              <Spacer size="small" />
              <Button size="small" variant="primary">Action</Button>
            </Box>
          </GridItem>
          
          <GridItem>
            <Box padding="large" background="sage" rounded>
              <H3>Another Wide GridItem</H3>
              <Body>GridItems automatically adjust their height to match the tallest item in the row.</Body>
              <Spacer size="small" />
              <Button size="small" variant="secondary">Secondary Action</Button>
            </Box>
          </GridItem>
        </Grid>
      </Card>

      <Card padding="large">
        <H3>Flex Layouts</H3>
        <Stack gap="medium">
          <div>
            <Caption>Horizontal with space between:</Caption>
            <Flex justify="between" align="center">
              <Box padding="small" background="sage" rounded>
                <Caption>Left</Caption>
              </Box>
              <Box padding="small" background="sage" rounded>
                <Caption>Center</Caption>
              </Box>
              <Box padding="small" background="sage" rounded>
                <Caption>Right</Caption>
              </Box>
            </Flex>
          </div>
          
          <div>
            <Caption>Vertical stack:</Caption>
            <Stack gap="small">
              <Box padding="small" background="sage" rounded>
                <Caption>Item 1</Caption>
              </Box>
              <Box padding="small" background="sage" rounded>
                <Caption>Item 2</Caption>
              </Box>
              <Box padding="small" background="sage" rounded>
                <Caption>Item 3</Caption>
              </Box>
            </Stack>
          </div>
        </Stack>
      </Card>
    </Stack>
  </Section>
);

// File Upload Example
const FileUploadExample = () => {
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <Section>
      <H2>File Upload</H2>
      <Card padding="large">
        <FileUploadArea
          isDragOver={isDragOver}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragOver(false);
            // Handle file drop
          }}
        >
          <FileUploadText>
            {isDragOver ? 'Drop files here' : 'Drag and drop files here or click to browse'}
          </FileUploadText>
        </FileUploadArea>
      </Card>
    </Section>
  );
};

const QuoteBlockExample = () => (
  <Section>
    <H2>Quote Block</H2>
    <Card padding="large">
      <QuoteBlock>
        <QuoteBody>This is a quote.</QuoteBody>
      </QuoteBlock>
    </Card>
  </Section>
);

// Main Examples Page
const ExamplesPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Styled Components Design System Examples</title>
        <meta name="description" content="Comprehensive examples of the styled-components design system" />
      </Head>
      
      <Header background sticky>
        <Container>
          <Flex justify="between" align="center" style={{ padding: `${spacing.lg} 0` }}>
            <H3 style={{ margin: 0 }}>Design System Examples</H3>
            <Button size="small" variant="secondary">
              View Code
            </Button>
          </Flex>
        </Container>
      </Header>
      
      <Main>
        <Container maxWidth="container">
          <Section spacing="large">
            <Stack gap="large">
              <div style={{ textAlign: 'center' }}>
                <H1>Styled Components Design System</H1>
                <BodyLarge>
                  A comprehensive showcase of the note-taking app design system built with styled-components.
                </BodyLarge>
                <Caption>https://chatgpt.com/c/6860c6b4-8650-8008-a81c-4139d6287339</Caption>
              </div>
            </Stack>
          </Section>
          
          <ColorPalette />
          <TypographyExamples />
          <ButtonExamples />
          <InputExamples />
          <CardExamples />
          <CompactCardExamples />
          <LayoutExamples />
          <FileUploadExample />
          <QuoteBlockExample />
          <DividerExamples />
          <Section>
            <Card padding="large">
              <H2>Usage Example</H2>
              <Body>
                Import components from the design system:
              </Body>
              <Box background="sage" padding="medium" rounded style={{ marginTop: spacing.md }}>
                <Code style={{ display: 'block', whiteSpace: 'pre-wrap' }}>
{`import {
  Button,
  Card,
  CardContent,
  H1,
  Body,
  Container
} from '../components/design-system';

const MyComponent = () => (
  <Container>
    <Card padding="large">
      <CardContent>
        <H1>Hello World</H1>
        <Body>This is built with our design system.</Body>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  </Container>
);`}
                </Code>
              </Box>
            </Card>
          </Section>
        </Container>
      </Main>
    </PageLayout>
  );
};

export default ExamplesPage;
