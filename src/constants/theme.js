/**
 * Pastel Cyberpunk Light Mode Theme
 * Complete color palette and design tokens
 */

export const COLORS = {
  // Primary Colors (Pink Neon)
  primary: '#FF71CE',
  primaryLight: '#FF9DE2',
  primaryDark: '#E85DB8',
  primaryTints: {
    50: '#FFF0FA',
    100: '#FFE0F5',
    200: '#FFC8EE',
  },

  // Secondary Colors (Cyan Electric)
  secondary: '#01CDFE',
  secondaryLight: '#66E4FF',
  secondaryDark: '#009ABB',

  // Accent Colors (Purple)
  accent: '#B967FF',
  accentSoft: '#E3C8FF',
  accentDark: '#8F3FD1',

  // Neutral Colors
  dark: '#1A1A1A',
  light: '#F7F3FA',
  lighter: '#FCF8FF',
  neutral50: '#FEFBFF',

  // Background Colors
  bgPrimary: '#FFFFFF',
  bgSecondary: '#FDF7FF',
  bgTertiary: '#FFF0FB',
  cyberWhite: '#FDF7FF',
  softPinkMist: '#FFF0FB',
  softCyanHaze: '#F2FDFF',

  // Text Colors
  textPrimary: '#1A1A1A',
  textSecondary: '#5A5A5A',

  // Border Colors
  border: '#EADFF2',
}

export const GRADIENTS = {
  // Primary Gradient (Pink Neon)
  primary: 'linear-gradient(135deg, #FF71CE 0%, #FF9DE2 100%)',
  primaryHover: 'linear-gradient(135deg, #E85DB8 0%, #FF71CE 100%)',

  // Secondary Gradient (Cyan Electric)
  secondary: 'linear-gradient(135deg, #01CDFE 0%, #66E4FF 100%)',
  secondaryHover: 'linear-gradient(135deg, #009ABB 0%, #01CDFE 100%)',

  // Hero Gradient (Pastel Cyberpunk Mix)
  hero: `linear-gradient(
    135deg,
    #FFF0FB 0%,
    #FDF7FF 20%,
    #F2FDFF 40%,
    #FDF7FF 70%,
    #FFE5FF 100%
  )`,

  // Enhanced Hero Gradient
  heroEnhanced: `
    radial-gradient(circle at 20% 30%, rgba(255, 113, 206, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(1, 205, 254, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(185, 103, 255, 0.28) 0%, transparent 100%),
    linear-gradient(
      135deg,
      #FFF0FB 0%,
      #FFFFFF 15%,
      #FDF7FF 40%,
      #FFFFFF 60%,
      #F2FDFF 80%,
      #FFF0FB 100%
    )
  `,

  // Section Gradients
  pinkMist: 'linear-gradient(180deg, #FFF0FB 0%, #FFFFFF 100%)',
  cyanMist: 'linear-gradient(180deg, #F2FDFF 0%, #FFFFFF 100%)',

  // Text Gradients
  textStandard: 'linear-gradient(135deg, #FF71CE 0%, #B967FF 50%, #01CDFE 100%)',
  textSoft: 'linear-gradient(135deg, #FF9DE2 0%, #DDB4FF 40%, #A8F1FF 100%)',
  textEnhanced: 'linear-gradient(135deg, #FF71CE 0%, #B967FF 25%, #FF9DE2 60%, #01CDFE 100%)',
}

export const SHADOWS = {
  // Button Shadows
  primaryButton: '0 10px 25px rgba(255, 113, 206, 0.35)',
  primaryButtonHover: '0 15px 30px rgba(255, 113, 206, 0.45)',

  // Card Shadows
  card: '0 4px 6px -1px rgba(185, 103, 255, 0.15)',
  cardHover: '0 10px 15px -3px rgba(255, 113, 206, 0.25)',
}

export const PATTERNS = {
  // Dot Pattern
  dots: 'radial-gradient(circle, rgba(255, 113, 206, 0.1) 1px, transparent 1px)',

  // Animated Dots Pattern
  dotsAnimated: `
    radial-gradient(circle, rgba(255, 113, 206, 0.12) 1.5px, transparent 1.5px),
    radial-gradient(circle, rgba(1, 205, 254, 0.1) 1px, transparent 1px)
  `,

  // Grid Pattern
  grid: `
    linear-gradient(rgba(1, 205, 254, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 113, 206, 0.05) 1px, transparent 1px)
  `,

  // Diagonal Pattern
  diagonal: `
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 113, 206, 0.05) 10px,
      rgba(255, 113, 206, 0.05) 20px
    )
  `,
}

export const TYPOGRAPHY = {
  fonts: {
    heading: 'Space Grotesk, system-ui, sans-serif',
    body: 'DM Sans, system-ui, sans-serif',
  },
  sizes: {
    h1: '3rem', // 48px - 4rem (64px) for larger screens
    h2: '2.25rem', // 36px - 3rem (48px) for larger screens
    h3: '1.875rem', // 30px - 2.25rem (36px) for larger screens
    h4: '1.5rem', // 24px - 2rem (32px) for larger screens
  },
  weights: {
    heading: 700,
    headingAlt: 600,
    body: 400,
  },
}

export const TRANSITIONS = {
  default: '0.3s ease',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
}

export const FOCUS_RING = {
  color: COLORS.accent,
  ring: 'rgba(185, 103, 255, 0.3)',
}

