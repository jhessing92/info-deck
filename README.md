# CCSD Accreditation Support Tool

A comprehensive web application designed to support Cobb County School District's accreditation readiness through automated monitoring and tracking of board member public statements across media platforms.

## 🚀 Overview

This project provides an automated tracking system for current board member public statements across various media platforms, helping maintain compliance documentation and support accreditation reviews. The system includes real-time monitoring, sentiment analysis, and comprehensive reporting capabilities.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Components](#components)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Sections Overview](#sections-overview)

## ✨ Features

- **24/7 Automated Monitoring**: Continuous tracking across news, social media, and community forums
- **Historical Data Coverage**: Complete backfill from November 2024
- **Real-time Alerts**: Hourly updates on policy compliance concerns
- **Team Collaboration**: Shared interface for filtering, annotating, and exporting statements
- **Interactive Demos**: Live demonstrations of system capabilities
- **Marketing AI OS**: Comprehensive marketing automation platform

## 🛠 Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **Animation**: Framer Motion 12.23
- **Icons**: Lucide React
- **Routing**: React Router DOM 6.22
- **Deployment**: Netlify

## 📁 Project Structure

```
CCSD/
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Landing hero section
│   │   ├── PainPoints.tsx  # Challenges section
│   │   ├── DemoSection.tsx # Interactive demos
│   │   ├── PlaybookAccordion.tsx # Implementation guide
│   │   ├── CCSDWork.tsx    # Success stories
│   │   ├── Pricing.tsx     # Pricing information
│   │   ├── MarketingAIOS.tsx # Marketing AI presentation
│   │   └── Footer.tsx      # Site footer
│   ├── data/               # Static data
│   │   ├── demoManifest.json
│   │   └── playbookData.ts
│   ├── App.tsx             # Main application
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── functions/              # Serverless functions
└── dist/                   # Build output
```

## 🧩 Components

### Core Components

#### 1. **Header Component**
- Navigation bar with responsive design
- Links to main sections
- Mobile-friendly hamburger menu

#### 2. **Hero Section**
- Eye-catching introduction to the Public Statements Monitor
- Key value propositions
- Call-to-action for demo viewing
- Three main benefits highlighted:
  - 24/7 Monitoring
  - Historical Data
  - Team Collaboration

#### 3. **Pain Points Section**
- Identifies three critical challenges:
  - **No Centralized Documentation**: Scattered board member statements
  - **Manual Monitoring Gaps**: Inability to track all platforms manually
  - **Late Policy Violation Discovery**: Missing real-time alerts
- Explains why comprehensive monitoring matters for accreditation

#### 4. **Demo Section**
- Interactive demonstration of the monitoring system
- Features overview:
  - Policy Compliance Alerts
  - Real-time (Hourly) Alerts
  - Team Collaboration tools
- Live monitoring statistics display
- Modal-based demo walkthrough

#### 5. **Playbook Accordion**
- Complete implementation guide
- Expandable sections covering:
  - Why board statement tracking matters
  - System capabilities
  - Implementation process
  - Best practices
- User-friendly accordion interface

#### 6. **CCSD Work Section**
- Showcases successful implementations:
  - **Calls with Santa Claus**: AI-powered holiday fundraiser
    - 100K+ impressions
    - 62% email open rate
    - 5-star reviews
  - **CCSD Social Media Scraper**: District-wide analytics
    - AI chatbot integration
    - 112 school accounts monitored
    - Multi-platform coverage

#### 7. **Pricing Section**
- Transparent pricing structure:
  - **One-Time Build Fee**: $9,500
  - **Monthly Subscription**: $500 (12-month contract)
- Detailed breakdown of included features
- Annual payment discount option

#### 8. **Marketing AI OS Component**
- 17-slide presentation system
- Interactive navigation with keyboard support
- Sections include:
  - Vision and objectives
  - 6 Intelligent Agents overview
  - Implementation timeline
  - ROI analysis (400-500% first year)
  - Success metrics
  - Support and training plans

### Supporting Components

- **DemoCard**: Reusable card for demo displays
- **DemoModal**: Modal window for demo presentations
- **PasswordScreen**: Security layer for protected content
- **Footer**: Site footer with contact information

## 💻 Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd CCSD

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Environment Configuration

The project uses Vite for build configuration. Key files:
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 🚀 Deployment

The project is configured for Netlify deployment:

```bash
# Build command
npm run build

# Publish directory
dist
```

### Netlify Configuration

The `netlify.toml` file includes:
- Build settings
- Serverless function configuration
- Redirect rules

## 📖 Sections Overview

### Home Page Flow

1. **Hero Section**: Introduction and value proposition
2. **Pain Points**: Current challenges addressed
3. **Demo Section**: Interactive system demonstration
4. **Implementation Guide**: Detailed playbook
5. **Success Stories**: CCSD work examples
6. **Pricing**: Transparent cost structure
7. **Footer**: Contact and additional information

### Marketing AI OS (Separate Route)

A comprehensive presentation covering:
- Agentic Marketing Team Platform vision
- Transition from manual to AI-powered workflows
- 6 intelligent agents powering the system
- Implementation timeline (10 weeks)
- Investment and ROI analysis
- Success metrics and support plans

## 🎨 Design System

### Color Palette
- Primary: Teal/Cyan gradient
- Secondary: Blue/Purple accents
- Background: Slate gray variants
- Accent: Green for success states

### Typography
- Headers: Bold, gradient text effects
- Body: Clear, readable text with proper contrast
- Responsive sizing across devices

### Animation
- Framer Motion for smooth transitions
- Fade-in and slide animations
- Interactive hover states
- Progress indicators

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔐 Security

- Password protection for sensitive sections
- Environment variable support for API keys
- Secure serverless functions for notifications

## 📈 Performance

- Optimized build with Vite
- Lazy loading for images
- Code splitting for routes
- Minimal bundle size

## 🤝 Contributing

For contributions or issues, please contact the development team.

## 📄 License

Private project for Cobb County School District.

---

Built with ❤️ for CCSD by ShooflyAI
