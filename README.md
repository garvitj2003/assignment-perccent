# Dashboard Assignment

A modern, responsive dashboard built with React, TypeScript, and TailwindCSS. This dashboard follows the design specifications and includes dark mode support.

## Features

- **📊 Dashboard Overview**: Complete dashboard with sidebar navigation and main content area
- **📈 Metric Cards**: Four key performance indicators (Total Revenue, New Customers, Active Accounts, Growth Rate)
- **📉 Interactive Charts**: Total Visitors chart with time period selection (Last 3 months, 30 days, 7 days)
- **🌙 Dark Mode**: Full dark mode support with system preference detection
- **📱 Responsive Design**: Mobile-first responsive design that works on all screen sizes
- **♿ Accessibility**: ARIA support, keyboard navigation, and focus states
- **🎨 Modern UI**: Clean, modern interface following design system guidelines

## Components

### Core Components

- `Sidebar` - Navigation sidebar with menu items and documents section
- `Header` - Top header with title and Quick Create button
- `MetricCards` - Grid of performance metric cards with trend indicators
- `VisitorsChart` - Interactive line chart showing visitor data over time
- `DarkModeToggle` - Theme switcher with local storage persistence

### Design Principles

- **No External UI Libraries**: Built entirely with custom components
- **TailwindCSS**: Utility-first CSS framework for styling
- **Responsive Layout**: Flex and Grid layouts with fluid spacing
- **Semantic HTML**: Proper semantic tags and ARIA attributes
- **Smooth Transitions**: Subtle animations on interactive elements

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Dark Mode

The dashboard automatically detects your system's color scheme preference and applies the appropriate theme. You can manually toggle between light and dark modes using the theme switcher in the top-right corner.

## Architecture

The project follows a modular component structure:

```
src/
├── components/
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   ├── MetricCards.tsx
│   ├── VisitorsChart.tsx
│   └── DarkModeToggle.tsx
├── App.tsx
├── main.tsx
└── index.css
```
## Technologies Used

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Vite** - Build tool
- **SVG** - Custom chart implementation

## Design Compliance

This dashboard follows the specifications in:

- `rules.json` - Development rules and constraints
- `designSchema.json` - Design system and component specifications

The implementation ensures:

- ✅ React with TypeScript
- ✅ TailwindCSS for styling
- ✅ No external UI libraries
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Accessible components
- ✅ Semantic HTML structure
- ✅ Modular component architecture

