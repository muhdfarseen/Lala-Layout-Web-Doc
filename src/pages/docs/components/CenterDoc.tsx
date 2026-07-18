import { CodeBlock } from '@/components/CodeBlock'
import { PropsTable } from '@/components/PropsTable'
import { Configurator } from '@/components/Configurator'
import { DecorativeBox } from '@/components/DecorativeBox'

export function CenterDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">Center</h1>
        <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed">
          Centers content both vertically and horizontally using flexbox.
        </p>
      </div>

      {/* Interactive Configurator */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Usage</h2>
        <Configurator
          component="Center"
          controls={[
            {
              type: 'boolean',
              label: 'Inline',
              prop: 'inline',
              defaultValue: false,
            },
          ]}
          codeTemplate={(props) => {
            const inlineProp = props.inline ? '\n      inline' : ''
            return `function Demo() {
  return (
    <Center${inlineProp}
      style={{ height: 200, width: '100%' }}
    >
      <DecorativeBox />
    </Center>
  );
}`
          }}
        >
          {(props) => (
            <div
              style={{
                display: props.inline ? 'inline-flex' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 200,
                width: '100%',
                borderRadius: 12,
              }}
            >
              <DecorativeBox className="h-12 w-48" />
            </div>
          )}
        </Configurator>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Props</h2>
        <PropsTable
          props={[
            { name: 'inline', type: 'boolean', default: 'false', description: 'Use inline-flex instead of flex' },
            { name: 'component', type: 'ElementType', default: "'div'", description: 'Polymorphic element type' },
          ]}
        />
      </section>
    </div>
  )
}
