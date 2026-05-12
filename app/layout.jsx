import './globals.css'

export const metadata = {
  title: 'FloraVision - Earth\'s Exhale',
  description: 'From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
