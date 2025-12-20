import React, { useState } from 'react';
import {
  Button,
  Card,
  TextField,
  MessageCard,
  Chat,
  AppBar,
  BottomSheet,
  IconButton,
  colors,
  spacing,
} from '@clara/design-system';
import '@clara/design-system/dist/styles.css';
import './App.css';

function App() {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [loading, setLoading] = useState(false);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="app">
      {/* Header */}
      <AppBar
        title="Clara Design System"
        leftIcon={
          <button className="icon-btn" onClick={() => alert('Back pressed')}>
            ←
          </button>
        }
        cta={
          <Button size="sm" variant="primary">
            New
          </Button>
        }
      />

      <main className="content">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero__title">Clara Design System</h1>
          <p className="hero__subtitle">
            A comprehensive React component library extracted from Figma
          </p>
          <div className="hero__actions">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              Documentation
            </Button>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="section">
          <h2 className="section__title">Buttons</h2>
          <p className="section__description">
            Figma Component ID: <code>246:2914</code>
          </p>

          <div className="subsection">
            <h3>Variants</h3>
            <div className="component-group">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="tertiary">Tertiary Button</Button>
            </div>
          </div>

          <div className="subsection">
            <h3>Sizes</h3>
            <div className="component-group">
              <Button variant="primary" size="lg">
                Large
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="sm">
                Small
              </Button>
            </div>
          </div>

          <div className="subsection">
            <h3>States</h3>
            <div className="component-group">
              <Button variant="primary" onClick={simulateLoading}>
                Click to Load
              </Button>
              <Button variant="primary" loading={loading}>
                Loading...
              </Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>
          </div>

          <div className="subsection">
            <h3>With Icons</h3>
            <div className="component-group">
              <Button variant="primary" leftIcon={<span>+</span>}>
                Add Item
              </Button>
              <Button variant="secondary" rightIcon={<span>→</span>}>
                Next
              </Button>
            </div>
          </div>

          <div className="subsection">
            <h3>Full Width</h3>
            <Button variant="primary" fullWidth>
              Full Width Button
            </Button>
          </div>
        </section>

        {/* Icon Buttons Section */}
        <section className="section">
          <h2 className="section__title">Icon Buttons</h2>
          <p className="section__description">
            Figma Component ID: <code>246:3454</code>
          </p>

          <div className="subsection">
            <h3>Variants</h3>
            <div className="component-group">
              <IconButton variant="primary">✓</IconButton>
              <IconButton variant="secondary">✎</IconButton>
              <IconButton variant="tertiary">×</IconButton>
            </div>
          </div>

          <div className="subsection">
            <h3>Shapes</h3>
            <div className="component-group">
              <IconButton variant="primary" shape="round">
                ♥
              </IconButton>
              <IconButton variant="primary" shape="square">
                ⚙
              </IconButton>
            </div>
          </div>

          <div className="subsection">
            <h3>Common Actions</h3>
            <div className="component-group">
              <IconButton variant="secondary" aria-label="Edit">
                ✎
              </IconButton>
              <IconButton variant="secondary" aria-label="Delete">
                🗑
              </IconButton>
              <IconButton variant="secondary" aria-label="Share">
                ↗
              </IconButton>
              <IconButton variant="secondary" aria-label="More">
                ⋯
              </IconButton>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="section">
          <h2 className="section__title">Cards</h2>
          <p className="section__description">
            Figma Component ID: <code>262:1502</code>
          </p>

          <div className="cards-grid">
            <Card
              title="Card with Everything"
              subtitle="This card has all features enabled"
              showImage={false}
              showTags
            />
            <Card
              title="Minimal Card"
              subtitle="Simple card with just title and subtitle"
              showImage={false}
              showTags={false}
            />
            <Card
              title="Card with Tags"
              showImage={false}
              showTags
            />
          </div>
        </section>

        {/* Text Fields Section */}
        <section className="section">
          <h2 className="section__title">Text Fields</h2>
          <p className="section__description">
            Figma Component ID: <code>381:3624</code>
          </p>

          <div className="subsection">
            <h3>Standard Input</h3>
            <TextField
              placeholder="Enter your text..."
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
          </div>

          <div className="subsection">
            <h3>With Label</h3>
            <TextField
              label="Email Address"
              placeholder="you@example.com"
              type="email"
            />
          </div>

          <div className="subsection">
            <h3>With Helper Text</h3>
            <TextField
              label="Username"
              placeholder="johndoe"
              helperText="Choose a unique username"
            />
          </div>

          <div className="subsection">
            <h3>With Error</h3>
            <TextField
              label="Password"
              type="password"
              placeholder="Enter password"
              error="Password must be at least 8 characters"
            />
          </div>

          <div className="subsection">
            <h3>Disabled</h3>
            <TextField
              label="Disabled Field"
              placeholder="Cannot edit"
              disabled
            />
          </div>
        </section>

        {/* Message Cards Section */}
        <section className="section">
          <h2 className="section__title">Message Cards</h2>
          <p className="section__description">
            Figma Component ID: <code>246:2101</code>
          </p>

          <div className="subsection">
            <MessageCard layout="headline-paragraph" style="white">
              <strong>Success!</strong>
              <p>Your changes have been saved successfully.</p>
            </MessageCard>
          </div>

          <div className="subsection">
            <MessageCard layout="headline-paragraph" style="white">
              <strong>Information</strong>
              <p>This is an informational message card.</p>
            </MessageCard>
          </div>

          <div className="subsection">
            <MessageCard layout="headline-only" style="white">
              <strong>Simple notification message</strong>
            </MessageCard>
          </div>
        </section>

        {/* Chat Section */}
        <section className="section">
          <h2 className="section__title">Chat Components</h2>
          <p className="section__description">
            Figma Component ID: <code>246:3021</code>
          </p>

          <div className="chat-container">
            <Chat
              type="response"
              avatar={
                <div className="avatar avatar--bot">
                  <span>🤖</span>
                </div>
              }
            >
              Hello! I'm the Clara assistant. How can I help you today?
            </Chat>

            <Chat
              type="request"
              avatar={
                <div className="avatar avatar--user">
                  <span>U</span>
                </div>
              }
            >
              Can you show me how to use the design system?
            </Chat>

            <Chat
              type="response"
              avatar={
                <div className="avatar avatar--bot">
                  <span>🤖</span>
                </div>
              }
              showFooter
              footer={
                <div className="chat-footer">
                  <IconButton variant="tertiary" size="sm">
                    👍
                  </IconButton>
                  <IconButton variant="tertiary" size="sm">
                    👎
                  </IconButton>
                  <IconButton variant="tertiary" size="sm">
                    📋
                  </IconButton>
                </div>
              }
            >
              Sure! The Clara Design System includes buttons, cards, text fields,
              and many other components. Each component is built with accessibility
              and customization in mind.
            </Chat>
          </div>
        </section>

        {/* Bottom Sheet Section */}
        <section className="section">
          <h2 className="section__title">Bottom Sheet</h2>
          <p className="section__description">
            Figma Component ID: <code>271:3443</code>
          </p>

          <Button variant="primary" onClick={() => setBottomSheetOpen(true)}>
            Open Bottom Sheet
          </Button>

          <BottomSheet
            open={bottomSheetOpen}
            onClose={() => setBottomSheetOpen(false)}
            showOverlay
          >
            <div className="bottom-sheet-content">
              <h3>Bottom Sheet Example</h3>
              <p>
                This is a bottom sheet component perfect for mobile-first
                interfaces. It slides up from the bottom of the screen.
              </p>

              <div className="subsection">
                <TextField
                  label="Your Name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="subsection">
                <TextField
                  label="Your Email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="button-group">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => setBottomSheetOpen(false)}
                >
                  Submit
                </Button>
                <Button
                  variant="tertiary"
                  fullWidth
                  onClick={() => setBottomSheetOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </BottomSheet>
        </section>

        {/* Design Tokens Section */}
        <section className="section">
          <h2 className="section__title">Design Tokens</h2>
          <p className="section__description">
            Design tokens extracted from Figma
          </p>

          <div className="subsection">
            <h3>Colors</h3>
            <div className="color-grid">
              <div className="color-swatch">
                <div
                  className="color-swatch__color"
                  style={{ backgroundColor: colors.primary }}
                />
                <div className="color-swatch__label">
                  <div>Primary</div>
                  <code>{colors.primary}</code>
                </div>
              </div>
              <div className="color-swatch">
                <div
                  className="color-swatch__color"
                  style={{ backgroundColor: colors.grey700 }}
                />
                <div className="color-swatch__label">
                  <div>Grey 700</div>
                  <code>{colors.grey700}</code>
                </div>
              </div>
              <div className="color-swatch">
                <div
                  className="color-swatch__color"
                  style={{ backgroundColor: colors.success }}
                />
                <div className="color-swatch__label">
                  <div>Success</div>
                  <code>{colors.success}</code>
                </div>
              </div>
              <div className="color-swatch">
                <div
                  className="color-swatch__color"
                  style={{ backgroundColor: colors.error }}
                />
                <div className="color-swatch__label">
                  <div>Error</div>
                  <code>{colors.error}</code>
                </div>
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3>Spacing Scale</h3>
            <div className="spacing-demo">
              {Object.entries(spacing).map(([key, value]) => (
                <div key={key} className="spacing-item">
                  <div
                    className="spacing-item__bar"
                    style={{ width: value }}
                  />
                  <div className="spacing-item__label">
                    <code>{key}</code>
                    <span>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>
            Clara Design System • Extracted from{' '}
            <a
              href="https://www.figma.com/design/kOGAOM7xCcnGancqjYSfGD/Clara-Design-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>
          </p>
          <p>
            <a
              href="https://github.com/metaphi-agent/clara-design-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;