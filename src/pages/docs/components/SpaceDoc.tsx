import { PropsTable } from '@/components/PropsTable'
import { Configurator } from '@/components/Configurator'
import { DecorativeBox } from '@/components/DecorativeBox'

const SPACING = { xs: '10px', sm: '12px', md: '16px', lg: '20px', xl: '32px' }

export function SpaceDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">Space</h1>
        <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed">
          Adds blank space between elements. Use <code className="bg-[var(--card-bg)] px-1.5 py-0.5 rounded text-xs font-mono">h</code> for vertical space and <code className="bg-[var(--card-bg)] px-1.5 py-0.5 rounded text-xs font-mono">w</code> for horizontal space.
        </p>
      </div>

      {/* Interactive Configurator */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Usage</h2>
        <Configurator
          component="Space"
          controls={[
            {
              type: 'slider',
              label: 'Height (h)',
              prop: 'h',
              data: [
                { value: 'xs', label: 'xs' },
                { value: 'sm', label: 'sm' },
                { value: 'md', label: 'md' },
                { value: 'lg', label: 'lg' },
                { value: 'xl', label: 'xl' },
              ],
              defaultValue: 'md',
            },
          ]}
          codeTemplate={(props) => {
            return `function Demo() {
  return (
    <>
      <DecorativeBox />
      <Space h="${props.h}" />
      <DecorativeBox />
    </>
  );
}`
          }}
        >
          {(props) => {
            const h = SPACING[props.h as keyof typeof SPACING] || '16px'
            return (
              <div className="flex flex-col items-center w-full">
                <DecorativeBox className="h-12 w-full" />
                <div className="w-full flex items-center justify-center relative" style={{ height: h }}>
                  <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-orange-300" />
                  <span className="text-[10px] text-orange-500 font-mono bg-[var(--bg-primary)] px-1 relative z-10">
                    {props.h as string} ({h})
                  </span>
                </div>
                <DecorativeBox className="h-12 w-full" />
              </div>
            )
          }}
        </Configurator>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Props</h2>
        <PropsTable
          props={[
            { name: 'w', type: 'LalaSpacing', default: '—', description: 'Width (horizontal space)' },
            { name: 'h', type: 'LalaSpacing', default: '—', description: 'Height (vertical space)' },
          ]}
        />
      </section>
    </div>
  )
}
