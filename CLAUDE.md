# Flex Events Management - Web Platform

## Project Overview

**Flex Events Management** is a comprehensive event services company based in Kampala, Uganda, specializing in event planning, equipment rental, and audio-visual services. This React-based web platform serves as both a marketing showcase and functional booking system for their event management business.

### Business Details
- **Company**: Flex Events Management
- **Location**: Plot 2973, Kisaasi-Kyanja Road, Kyanja, Kampala, Uganda
- **Contact**: +256 772 406 122, info@flexevents.ug
- **Mission**: "Creating Memorable Experiences" for special occasions

### Core Services
1. **Event Services**: Full event planning, wedding coordination, consultation
2. **Equipment Rental**: Professional audio, lighting, staging, LED screens
3. **Technical Services**: Setup, operation, custom installations
4. **Design Services**: Invitation cards, branding, custom manufacturing

## Technical Architecture

### Frontend Stack
- **React 18** - Modern component-based UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **React Router DOM 7.1** - Client-side routing
- **Framer Motion** - Advanced animations and transitions

### Backend & Database
- **Firebase** - Google's backend-as-a-service platform
- **Firestore** - NoSQL document database for booking data
- **Firebase Functions** - Serverless backend functions

### Key Libraries
- `@relume_io/relume-ui` - Professional UI components
- `@heroicons/react` - High-quality SVG icons
- `react-slick` + `swiper` - Carousel and slider functionality
- `react-datepicker` - Date selection components
- `react-icons` - Additional icon library

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── flex-events/           # Main application pages
│   ├── home/             # Homepage with carousel
│   ├── about-us/         # Company information
│   ├── contact-us/       # Contact forms and info
│   ├── services/         # Service categories
│   ├── rentals/          # Equipment rental categories
│   ├── portfolio/        # Project galleries
│   ├── events-management/# Event planning services
│   ├── equipment-hire/   # Equipment rental info
│   └── sound-equipment/  # Audio equipment details
├── globalComps/          # Shared components
│   ├── Navbar.jsx        # Main navigation
│   ├── Footer3.jsx       # Site footer
│   ├── BookingForm.jsx   # Booking form logic
│   └── BookingPage.jsx   # Booking interface
├── hooks/                # Custom React hooks
│   └── useFadeIn.js      # Animation hook
└── utils/                # Utility functions
    ├── ScrollToTop.jsx   # Route scroll management
    └── firebaseConfig.js # Firebase setup
```

## Key Features

### 1. Dynamic Homepage
- Rotating carousel showcasing services (Weddings, Visuals, Decor, Sounds, Stage Setups)
- Automatic progression with manual navigation controls
- Service-specific call-to-action buttons

### 2. Service Categories
**Rentals** (Equipment with daily rates):
- P.A. Systems & Mobile Disco
- Line Array Sound Systems
- Professional Lighting & Effects
- Aluminum Truss & Stages
- LED Screens & Video Walls
- DJ Equipment & Karaoke
- Power Generators

**Services** (Consultation & Planning):
- Full Event Planning
- Wedding Coordination
- Audio Visual Design
- Custom Branding

### 3. Booking System
- Service-specific forms for different equipment categories
- Firebase Firestore integration for data storage
- Collections: `rentals` and `services`
- Real-time form submission and storage

### 4. Portfolio Galleries
Organized by event type:
- Weddings
- Concerts & Festivals
- Corporate Events
- Carnivals
- Product Launches

## Routing Structure

```javascript
// Main routes
/                    # Homepage
/about              # About page
/contact            # Contact page
/services           # Services overview
/portfolio          # Portfolio gallery
/faq               # Frequently asked questions

// Dynamic routes
/services/:id       # Specific service booking (1-7)
/rentals/:id        # Specific rental category (1-10)
/booking           # General booking page
```

## Firebase Configuration

### Environment Setup
Firebase configuration is handled in `src/utils/firebaseConfig.js`

### Database Collections
- **rentals**: Equipment rental bookings
- **services**: Event planning service requests

### Form Data Structure
Each booking captures:
- Event details (date, venue, guest count)
- Equipment/service requirements
- Customer contact information
- Budget range
- Special requirements

## Styling & Design

### Design System
- **Primary Color**: #9BAB3C (Olive green)
- **Typography**: SF Pro Display font family
- **Components**: Relume UI component library
- **Responsive**: Mobile-first Tailwind CSS approach

### Custom Animations
- Text slide animations for homepage carousel
- Fade-in effects using custom `useFadeIn` hook
- Progress bar animations for carousel timing

## Development Notes

### Code Standards
- **ESLint** configuration for code quality
- **Component-based** architecture
- **Functional components** with React hooks
- **Props validation** where applicable

### Build Configuration
- **Vite** for fast development and optimized builds
- **Tailwind CSS** compilation
- **Firebase** deployment ready via `firebase.json`

### NGrok Integration
Development server configured for NGrok tunneling:
```javascript
server: {
  allowedHosts: ['.ngrok-free.app'],
  host: true,
  strictPort: true,
}
```

## Third-Party Integrations

### Chat Support
- **Tidio** chat widget integration for customer support

### Payment Processing
- Multiple payment methods mentioned: Cash, PayPal, Visa, Mobile Money

## Event Types Supported

### Personal Events
- Weddings and traditional ceremonies (Kuhingira)
- Birthday parties and celebrations
- Private gatherings

### Corporate Events
- Business conferences and meetings
- Product launches and brand activations
- Corporate parties and team building

### Large-Scale Events
- Concerts and music festivals
- Community carnivals
- Trade shows and exhibitions
- Public events and gatherings

## Contact Information

- **Phone**: +256 772 406 122
- **Email**: info@flexevents.ug
- **Address**: Plot 2973, Kisaasi-Kyanja Road, Kyanja, Kampala, Uganda

## Deployment

The project is configured for Firebase hosting with automatic deployment of Firebase Functions during build process as defined in `firebase.json`.