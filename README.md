# Dashboard Analytics Platform

A modern, responsive dashboard application built with React, TypeScript, and TailwindCSS. This comprehensive analytics platform provides business insights through interactive charts, user management, and invoice tracking with full dark mode support.

## 🚀 Features

### 📊 Dashboard Analytics

- **Interactive Charts**: Line charts for sales and product visibility data using Chart.js
- **Statistics Cards**: Key performance indicators with trend visualization
- **Invoice Analytics**: Doughnut charts showing payment status distribution
- **Real-time Data**: Dynamic data visualization with responsive updates

### 🎨 User Interface

- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with optimal viewing on all devices
- **Modern UI/UX**: Clean, intuitive interface following modern design principles
- **Smooth Animations**: Subtle transitions and hover effects for enhanced user experience

### 🔍 Navigation & Search

- **Collapsible Sidebar**: Organized navigation with menu sections (Dashboard, Reports, Financial tools)
- **Global Search**: Quick search functionality with keyboard shortcuts (⌘+K)
- **Smart Navigation**: Contextual menu items with active state indicators
- **Notification Center**: Real-time notifications with status indicators

### 📋 Data Management

- **User Management**: Comprehensive user data display and management
- **Invoice Tracking**: Detailed invoice status tracking (Paid, Pending, Failed, Refunded)
- **Data Tables**: Sortable and filterable data presentation
- **Export Capabilities**: Data visualization and reporting tools

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: TailwindCSS 4.1 with custom design system
- **Charts**: Chart.js with React-Chart.js-2 integration
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and optimized builds
- **Development**: ESLint for code quality and consistency

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.tsx       # Top navigation with search and notifications
│   ├── Sidebar.tsx      # Collapsible navigation sidebar
│   ├── SearchModal.tsx  # Global search functionality
│   ├── StatsCard.tsx    # Metric display cards
│   ├── Avatar.tsx       # User avatar component
│   └── DarkModeToggle.tsx # Theme switcher
├── section/             # Main layout sections
│   ├── MainSection.tsx  # Primary dashboard with charts and metrics
│   └── SecondarySection.tsx # Invoice management and user data
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and TailwindCSS imports
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd perccent-assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint code analysis

## 🎯 Key Components

### Dashboard Analytics

- **Sales Tracking**: Line chart visualization of monthly sales data
- **Product Metrics**: Track product views and engagement
- **Performance Cards**: Quick overview of key business metrics
- **Trend Analysis**: Visual indicators for growth and performance

### Invoice Management

- **Status Overview**: Visual breakdown of invoice statuses
- **User Data**: Comprehensive user information display
- **Payment Tracking**: Real-time payment status updates
- **Financial Analytics**: Revenue and transaction insights

### User Experience

- **Responsive Navigation**: Adaptive sidebar for different screen sizes
- **Quick Actions**: Fast access to common tasks and features
- **Search Integration**: Global search with keyboard shortcuts
- **Theme Consistency**: Unified dark/light mode across all components

## 🌙 Theme Support

The application automatically detects your system's color scheme preference and applies the appropriate theme. Users can manually toggle between light and dark modes using the theme switcher in the navigation bar.

**Theme Features:**

- System preference detection
- Manual override capability
- Consistent color scheme across all components
- Smooth transition animations
- Local storage persistence

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Labels**: Comprehensive accessibility labels and descriptions
- **Focus Management**: Clear focus indicators and logical tab order
- **Screen Reader Support**: Semantic HTML structure for assistive technologies
- **Color Contrast**: WCAG compliant color combinations in both themes

## 📱 Responsive Design

The dashboard is built with a mobile-first approach and provides optimal viewing experience across:

- **Mobile Devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large Screens** (1440px and up)

## 🔧 Customization

The project uses TailwindCSS for styling, making it easy to customize:

- **Color Scheme**: Modify the color palette in `tailwind.config.js`
- **Component Styling**: Update individual component styles
- **Layout**: Adjust responsive breakpoints and grid systems
- **Typography**: Customize fonts and text styling

## 📈 Performance

- **Optimized Builds**: Vite provides fast build times and optimized bundles
- **Lazy Loading**: Components loaded on demand for better performance
- **Efficient Rendering**: React optimization techniques for smooth interactions
- **Minimal Dependencies**: Carefully selected lightweight libraries

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using React, TypeScript, and TailwindCSS**
