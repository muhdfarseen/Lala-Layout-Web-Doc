import type { ReactNode } from 'react'

interface ComponentPreviewProps {
  children: ReactNode
  className?: string
}

export function ComponentPreview({ children, className = '' }: ComponentPreviewProps) {
  return (
    <div className={`rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] p-6 ${className}`}>
      {children}
    </div>
  )
}

// Colored boxes for demos
export function DemoBox({ children, color = 'blue' }: { children?: ReactNode; color?: string }) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-100 border-blue-200 text-blue-700',
    green: 'bg-green-100 border-green-200 text-green-700',
    purple: 'bg-purple-100 border-purple-200 text-purple-700',
    orange: 'bg-orange-100 border-orange-200 text-orange-700',
    pink: 'bg-pink-100 border-pink-200 text-pink-700',
    gray: 'bg-gray-100 border-gray-200 text-gray-700',
  }

  return (
    <div className={`${colors[color] || colors.blue} border rounded-lg px-4 py-3 text-sm font-medium text-center`}>
      {children || color}
    </div>
  )
}
