import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import {
  Button,
  IconButton,
  Chip,
  Tag,
  Card,
  TextField,
  AppBar,
  ChatBubble,
  Modal,
  BottomSheet,
  MessageCard,
  Nudge,
  MediaUpload
} from './components'

// Color palette display component
function ColorSwatch({ name, color, textDark = false }: { name: string; color: string; textDark?: boolean }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full h-16 rounded-lg shadow-sm border border-clara-grey-200 flex items-end p-2"
        style={{ backgroundColor: color }}
      >
        <span className={`text-xs font-medium ${textDark ? 'text-clara-grey-900' : 'text-white'}`}>
          {name}
        </span>
      </div>
      <span className="text-xs text-clara-grey-500 mt-1">{color}</span>
    </div>
  )
}

// Navigation component
function Sidebar() {
  const location = useLocation()
  const navItems = [
    { path: '/', label: 'Overview' },
    { path: '/colors', label: 'Colors' },
    { path: '/typography', label: 'Typography' },
    { path: '/buttons', label: 'Buttons' },
    { path: '/inputs', label: 'Inputs' },
    { path: '/cards', label: 'Cards' },
    { path: '/chat', label: 'Chat' },
    { path: '/overlays', label: 'Overlays' },
    { path: '/misc', label: 'Miscellaneous' }
  ]

  return (
    <nav className="w-64 bg-white border-r border-clara-grey-200 p-4 flex flex-col gap-1 h-screen sticky top-0">
      <div className="flex items-center gap-2 mb-6 px-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-clara-blue-400 to-clara-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">C</span>
        </div>
        <span className="text-lg font-semibold text-clara-grey-900">Clara Design System</span>
      </div>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            location.pathname === item.path
              ? 'bg-clara-blue-100 text-clara-blue-700'
              : 'text-clara-grey-600 hover:bg-clara-grey-100'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

// Page wrapper
function PageWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-clara-grey-900 mb-8">{title}</h1>
      {children}
    </div>
  )
}

// Section wrapper
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-clara-grey-800 mb-4 pb-2 border-b border-clara-grey-200">
        {title}
      </h2>
      {children}
    </section>
  )
}

// Overview Page
function OverviewPage() {
  return (
    <PageWrapper title="Overview">
      <div className="prose max-w-none">
        <p className="text-lg text-clara-grey-600 mb-8">
          Clara Design System is a comprehensive component library built with React, TypeScript, and Tailwind CSS.
          It provides a consistent and beautiful UI foundation for building modern web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-clara-blue-100 rounded-xl">
            <h3 className="text-lg font-semibold text-clara-blue-900 mb-2">12+ Components</h3>
            <p className="text-sm text-clara-blue-700">
              From buttons to modals, all the building blocks you need.
            </p>
          </div>
          <div className="p-6 bg-clara-green-100 rounded-xl">
            <h3 className="text-lg font-semibold text-clara-green-900 mb-2">Accessible</h3>
            <p className="text-sm text-clara-green-700">
              Built with accessibility in mind, following WCAG guidelines.
            </p>
          </div>
          <div className="p-6 bg-clara-purple-100 rounded-xl">
            <h3 className="text-lg font-semibold text-clara-purple-900 mb-2">Customizable</h3>
            <p className="text-sm text-clara-purple-700">
              Easily customize with CSS variables and Tailwind utilities.
            </p>
          </div>
        </div>

        <Section title="Quick Start">
          <pre className="bg-clara-grey-900 text-clara-grey-100 p-4 rounded-lg text-sm overflow-x-auto">
{`import { Button, Card, TextField } from './components'

function App() {
  return (
    <div>
      <Button variant="primary">Get Started</Button>
      <Card title="Product Name" price="$29.99" />
      <TextField placeholder="Search..." />
    </div>
  )
}`}
          </pre>
        </Section>

        <Section title="Component Preview">
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Chip>Default Chip</Chip>
            <Chip selected>Selected</Chip>
            <Tag type="bestseller" />
            <Tag type="doctors-choice" />
          </div>
        </Section>
      </div>
    </PageWrapper>
  )
}

// Colors Page
function ColorsPage() {
  const blueColors = [
    { name: 'Blue 100', color: '#F0F7FF', textDark: true },
    { name: 'Blue 200', color: '#D1E6FE', textDark: true },
    { name: 'Blue 300', color: '#A3CCFD', textDark: true },
    { name: 'Blue 400', color: '#52AFFC', textDark: false },
    { name: 'Blue 500', color: '#2071F9', textDark: false },
    { name: 'Blue 600', color: '#2071F9', textDark: false },
    { name: 'Blue 700', color: '#1A5CD4', textDark: false },
    { name: 'Blue 800', color: '#1447A8', textDark: false },
    { name: 'Blue 900', color: '#0D2E70', textDark: false }
  ]

  const greyColors = [
    { name: 'Grey 50', color: '#FAFAFA', textDark: true },
    { name: 'Grey 100', color: '#F5F5F5', textDark: true },
    { name: 'Grey 200', color: '#E8E8E8', textDark: true },
    { name: 'Grey 300', color: '#D9D9D9', textDark: true },
    { name: 'Grey 400', color: '#BFBFBF', textDark: true },
    { name: 'Grey 500', color: '#8C8C8C', textDark: false },
    { name: 'Grey 600', color: '#595959', textDark: false },
    { name: 'Grey 700', color: '#4B4B4B', textDark: false },
    { name: 'Grey 800', color: '#262626', textDark: false },
    { name: 'Grey 900', color: '#141414', textDark: false }
  ]

  const semanticColors = [
    { name: 'Red 500', color: '#F92020', textDark: false },
    { name: 'Orange 500', color: '#F97120', textDark: false },
    { name: 'Yellow 500', color: '#F9B820', textDark: true },
    { name: 'Green 500', color: '#20F971', textDark: true },
    { name: 'Purple 500', color: '#7120F9', textDark: false }
  ]

  return (
    <PageWrapper title="Colors">
      <Section title="Primary - Blue">
        <div className="grid grid-cols-5 gap-4">
          {blueColors.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
      </Section>

      <Section title="Neutrals - Grey">
        <div className="grid grid-cols-5 gap-4">
          {greyColors.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
      </Section>

      <Section title="Semantic Colors">
        <div className="grid grid-cols-5 gap-4">
          {semanticColors.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
      </Section>
    </PageWrapper>
  )
}

// Typography Page
function TypographyPage() {
  return (
    <PageWrapper title="Typography">
      <Section title="Headings">
        <div className="space-y-6">
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Display XXL - 56px / Semibold</p>
            <h1 className="text-[56px] font-semibold leading-tight">Clara Design System</h1>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Display XL - 48px / Semibold</p>
            <h1 className="text-5xl font-semibold">Clara Design System</h1>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Heading L - 36px / Semibold</p>
            <h2 className="text-4xl font-semibold">Clara Design System</h2>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Heading M - 24px / Semibold</p>
            <h3 className="text-2xl font-semibold">Clara Design System</h3>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Heading S - 20px / Semibold</p>
            <h4 className="text-xl font-semibold">Clara Design System</h4>
          </div>
        </div>
      </Section>

      <Section title="Body Text">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Body Large - 18px / Regular</p>
            <p className="text-lg">The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Body Medium - 16px / Regular</p>
            <p className="text-base">The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Body Small - 14px / Regular</p>
            <p className="text-sm">The quick brown fox jumps over the lazy dog.</p>
          </div>
        </div>
      </Section>

      <Section title="Labels">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Label Large - 14px / Semibold</p>
            <p className="text-sm font-semibold">Label Text</p>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Label Small - 12px / Medium</p>
            <p className="text-xs font-medium">Label Text</p>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Label XS - 10px / Medium</p>
            <p className="text-[10px] font-medium">Label Text</p>
          </div>
        </div>
      </Section>

      <Section title="Font Weights">
        <div className="flex gap-8">
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Regular (400)</p>
            <p className="text-xl font-normal">Aa Bb Cc</p>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Medium (500)</p>
            <p className="text-xl font-medium">Aa Bb Cc</p>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Semibold (600)</p>
            <p className="text-xl font-semibold">Aa Bb Cc</p>
          </div>
          <div>
            <p className="text-xs text-clara-grey-500 mb-1">Bold (700)</p>
            <p className="text-xl font-bold">Aa Bb Cc</p>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}

// Buttons Page
function ButtonsPage() {
  return (
    <PageWrapper title="Buttons">
      <Section title="Button Variants">
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </Section>

      <Section title="Button States">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Default</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" state="default">Primary</Button>
              <Button variant="secondary" state="default">Secondary</Button>
              <Button variant="tertiary" state="default">Tertiary</Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Pressed</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" state="pressed">Primary</Button>
              <Button variant="secondary" state="pressed">Secondary</Button>
              <Button variant="tertiary" state="pressed">Tertiary</Button>
            </div>
          </div>
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Disabled</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" state="disabled">Primary</Button>
              <Button variant="secondary" state="disabled">Secondary</Button>
              <Button variant="tertiary" state="disabled">Tertiary</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Button Sizes">
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" size="lg">Large Button</Button>
          <Button variant="primary" size="sm">Small Button</Button>
        </div>
      </Section>

      <Section title="Buttons with Icons">
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary" leftIcon>Left Icon</Button>
          <Button variant="primary" rightIcon>Right Icon</Button>
          <Button variant="primary" leftIcon rightIcon>Both Icons</Button>
        </div>
      </Section>

      <Section title="Icon Buttons">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Variants</p>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton variant="primary" icon="share" />
              <IconButton variant="secondary" icon="add" />
              <IconButton variant="tertiary" icon="close" />
            </div>
          </div>
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Shapes</p>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton variant="primary" shape="round" icon="share" />
              <IconButton variant="primary" shape="oval" icon="share" />
            </div>
          </div>
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Sizes</p>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton variant="primary" size="sm" icon="share" />
              <IconButton variant="primary" size="md" icon="share" />
              <IconButton variant="primary" size="lg" icon="share" />
            </div>
          </div>
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">All Icons</p>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton variant="secondary" icon="share" />
              <IconButton variant="secondary" icon="add" />
              <IconButton variant="secondary" icon="arrow" />
              <IconButton variant="secondary" icon="close" />
              <IconButton variant="secondary" icon="scan" />
              <IconButton variant="secondary" icon="chat" />
              <IconButton variant="secondary" icon="back" />
            </div>
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}

// Inputs Page
function InputsPage() {
  const [textValue, setTextValue] = useState('')

  return (
    <PageWrapper title="Inputs">
      <Section title="Text Field">
        <div className="space-y-6 max-w-md">
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Default</p>
            <TextField
              placeholder="Ask me anything..."
              value={textValue}
              onChange={setTextValue}
            />
          </div>
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Focused</p>
            <TextField
              placeholder="Ask me anything..."
              state="focused"
            />
          </div>
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Typing</p>
            <TextField
              placeholder="Ask me anything..."
              value="What skincare routine do you recommend?"
              state="typing"
            />
          </div>
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Disabled</p>
            <TextField
              placeholder="Ask me anything..."
              state="disabled"
            />
          </div>
        </div>
      </Section>

      <Section title="Upload Media">
        <div className="max-w-md">
          <TextField state="upload-media" />
        </div>
      </Section>

      <Section title="Chips">
        <div className="flex flex-wrap gap-3">
          <Chip>Skincare</Chip>
          <Chip>Acne</Chip>
          <Chip selected>Anti-aging</Chip>
          <Chip>Sunscreen</Chip>
          <Chip selected>Moisturizer</Chip>
        </div>
      </Section>
    </PageWrapper>
  )
}

// Cards Page
function CardsPage() {
  const [quantity1, setQuantity1] = useState(0)
  const [quantity2, setQuantity2] = useState(2)

  return (
    <PageWrapper title="Cards">
      <Section title="Vertical Product Cards">
        <div className="flex flex-wrap gap-4">
          <Card
            title="Clinikally SunProtect Sunscreen SPF 50"
            subtitle="Clinikally"
            price="Rs. 599"
            originalPrice="Rs. 799"
            image="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop"
            tags={['bestseller']}
            quantity={quantity1}
            onAdd={() => setQuantity1(q => q + 1)}
            onRemove={() => setQuantity1(q => Math.max(0, q - 1))}
          />
          <Card
            title="Hydrating Face Serum"
            subtitle="SkinCare Pro"
            price="Rs. 899"
            image="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop"
            tags={['doctors-choice']}
            quantity={quantity2}
            onAdd={() => setQuantity2(q => q + 1)}
            onRemove={() => setQuantity2(q => Math.max(0, q - 1))}
          />
        </div>
      </Section>

      <Section title="Horizontal Product Cards">
        <div className="space-y-4 max-w-md">
          <Card
            variant="horizontal"
            title="Clinikally SunProtect Sunscreen SPF 50"
            subtitle="Clinikally"
            price="Rs. 599"
            originalPrice="Rs. 799"
            image="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop"
            tags={['bestseller']}
            quantity={1}
            onAdd={() => {}}
            onRemove={() => {}}
          />
          <Card
            variant="horizontal"
            title="Hydrating Face Serum"
            subtitle="SkinCare Pro"
            price="Rs. 899"
            image="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop"
            onAdd={() => {}}
          />
        </div>
      </Section>

      <Section title="Routine Product Cards">
        <div className="flex flex-wrap gap-4">
          <Card
            variant="routine"
            title="Morning Routine"
            description="Start your day with these essential skincare products for healthy, glowing skin."
            price="Rs. 1,999"
            originalPrice="Rs. 2,499"
            image="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop"
            onAdd={() => {}}
            className="w-64"
          />
          <Card
            variant="routine"
            title="Night Routine"
            description="Repair and rejuvenate your skin while you sleep with these products."
            price="Rs. 2,499"
            image="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=200&fit=crop"
            onAdd={() => {}}
            className="w-64"
          />
        </div>
      </Section>

      <Section title="Tags">
        <div className="flex gap-4">
          <Tag type="bestseller" />
          <Tag type="doctors-choice" />
        </div>
      </Section>
    </PageWrapper>
  )
}

// Chat Page
function ChatPage() {
  return (
    <PageWrapper title="Chat Components">
      <Section title="Chat Bubbles">
        <div className="space-y-4 max-w-md">
          <ChatBubble
            type="user"
            message="What skincare routine do you recommend for oily skin?"
            timestamp="10:30 AM"
          />
          <ChatBubble
            type="response"
            title="Recommended Skincare Routine"
            message="Based on your skin type, I recommend the following routine:"
            bullets={[
              'Use a gentle foaming cleanser twice daily',
              'Apply a lightweight, oil-free moisturizer',
              'Always use SPF 30+ sunscreen during the day',
              'Consider adding a niacinamide serum'
            ]}
            showFooter
            timestamp="10:31 AM"
          />
          <ChatBubble
            type="user"
            message="Thanks! Can you recommend specific products?"
            timestamp="10:32 AM"
          />
        </div>
      </Section>

      <Section title="Media Upload States">
        <div className="space-y-4 max-w-md">
          <MediaUpload
            state="loading"
            mediaType="image"
            fileName="skin-analysis.jpg"
            fileSize="2.4 MB"
            progress={65}
            previewUrl="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop"
          />
          <MediaUpload
            state="uploaded"
            mediaType="image"
            fileName="skin-analysis.jpg"
            fileSize="2.4 MB"
            previewUrl="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop"
            onRemove={() => {}}
          />
          <MediaUpload
            state="uploaded"
            mediaType="pdf"
            fileName="prescription.pdf"
            fileSize="1.2 MB"
            onRemove={() => {}}
          />
          <div>
            <p className="text-sm text-clara-grey-600 mb-3">Chat Preview</p>
            <MediaUpload
              state="chat"
              mediaType="image"
              fileName="skin-photo.jpg"
              fileSize="2.4 MB"
              previewUrl="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&h=100&fit=crop"
            />
          </div>
        </div>
      </Section>
    </PageWrapper>
  )
}

// Overlays Page
function OverlaysPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

  return (
    <PageWrapper title="Overlays">
      <Section title="Modal">
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Confirm Action"
          description="Are you sure you want to proceed? This action cannot be undone."
          primaryAction={{
            label: 'Confirm',
            onClick: () => setIsModalOpen(false)
          }}
          secondaryAction={{
            label: 'Cancel',
            onClick: () => setIsModalOpen(false)
          }}
        />
      </Section>

      <Section title="Bottom Sheet">
        <Button variant="primary" onClick={() => setIsBottomSheetOpen(true)}>
          Open Bottom Sheet
        </Button>
        <BottomSheet
          isOpen={isBottomSheetOpen}
          onClose={() => setIsBottomSheetOpen(false)}
          title="Select Option"
        >
          <div className="p-4 space-y-4">
            <button className="w-full p-4 text-left rounded-xl hover:bg-clara-grey-100 transition-colors">
              <p className="font-medium text-clara-grey-900">Option 1</p>
              <p className="text-sm text-clara-grey-500">Description for option 1</p>
            </button>
            <button className="w-full p-4 text-left rounded-xl hover:bg-clara-grey-100 transition-colors">
              <p className="font-medium text-clara-grey-900">Option 2</p>
              <p className="text-sm text-clara-grey-500">Description for option 2</p>
            </button>
            <button className="w-full p-4 text-left rounded-xl hover:bg-clara-grey-100 transition-colors">
              <p className="font-medium text-clara-grey-900">Option 3</p>
              <p className="text-sm text-clara-grey-500">Description for option 3</p>
            </button>
          </div>
        </BottomSheet>
      </Section>

      <Section title="Message Cards">
        <div className="space-y-4 max-w-md">
          <MessageCard
            headline="Welcome to Clara"
            paragraph="Get personalized skincare recommendations based on your skin type and concerns."
            style="white"
            primaryAction={{ label: 'Get Started', onClick: () => {} }}
            secondaryAction={{ label: 'Learn More', onClick: () => {} }}
          />
          <MessageCard
            headline="New Feature Available"
            paragraph="Try our new AI-powered skin analysis tool."
            style="blue"
            showDismiss
            primaryAction={{ label: 'Try Now', onClick: () => {} }}
          />
          <MessageCard
            headline="Processing Your Request"
            paragraph="Please wait while we analyze your skin photo."
            style="white"
            state="loading"
            primaryAction={{ label: 'Loading...', onClick: () => {} }}
          />
        </div>
      </Section>
    </PageWrapper>
  )
}

// Miscellaneous Page
function MiscPage() {
  return (
    <PageWrapper title="Miscellaneous">
      <Section title="App Bar">
        <div className="space-y-4 max-w-md border border-clara-grey-200 rounded-xl overflow-hidden">
          <AppBar variant="logo-header" />
          <div className="h-px bg-clara-grey-200" />
          <AppBar
            variant="page-header"
            title="Skincare Routine"
            subtitle="Morning routine"
            showBackButton
            ctaLabel="Save"
          />
        </div>
      </Section>

      <Section title="Nudges">
        <div className="space-y-4 max-w-md">
          <Nudge
            type="primary"
            title="Discover Your Skin Type"
            description="Take a quick quiz to find products perfect for you"
          />
          <Nudge
            type="secondary"
            title="Track Your Progress"
            description="See how your skin has improved over time"
          />
        </div>
      </Section>

      <Section title="Spacing Scale">
        <div className="flex items-end gap-2">
          {[4, 8, 12, 16, 24, 32, 48].map((size) => (
            <div key={size} className="flex flex-col items-center">
              <div
                className="bg-clara-blue-500 rounded"
                style={{ width: size, height: size }}
              />
              <span className="text-xs text-clara-grey-500 mt-2">{size}px</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Border Radius">
        <div className="flex gap-4">
          {[
            { label: 'SM', value: '4px' },
            { label: 'MD', value: '8px' },
            { label: 'LG', value: '12px' },
            { label: 'XL', value: '16px' },
            { label: '2XL', value: '24px' },
            { label: 'Full', value: '9999px' }
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div
                className="w-16 h-16 bg-clara-blue-500"
                style={{ borderRadius: item.value }}
              />
              <span className="text-xs text-clara-grey-500 mt-2">{item.label}</span>
              <span className="text-xs text-clara-grey-400">{item.value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Shadows">
        <div className="flex gap-6">
          {[
            { label: 'SM', shadow: '0px 1px 2px rgba(0, 0, 0, 0.05)' },
            { label: 'MD', shadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' },
            { label: 'LG', shadow: '0px 8px 16px rgba(0, 0, 0, 0.12)' },
            { label: 'XL', shadow: '0px 16px 32px rgba(0, 0, 0, 0.15)' }
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div
                className="w-20 h-20 bg-white rounded-xl"
                style={{ boxShadow: item.shadow }}
              />
              <span className="text-xs text-clara-grey-500 mt-3">{item.label}</span>
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  )
}

// Main App
export default function App() {
  return (
    <div className="flex min-h-screen bg-clara-grey-50">
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/colors" element={<ColorsPage />} />
        <Route path="/typography" element={<TypographyPage />} />
        <Route path="/buttons" element={<ButtonsPage />} />
        <Route path="/inputs" element={<InputsPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/overlays" element={<OverlaysPage />} />
        <Route path="/misc" element={<MiscPage />} />
      </Routes>
    </div>
  )
}
