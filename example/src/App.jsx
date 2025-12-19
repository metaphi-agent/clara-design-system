import React, { useState } from 'react';
import { Button } from '@clara/design-system';
import { TextField } from '@clara/design-system';
import { Card } from '@clara/design-system';
import { MessageCard } from '@clara/design-system';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Clara Design System</h1>
        <p>Component Library Preview</p>
      </header>

      <main className="app-main">
        {/* Buttons Section */}
        <section className="component-section">
          <h2>Buttons</h2>
          <div className="component-grid">
            <div>
              <h3>Primary</h3>
              <div className="button-group">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
            <div>
              <h3>Secondary</h3>
              <div className="button-group">
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary" size="md">Medium</Button>
                <Button variant="secondary" size="lg">Large</Button>
              </div>
            </div>
            <div>
              <h3>Tertiary</h3>
              <div className="button-group">
                <Button variant="tertiary" size="sm">Small</Button>
                <Button variant="tertiary" size="md">Medium</Button>
                <Button variant="tertiary" size="lg">Large</Button>
              </div>
            </div>
            <div>
              <h3>States</h3>
              <div className="button-group">
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="primary" loading={loading} onClick={handleSubmit}>
                  {loading ? 'Loading...' : 'Click me'}
                </Button>
                <Button variant="primary" fullWidth>Full Width</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Text Fields Section */}
        <section className="component-section">
          <h2>Text Fields</h2>
          <div className="component-grid">
            <TextField
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText="We'll never share your email"
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter password"
              helperText="Must be at least 8 characters"
            />
            <TextField
              label="Error Example"
              placeholder="This field has an error"
              error="This field is required"
            />
            <TextField
              label="Disabled"
              placeholder="Disabled field"
              disabled
            />
          </div>
        </section>

        {/* Cards Section */}
        <section className="component-section">
          <h2>Cards</h2>
          <div className="card-grid">
            <Card
              title="Simple Card"
              subtitle="This is a subtitle"
            />
            <Card
              title="Card with Tags"
              subtitle="Subtitle text here"
              showTags
              tags={['New', 'Featured', 'Popular']}
            />
            <Card
              title="Clickable Card"
              subtitle="Click me to see the hover effect"
              showTags
              tags={['Interactive']}
              onClick={() => alert('Card clicked!')}
            />
          </div>
        </section>

        {/* Message Cards Section */}
        <section className="component-section">
          <h2>Message Cards</h2>
          <div className="component-grid">
            <MessageCard
              headline="Welcome to Clara"
              paragraph="This is a message card with a headline and paragraph. You can use it for notifications, announcements, or any informational content."
              buttonText="Learn More"
              onButtonClick={() => alert('Button clicked!')}
            />
            <MessageCard
              headline="Update Available"
              paragraph="A new version of the design system is available. Click below to update."
              buttonText="Update Now"
              dismissButton
              onDismiss={() => alert('Dismissed!')}
              style="colored"
            />
          </div>
        </section>

        {/* Kitchen Sink */}
        <section className="component-section">
          <h2>Interactive Example</h2>
          <div className="kitchen-sink">
            <Card
              title="Contact Form"
              subtitle="Get in touch with us"
            >
              <div className="form-group">
                <TextField
                  label="Name"
                  placeholder="Your name"
                  fullWidth
                />
                <TextField
                  label="Email"
                  placeholder="your@email.com"
                  type="email"
                  fullWidth
                />
                <TextField
                  label="Message"
                  placeholder="Your message"
                  fullWidth
                />
                <Button variant="primary" fullWidth>
                  Send Message
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
