/** @type {import("prettier").Config} */
export default {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-svelte',
    'prettier-plugin-tailwindcss'
  ],
  overrides: [
    {files: '*.astro', options: {parser: 'astro'}},
    {files: '*.svelte', options: {parser: 'svelte'}},
    {files: '*.svg', options: {parser: 'html'}}
  ],
  semi: false,
  singleQuote: true,
  bracketSpacing: false,
  proseWrap: 'always',
  trailingComma: 'none',
  quoteProps: 'consistent',
  arrowParens: 'avoid'
}
