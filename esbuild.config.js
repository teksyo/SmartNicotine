import * as esbuild from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Copy index.html and replace script reference
mkdirSync('./dist', { recursive: true })

const htmlContent = readFileSync('./index.html', 'utf-8')
const updatedHtml = htmlContent.replace(
  '<script type="module" src="/src/main.tsx"></script>',
  '<script src="/assets/main.js"></script><link rel="stylesheet" href="/assets/main.css">'
)
writeFileSync('./dist/index.html', updatedHtml)

// Copy public assets
try {
  mkdirSync('./dist/assets', { recursive: true })
  copyFileSync('./public/polymet-logo.svg', './dist/polymet-logo.svg')
} catch (e) {
  console.log('No public assets to copy or already exists')
}

// Build with esbuild
await esbuild.build({
  entryPoints: ['./src/main.tsx'],
  bundle: true,
  outdir: './dist/assets',
  entryNames: '[name]',
  assetNames: '[name]',
  loader: {
    '.tsx': 'tsx',
    '.ts': 'ts',
    '.css': 'css',
    '.svg': 'file',
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file'
  },
  target: 'es2020',
  format: 'iife',
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  minify: true,
  sourcemap: false,
  external: [],
  jsx: 'automatic'
})

console.log('Build completed successfully!')