import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn Python Programming',
  description: 'A comprehensive guide to Python programming from beginner to advanced levels',
  keywords: 'Python, programming, learning, coding',
  author: 'Jaxs',
  openGraph: {
    title: 'Learn Python Programming',
    description: 'A comprehensive guide to Python programming from beginner to advanced levels',
    url: 'https://your-website-url.com',
    siteName: 'Learn Python',
    images: [
      {
        url: 'https://your-website-url.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}