import { PropsTable } from '@/components/PropsTable'
import { Configurator } from '@/components/Configurator'
import { DecorativeBox } from '@/components/DecorativeBox'

const SPACING = { xs: '10px', sm: '12px', md: '16px', lg: '20px', xl: '32px' }

export function SimpleGridDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">SimpleGrid</h1>
        <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed">
          Equal-width column grid using CSS Grid. All props support responsive values.
        </p>
      </div>

      {/* Interactive Configurator */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Usage</h2>
        <Configurator
          component="SimpleGrid"
          controls={[
            {
              type: 'number',
              label: 'Columns',
              prop: 'cols',
              min: 1,
              max: 6,
              defaultValue: 3,
            },
            {
              type: 'slider',
              label: 'Spacing',
              prop: 'spacing',
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
              type: 'slider',
              label: 'Vertical Spacing',
              prop: 'verticalSpacing',
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
            const colsProp = props.cols !== 1 ? ` cols={${props.cols}}` : ''
            const spacingProp = props.spacing !== 'md' ? ` spacing="${props.spacing}"` : ''
            const vsProp = props.verticalSpacing !== 'md' ? ` verticalSpacing="${props.verticalSpacing}"` : ''
            return `function Demo() {
  return (
    <SimpleGrid${colsProp}${spacingProp}${vsProp}>
      <DecorativeBox />
      <DecorativeBox />
      <DecorativeBox />
      <DecorativeBox />
      <DecorativeBox />
    </SimpleGrid>
  );
}`
          }}
        >
          {(props) => (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
                gap: `${SPACING[props.verticalSpacing as keyof typeof SPACING] || '16px'} ${SPACING[props.spacing as keyof typeof SPACING] || '16px'}`,
              }}
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <DecorativeBox
                  key={i}
                  className="h-16 w-full"
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
            { name: 'cols', type: 'StyleProp<number>', default: '1', description: 'Number of columns' },
            { name: 'spacing', type: 'StyleProp<LalaSpacing>', default: "'md'", description: 'Column gap' },
            { name: 'verticalSpacing', type: 'StyleProp<LalaSpacing>', default: '—', description: 'Row gap (falls back to spacing)' },
          ]}
        />
      </section>
    </div>
  )
}
