import { PropsTable } from '@/components/PropsTable'
import { Configurator } from '@/components/Configurator'
import { DecorativeBox } from '@/components/DecorativeBox'

export function ContainerDoc() {
  const sizeWidths: Record<string, string> = { xs: '540px', sm: '720px', md: '960px', lg: '1140px', xl: '1320px' }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">Container</h1>
        <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed">
          Centers content horizontally with a configurable max-width. Perfect for page-level content wrapping.
        </p>
      </div>

      {/* Interactive Configurator */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Usage</h2>
        <Configurator
          component="Container"
          controls={[
            {
              type: 'select',
              label: 'Size',
              prop: 'size',
              data: [
                { value: 'xs', label: 'xs (540px)' },
                { value: 'sm', label: 'sm (720px)' },
                { value: 'md', label: 'md (960px)' },
                { value: 'lg', label: 'lg (1140px)' },
                { value: 'xl', label: 'xl (1320px)' },
              ],
              defaultValue: 'md',
            },
            {
              type: 'boolean',
              label: 'Fluid',
              prop: 'fluid',
              defaultValue: false,
            },
          ]}
          codeTemplate={(props) => {
            const sizeProp = props.size !== 'md' ? ` size="${props.size}"` : ''
            const fluidProp = props.fluid ? ' fluid' : ''
            return `function Demo() {
  return (
    <Container${sizeProp}${fluidProp}>
      <DecorativeBox />
    </Container>
  );
}`
          }}
        >
          {(props) => {
            const maxW = props.fluid ? '100%' : sizeWidths[props.size as string] || '960px'
            return (
              <div className="w-full">
                <DecorativeBox
                  className="h-24 mx-auto transition-all duration-300 w-full"
                  style={{ maxWidth: maxW }}
                />
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
            { name: 'size', type: "'xs'|'sm'|'md'|'lg'|'xl'|number|string", default: "'md'", description: 'Container max-width' },
            { name: 'fluid', type: 'boolean', default: 'false', description: '100% width, no max-width' },
            { name: 'strategy', type: "'block'|'grid'", default: "'block'", description: 'Centering strategy' },
          ]}
        />
      </section>

      {/* Size Defaults */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Size Defaults</h2>
        <div className="rounded-xl border border-[var(--border-color)] overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-[var(--card-bg)]"><th className="text-left py-3 px-4 font-semibold text-[13px]">Size</th><th className="text-left py-3 px-4 font-semibold text-[13px]">Width</th></tr></thead>
            <tbody>
              {Object.entries(sizeWidths).map(([s, w], i) => (
                <tr key={s} className={i % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--card-bg)]/50'}>
                  <td className="py-3 px-4 font-mono text-[13px] font-medium">{s}</td>
                  <td className="py-3 px-4 text-[13px] text-[var(--text-secondary)]">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
