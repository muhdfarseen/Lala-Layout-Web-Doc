import { CodeBlock } from '@/components/CodeBlock'
import { useState } from 'react'

const PACKAGE_MANAGERS = [
  {
    id: 'yarn',
    name: 'yarn',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#2C8EBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" fill="#2C8EBB" fillOpacity="0.2"/>
        <path d="M8 8l3 4.5V17M14 8l-3 4.5" />
      </svg>
    ),
    command: 'yarn add @muhdfarseen/lala-layout'
  },
  {
    id: 'npm',
    name: 'npm',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path fill="#CB3837" d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0z" />
        <path fill="#FFF" d="M5.115 5.358h13.77v13.284h-4.59V8.905h-4.59v9.737h-4.59z" />
      </svg>
    ),
    command: 'npm install @muhdfarseen/lala-layout'
  },
  {
    id: 'pnpm',
    name: 'pnpm',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="#F69220">
        <path d="M2.2 0h6.1v6.1H2.2zM9.5 0h6.1v6.1H9.5zM16.9 0h6.1v6.1h-6.1zM2.2 7.3h6.1v6.1H2.2zM9.5 7.3h6.1v6.1H9.5zM2.2 14.6h6.1v6.1H2.2z"/>
      </svg>
    ),
    command: 'pnpm add @muhdfarseen/lala-layout'
  }
]

export function GettingStarted() {
  const [activeTab, setActiveTab] = useState('yarn')

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">Getting Started</h1>
        <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed max-w-[600px]">
          Install Lala Layout and start building beautiful, responsive layouts in your React project.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Installation</h2>
        <p className="text-sm text-[var(--text-secondary)] font-medium">
          Install the package using your preferred package manager:
        </p>
        <div className="pt-2">
          <div className="inline-flex bg-[var(--card-bg)] rounded-lg p-1 mb-3">
            {PACKAGE_MANAGERS.map((pm) => {
              const isActive = activeTab === pm.id
              return (
                <button
                  key={pm.id}
                  onClick={() => setActiveTab(pm.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {pm.icon}
                  {pm.name}
                </button>
              )
            })}
          </div>
          <div>
            <CodeBlock
              code={PACKAGE_MANAGERS.find(p => p.id === activeTab)?.command || ''}
              language="bash"
            />
          </div>
        </div>
        <div className="info-box-green rounded-xl p-4">
          <p className="text-sm info-box-green-text font-medium">
            <strong>Peer dependency:</strong> React ≥ 17. No other dependencies required!
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Quick Start</h2>
        <p className="text-sm text-[var(--text-secondary)] font-medium">
          Import the components you need and start building:
        </p>
        <CodeBlock
          code={`import { Stack, Group, Grid, Container, Center, Flex, SimpleGrid, Space } from '@muhdfarseen/lala-layout';

function App() {
  return (
    <Container size="lg">
      <Stack gap="xl">
        <h1>My App</h1>
        
        <Group justify="space-between">
          <span>Left</span>
          <span>Right</span>
        </Group>

        <Grid>
          <Grid.Col span={6}>Half</Grid.Col>
          <Grid.Col span={6}>Half</Grid.Col>
        </Grid>

        <SimpleGrid cols={3}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}`}
          language="tsx"
          showLineNumbers
        />
      </section>

      {/* Responsive Values */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Responsive Values</h2>
        <p className="text-sm text-[var(--text-secondary)] font-medium">
          Components with <code className="bg-[var(--card-bg)] px-1.5 py-0.5 rounded text-xs font-mono text-[var(--text-primary)]">StyleProp</code> props support responsive values using breakpoint objects:
        </p>
        <CodeBlock
          code={`<SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
  {items}
</SimpleGrid>`}
          language="tsx"
        />
        <div className="rounded-xl border border-[var(--border-color)] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--card-bg)]">
                <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)] text-[13px]">Breakpoint</th>
                <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)] text-[13px]">Min-width</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['xs', '36em (576px)'],
                ['sm', '48em (768px)'],
                ['md', '62em (992px)'],
                ['lg', '75em (1200px)'],
                ['xl', '88em (1408px)'],
              ].map(([bp, width], i) => (
                <tr key={bp} className={i % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--card-bg)]/50'}>
                  <td className="py-3 px-4 font-mono text-[13px] font-medium text-[var(--text-primary)]">{bp}</td>
                  <td className="py-3 px-4 text-[13px] text-[var(--text-secondary)]">{width}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Spacing Scale */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Spacing Scale</h2>
        <div className="rounded-xl border border-[var(--border-color)] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--card-bg)]">
                <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)] text-[13px]">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)] text-[13px]">Value</th>
                <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)] text-[13px]">Preview</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['xs', '0.625rem (10px)'],
                ['sm', '0.75rem (12px)'],
                ['md', '1rem (16px)'],
                ['lg', '1.25rem (20px)'],
                ['xl', '2rem (32px)'],
              ].map(([name, value], i) => (
                <tr key={name} className={i % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--card-bg)]/50'}>
                  <td className="py-3 px-4 font-mono text-[13px] font-medium text-[var(--text-primary)]">{name}</td>
                  <td className="py-3 px-4 text-[13px] text-[var(--text-secondary)]">{value}</td>
                  <td className="py-3 px-4">
                    <div className="bg-[var(--text-primary)]/10 rounded" style={{ width: value.split(' ')[0], height: '8px' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Custom Configuration */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Custom Configuration</h2>
        <p className="text-sm text-[var(--text-secondary)] font-medium">
          Use <code className="bg-[var(--card-bg)] px-1.5 py-0.5 rounded text-xs font-mono text-[var(--text-primary)]">LayoutProvider</code> to customize spacing, breakpoints, and container sizes:
        </p>
        <CodeBlock
          code={`import { LayoutProvider } from '@muhdfarseen/lala-layout';

function App() {
  return (
    <LayoutProvider
      spacing={{ md: '1.5rem', xl: '3rem' }}
      breakpoints={{ sm: '40em', lg: '80em' }}
      containerSizes={{ lg: '80rem' }}
    >
      <YourApp />
    </LayoutProvider>
  );
}`}
          language="tsx"
          showLineNumbers
        />
      </section>
    </div>
  )
}
