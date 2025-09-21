# eCommerce Dashboard

## 🚀 Live Demo

**<a href="https://dashboard-paymen.vercel.app/dashboard" target="_blank">🌟 View Live Demo</a>** - Deployed on Vercel

## 🛠 Tech Stack

### Core Technologies

- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.1.6** - Fast build tool and development server
- **Sass 1.92.1** - Advanced CSS preprocessor

### UI & Design

- **Ant Design 5.27.4** - Enterprise-class UI components
- **Lucide React 0.544.0** - Beautiful SVG icons
- **Recharts 3.2.1** - Composable charting library for React

### Routing & Navigation

- **React Router DOM 7.9.1** - Declarative routing for React

### Development Tools

- **ESLint 9.35.0** - Code linting and quality
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React** - React integration for Vite

## 📁 File and Folder Structure

```
vite-project/
├── public/                     # Static assets
├── src/
│   ├── assets/                # Images and static files
│   ├── components/            # Reusable UI components
│   │   ├── AvatarBlock/       # User avatar with info
│   │   ├── Cards/             # Card components (MetricCard)
│   │   ├── Charts/            # Chart components (Recharts)
│   │   ├── Layout/            # Layout components (Header, Sidebar, MainLayout)
│   │   ├── Popups/            # Modal/popup components
│   │   └── Table/             # Table components
│   ├── data/                  # Mock data and API layer
│   ├── pages/                 # Page components (Dashboard, NotFound, TablePage)
│   ├── routes/                # Routing configuration
│   ├── styles/                # Global styles
│   ├── theme/                 # Theme management
│   └── types/                 # TypeScript type definitions
├── package.json              # Dependencies and scripts
└── vite.config.ts            # Vite configuration
```

## 🛠️ Setup and Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Local Development Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd vite-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 🎨 Design Decisions

### Component Reusability

The application is built with a strong focus on component reusability:

- **MetricCard Component**: Reused across the dashboard for displaying KPI metrics
- **AvatarBlock Component**: Used in Activities and Contacts sections
- **Chart Components**: Modular chart components (DonutChart, ProjectionsChart, RevenueChart)
- **Popup Components**: Reusable popup system for mobile devices

### Light/Dark Theme Setup

Comprehensive theme system implementation:

**Theme Provider Setup:**

- **ThemeContext**: React Context API for global theme state management
- **CSS Custom Properties**: Dynamic theme switching without component re-renders
- **Ant Design Integration**: ConfigProvider for component theming
- **Persistent Storage**: Theme preference saved to localStorage

**Implementation:**

```typescript
const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
};
```

### Layout Architecture

- **Three-Column Layout**: Left sidebar, main content, fixed right sidebar
- **Responsive Design**: Right sidebar hidden on screens < 1200px
- **Fixed Positioning**: Right sidebar from top of viewport

## 🚧 Challenges Faced and Solutions

### 1. Layout Complexity

**Challenge**: Creating a three-column layout with persistent right sidebar.
**Solution**: Fixed positioning with proper z-index management and responsive margins.

### 2. Theme System Integration

**Challenge**: Integrating custom theme with Ant Design components.
**Solution**: CSS custom properties + Ant Design ConfigProvider for seamless theming.

### 3. Component Color Overrides

**Challenge**: MetricCard colors from props being overridden by global CSS.
**Solution**: CSS attribute selectors for conditional default backgrounds.

## 🔄 Improvements Made

- **Performance**: Code splitting and lazy loading
- **UX**: Smooth transitions and loading states
- **DX**: Full TypeScript integration and ESLint
- **Code Quality**: Reusable components and clear architecture

## 📚 Code Documentation

### MetricCard Component

```typescript
interface MetricCardProps {
  title: string; // Card title
  value: string; // Main metric value
  change?: string; // Percentage change
  changeType: "positive" | "negative";
  icon?: React.ReactNode;
  color?: string; // Background color override
  className?: string;
}
```

### Theme Context

```typescript
interface ThemeContextType {
  theme: Theme; // 'light' | 'dark'
  toggleTheme: () => void;
  isDark: boolean;
}
```

### Chart Components

Built with Recharts library:

- **DonutChart**: Pie/donut charts for data visualization
- **ProjectionsChart**: Bar charts for comparisons
- **RevenueChart**: Line charts for trends

## 🚀 Future Enhancements

- Real API integration
- Advanced chart interactions
- User authentication
- Data export functionality
- Real-time updates via WebSocket
- Enhanced accessibility
- Comprehensive testing suite

## 📄 License

This project is licensed under the MIT License.
