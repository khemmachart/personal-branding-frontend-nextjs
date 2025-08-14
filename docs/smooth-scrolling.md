# Smooth Scrolling Implementation

This project now includes custom smooth scrolling that handles navbar offset and provides smooth animations.

## Features

- ✅ **Navbar Offset**: Automatically calculates navbar height and adjusts scroll position
- ✅ **Smooth Animation**: Customizable duration and easing function  
- ✅ **Hash Link Support**: Works with anchor links like `/experience#contact` and `/experience#skills`
- ✅ **Browser Back/Forward**: Handles browser navigation correctly
- ✅ **Automatic Setup**: No manual configuration needed

## How It Works

### 1. SmoothScrollHandler Component
- Added to `app/layout.tsx`
- Automatically initializes smooth scrolling for the entire app
- Configurable settings:
  - `extraOffset`: Additional padding beyond navbar height (default: 20px)
  - `duration`: Animation duration in milliseconds (default: 1000ms)
  - `disableDefault`: Disable browser's default smooth scroll (default: true)

### 2. Scroll Utils (`lib/scroll-utils.ts`)
- `scrollToElement()`: Programmatic smooth scrolling to any element
- `handleHashNavigation()`: Handle hash link navigation
- `initializeHashNavigation()`: Set up automatic hash link handling
- `getNavbarHeight()`: Dynamically calculate navbar height

### 3. Menu Component Updates
- Added `data-navbar="true"` attribute for height detection
- No other changes needed

## Configuration

### Current Settings
```tsx
<SmoothScrollHandler 
  extraOffset={20}      // 20px extra padding
  duration={1000}       // 1 second animation
  disableDefault={true} // Override browser default
/>
```

### Customizing Scroll Behavior

You can adjust the settings in `app/layout.tsx`:

```tsx
// Faster scrolling
<SmoothScrollHandler duration={600} />

// More padding
<SmoothScrollHandler extraOffset={40} />

// Keep browser default + custom
<SmoothScrollHandler disableDefault={false} />
```

## Testing

### Manual Testing
1. Click on "Experience" or "Skills" in the navigation
2. Scroll should animate smoothly to the target section
3. Content should not be hidden behind the navbar
4. Use browser back/forward buttons to test history handling

### Test Component
Use `ScrollTestButton` for debugging:

```tsx
import { ScrollTestButton } from '@/components/ScrollTestButton';

<ScrollTestButton targetId="contact">
  Scroll to Contact
</ScrollTestButton>
```

## Navigation Hash Links

The navigation configuration in `config/navigation.ts` includes hash links:

```typescript
{ 
  paths: ['/experience#contact'], 
  label: 'Experience',
  description: 'Work experience and career timeline'
},
{
  paths: ['/experience#skills'],
  label: 'Skills', 
  description: 'Skills and competencies'
},
```

These automatically work with the smooth scrolling system.

## Browser Compatibility

- ✅ Chrome/Safari/Firefox: Full support
- ✅ Mobile browsers: Supported  
- ✅ Fallback: Uses browser default if JavaScript fails

## Troubleshooting

### Scroll Not Working
1. Check that target elements have correct `id` attributes
2. Verify `data-navbar="true"` is on navbar element
3. Check browser console for errors

### Wrong Scroll Position
1. Adjust `extraOffset` in SmoothScrollHandler
2. Check if navbar height changes dynamically
3. Verify CSS doesn't interfere with positioning

### Animation Too Fast/Slow
- Adjust `duration` prop in SmoothScrollHandler
- Default: 1000ms (1 second)
- Recommended range: 600-1200ms
