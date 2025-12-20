#!/bin/bash

# Clara Design System - Preview Setup Script

set -e

echo "🎨 Clara Design System - Setting up preview..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Step 1/3:${NC} Building design system package..."
echo ""
npm install
npm run build

echo ""
echo -e "${GREEN}✓${NC} Design system built successfully!"
echo ""

echo -e "${BLUE}Step 2/3:${NC} Installing preview app dependencies..."
echo ""
cd example
npm install

echo ""
echo -e "${GREEN}✓${NC} Preview app dependencies installed!"
echo ""

echo -e "${BLUE}Step 3/3:${NC} Starting development server..."
echo ""
echo -e "${YELLOW}Preview will open at:${NC} http://localhost:5173"
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"
echo ""

npm run dev
