import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  ArrowUpRight,
  Copy,
  Check,
  Component,
  Zap,
  Shield,
  Smartphone,
  Palette,
} from 'lucide-react'
import { useState } from 'react'

export function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <BentoGridSection />
      <InstallCTASection />
    </div>
  )
}

function HeroSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText('npm install @muhdfarseen/lala-layout')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative pt-16 lg:pt-28 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute inset-0 hero-bg-glow" />

      <div className="max-w-[1100px] mx-auto px-6 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 min-w-0 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full badge-green px-3.5 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium badge-green-text">Open Source · Zero Dependencies</span>
            </div>

            {/* Heading - Rollup style */}
            <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-bold leading-[1.1] tracking-tight mb-6">
              <span className="hero-gradient-text font-gummy">Lala Layout</span>
              <br />
              <span className="text-[var(--text-primary)]">
                The lightweight React{' '}
              </span>
              <br />
              <span className="text-[var(--text-primary)]">layout toolkit</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-[var(--text-secondary)] max-w-[480px] mx-auto lg:mx-0 leading-relaxed mb-10">
              8 powerful layout components — Center, Stack, Grid, Flex, and more.
              Build pixel-perfect, responsive interfaces with zero dependencies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full sm:w-auto">
              <Link to="/docs">
                <Button size="lg" className="text-sm h-12 px-8 bg-[#4555E5] hover:bg-[#3645c7] text-white border-0 rounded-xl">
                  Get Started
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 sm:gap-3 h-10 sm:h-12 px-4 sm:px-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:bg-[var(--hover-bg)] transition-all duration-200 group shadow-sm max-w-full overflow-hidden"
              >
                <code className="text-[11px] sm:text-sm font-mono text-[var(--text-secondary)] font-medium truncate">
                  npm i @muhdfarseen/lala-layout
                </code>
                <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0">
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </div>
              </button>
            </div>
          </div>

          {/* Right Logo with Rollup-style glow */}
          <div className="flex-shrink-0 relative flex items-center justify-center">
            <div className="hero-logo-glow-outer" />
            <div className="hero-logo-glow-inner" />
            <img
              src="/lalalayoutlogo.svg"
              alt="Lala Layout Logo"
              className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[280px] lg:h-[280px] relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function BentoGridSection() {
  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* 8 Components — Large card */}
          <div className="lg:col-span-2 bg-[var(--card-bg)] rounded-3xl p-6 relative overflow-hidden group hover:bg-[var(--card-bg-hover)] transition-colors duration-300">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-[var(--bg-primary)] rounded-full px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] mb-4 shadow-sm">
                <Component className="w-3.5 h-3.5" />
                8 Components
              </span>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-1.5">Everything you need for layouts</h3>
              <p className="text-sm text-[var(--text-secondary)] font-medium max-w-[400px]">
                Center, Container, Flex, Grid, Group, SimpleGrid, Space, and Stack — a complete toolkit.
              </p>
            </div>
            <div className="-mx-6 -mb-6 mt-4 md:m-0 md:absolute md:right-0 md:top-0 md:bottom-0 md:h-full md:w-auto flex justify-center md:block opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              <img src="/inwhitemode.svg" alt="Layout Illustration" className="w-full md:w-auto md:h-full object-cover rounded-b-3xl md:rounded-none dark:hidden" />
              <img src="/indarkmode.svg" alt="Layout Illustration" className="w-full md:w-auto md:h-full object-cover rounded-b-3xl md:rounded-none hidden dark:block" />
            </div>
          </div>

          {/* Responsive Props */}
          <div className="bg-[var(--card-bg)] rounded-3xl p-6 relative overflow-hidden group hover:bg-[var(--card-bg-hover)] transition-colors duration-300">
            <Smartphone className="w-5 h-5 text-[var(--text-secondary)] mb-4" />
            <h3 className="font-semibold text-[15px] text-[var(--text-primary)] mb-1.5">Responsive Props</h3>
            <p className="text-sm text-[var(--text-secondary)] font-medium">
              All layout props support breakpoint objects for mobile-first responsive design.
            </p>
            <div className="mt-4 bg-[var(--bg-primary)]/60 rounded-xl p-3 overflow-x-auto">
              <code className="text-[11px] font-mono text-[var(--text-secondary)] leading-relaxed block whitespace-nowrap">
                cols={'{{ '}base: 1, sm: 2, lg: 4{' }}'}
              </code>
            </div>
          </div>

          {/* TypeScript First */}
          <div className="bg-[var(--card-bg)] rounded-3xl p-6 relative overflow-hidden group hover:bg-[var(--card-bg-hover)] transition-colors duration-300">
            <Shield className="w-5 h-5 text-[var(--text-secondary)] mb-4" />
            <h3 className="font-semibold text-[15px] text-[var(--text-primary)] mb-1.5">TypeScript First</h3>
            <p className="text-sm text-[var(--text-secondary)] font-medium">
              Full type definitions included. Get autocompletion and type checking out of the box.
            </p>
          </div>

          {/* Zero Dependencies */}
          <div className="bg-[var(--card-bg)] rounded-3xl p-6 relative overflow-hidden group hover:bg-[var(--card-bg-hover)] transition-colors duration-300">
            <Zap className="w-5 h-5 text-[var(--text-secondary)] mb-4" />
            <h3 className="font-semibold text-[15px] text-[var(--text-primary)] mb-1.5">Zero Dependencies</h3>
            <p className="text-sm text-[var(--text-secondary)] font-medium">
              Only React as a peer dependency. No bloat, no surprises in your bundle.
            </p>
          </div>

          {/* Custom Spacing */}
          <div className="bg-[var(--card-bg)] rounded-3xl p-6 relative overflow-hidden group hover:bg-[var(--card-bg-hover)] transition-colors duration-300">
            <Palette className="w-5 h-5 text-[var(--text-secondary)] mb-4" />
            <h3 className="font-semibold text-[15px] text-[var(--text-primary)] mb-1.5">Configurable</h3>
            <p className="text-sm text-[var(--text-secondary)] font-medium">
              Customize spacing, breakpoints, and container sizes with LayoutProvider.
            </p>
          </div>


        </div>
      </div>
    </section>
  )
}

function InstallCTASection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText('npm install @muhdfarseen/lala-layout')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Ready to get started?
        </h2>
        <p className="text-base text-[var(--text-secondary)] font-medium mb-8 max-w-[480px] mx-auto">
          Install Lala Layout and start building beautiful, responsive layouts in seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 sm:gap-3 h-10 sm:h-12 px-4 sm:px-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--bg-primary)] transition-all duration-200 group"
          >
            <code className="text-[11px] sm:text-sm font-mono text-[var(--text-primary)] font-medium">
              npm i @muhdfarseen/lala-layout
            </code>
            <div className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </div>
          </button>

          <Link to="/docs">
            <Button size="lg" className="text-sm h-12 px-8 bg-[#4555E5] hover:bg-[#3645c7] text-white border-0 rounded-xl">
              Read the docs
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
