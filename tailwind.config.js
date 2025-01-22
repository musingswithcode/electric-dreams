import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md,svelte,ts}'],

  // Disables Tailwind's reset and usage of rgb/opacity
  corePlugins: {
    preflight: false,
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false
  },

  // Prevents Tailwind's core components
  blocklist: ['container', 'grid'],

  // Prevents Tailwind from generating that wall of empty custom properties
  experimental: {
    optimizeUniversalDefaults: true
  },

  theme: {
    colors: {
      accent: 'var(--color-accent)',
      dark: 'var(--color-dark)',
      light: 'var(--color-light)',
      muted: 'var(--color-muted)',
      lightest: 'var(--color-lightest)'
    },
    fontFamily: {
      serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif]
    },
    fontSize: {
      '-2': 'var(--step--2)',
      '-1': 'var(--step--1)',
      '0': 'var(--step-0)',
      '1': 'var(--step-1)',
      '2': 'var(--step-2)',
      '3': 'var(--step-3)',
      '4': 'var(--step-4)',
      '5': 'var(--step-5)'
    },
    lineHeight: {
      none: 'var(--leading-none)',
      tight: 'var(--leading-tight)',
      normal: 'var(--leading-normal)'
    },
    spacing: {
      '3xs': 'var(--space-3xs)',
      '2xs': 'var(--space-2xs)',
      'xs': 'var(--space-xs)',
      's': 'var(--space-s)',
      'm': 'var(--space-m)',
      'l': 'var(--space-l)',
      'xl': 'var(--space-xl)',
      '2xl': 'var(--space-2xl)',
      '3xl': 'var(--space-3xl)',

      '3xs-2xs': 'var(--space-3xs-2xs)',
      '2xs-xs': 'var(--space-2xs-xs)',
      'xs-s': 'var(--space-xs-s)',
      's-m': 'var(--space-s-m)',
      'm-l': 'var(--space-m-l)',
      'l-xl': 'var(--space-l-xl)',
      'xl-2xl': 'var(--space-xl-2xl)',
      '2xl-3xl': 'var(--space-2xl-3xl)',

      's-l': 'var(--space-s-l)'
    }
  }
}
