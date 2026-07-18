import { PropsTable } from '@/components/PropsTable'
import { Configurator } from '@/components/Configurator'
import { DecorativeBox } from '@/components/DecorativeBox'

const SPACING = { xs: '10px', sm: '12px', md: '16px', lg: '20px', xl: '32px' }

export function StackDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">Stack</h1>
        <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed">
          Vertical flex column with consistent gap spacing. The most commonly used layout primitive.
        </p>
      </div>

      {/* Interactive Configurator */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Usage</h2>
        <Configurator
          component="Stack"
          controls={[
            {
              type: 'slider',
              label: 'Gap',
              prop: 'gap',
              data: [
                { value: 'xs', label: 'xs' },
                { value: 'sm', label: 'sm' },
                { value: 'md', label: 'md' },
                { value: 'lg', label: 'lg' },
                { value: 'xl', label: 'xl' },
              ],
              defaultValue: 'md',
            },
            {
              type: 'select',
              label: 'Align',
              prop: 'align',
              data: [
                { value: 'stretch', label: 'Stretch' },
                { value: 'center', label: 'Center' },
                { value: 'flex-start', label: 'Flex-start' },
                { value: 'flex-end', label: 'Flex-end' },
              ],
              defaultValue: 'stretch',
            },
            {
              type: 'select',
              label: 'Justify',
              prop: 'justify',
              data: [
                { value: 'flex-start', label: 'Flex-start' },
                { value: 'center', label: 'Center' },
                { value: 'flex-end', label: 'Flex-end' },
                { value: 'space-between', label: 'Space-between' },
              ],
              defaultValue: 'flex-start',
            },
          ]}
          codeTemplate={(props) => {
            const gapProp = props.gap !== 'md' ? `\n      gap="${props.gap}"` : ''
            const alignProp = props.align !== 'stretch' ? `\n      align="${props.align}"` : ''
            const justifyProp = props.justify !== 'flex-start' ? `\n      justify="${props.justify}"` : ''
            return `function Demo() {
  return (
    <Stack${gapProp}${alignProp}${justifyProp}>
      <DecorativeBox />
      <DecorativeBox />
      <DecorativeBox />
    </Stack>
  );
}`
          }}
        >
          {(props) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING[props.gap as keyof typeof SPACING] || '16px',
                alignItems: props.align as string,
                justifyContent: props.justify as string,
                minHeight: 200,
              }}
            >
              {[1, 2, 3].map((i) => (
                <DecorativeBox
                  key={i}
                  className="h-12 w-48"
                  style={{ alignSelf: props.align !== 'stretch' ? 'auto' : undefined }}
                />
              ))}
            </div>
          )}
        </Configurator>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Props</h2>
        <PropsTable
          props={[
            { name: 'gap', type: 'LalaSpacing', default: "'md'", description: 'Gap between children' },
            { name: 'align', type: 'AlignItems', default: "'stretch'", description: 'align-items' },
            { name: 'justify', type: 'JustifyContent', default: "'flex-start'", description: 'justify-content' },
          ]}
        />
      </section>
    </div>
  )
}
