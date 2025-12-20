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
} from '@clara/design-system';
import '@clara/design-system/dist/styles.css';
import './App.css';

function App() {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  return (
    <div className="app">
      <AppBar
        title="Clara Design System"
        leftIcon={<span>←</span>}
        cta={<Button size="sm">Action</Button>}
      />

      <main className="content">
        <section className="section">
          <h2>Buttons</h2>
          <div className="component-group">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
          </div>
          <div className="component-group">
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="sm">Small</Button>
          </div>
        </section>

        <section className="section">
          <h2>Icon Buttons</h2>
          <div className="component-group">
            <IconButton variant="primary">✓</IconButton>
            <IconButton variant="secondary">✎</IconButton>
            <IconButton variant="tertiary">×</IconButton>
          </div>
        </section>

        <section className="section">
          <h2>Card</h2>
          <Card
            title="Card Title"
            subtitle="This is a subtitle"
            showImage={false}
            showTags
          />
        </section>

        <section className="section">
          <h2>Text Field</h2>
          <TextField placeholder="Enter your text..." />
        </section>

        <section className="section">
          <h2>Message Card</h2>
          <MessageCard
            layout="headline-paragraph"
            style="white"
          >
            This is a message card with important information.
          </MessageCard>
        </section>

        <section className="section">
          <h2>Chat</h2>
          <Chat type="response" avatar={<div className="avatar">AI</div>}>
            Hello! How can I help you today?
          </Chat>
          <Chat type="request" avatar={<div className="avatar">U</div>}>
            Can you explain the design system?
          </Chat>
        </section>

        <section className="section">
          <h2>Bottom Sheet</h2>
          <Button onClick={() => setBottomSheetOpen(true)}>
            Open Bottom Sheet
          </Button>
          <BottomSheet
            open={bottomSheetOpen}
            onClose={() => setBottomSheetOpen(false)}
          >
            <h3>Bottom Sheet Content</h3>
            <p>This is content inside a bottom sheet component.</p>
            <Button
              onClick={() => setBottomSheetOpen(false)}
              fullWidth
            >
              Close
            </Button>
          </BottomSheet>
        </section>
      </main>
    </div>
  );
}

export default App;