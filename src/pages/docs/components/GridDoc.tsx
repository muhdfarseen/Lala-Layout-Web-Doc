import { PropsTable } from '@/components/PropsTable'
import { Configurator } from '@/components/Configurator'
import { DecorativeBox } from '@/components/DecorativeBox'

const SPACING = { xs: '10px', sm: '12px', md: '16px', lg: '20px', xl: '32px' }

export function GridDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">Grid</h1>
        <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed">
          12-column responsive grid system with <code className="bg-[var(--card-bg)] px-1.5 py-0.5 rounded text-xs font-mono">Grid.Col</code> for defining column spans.
        </p>
      </div>

      {/* Interactive Configurator */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Usage</h2>
        <Configurator
          component="Grid"
          controls={[
            {
              type: 'number',
              label: 'Columns',
              prop: 'columns',
              min: 1,
              max: 24,
              defaultValue: 12,
            },
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
              type: 'boolean',
              label: 'Grow',
              prop: 'grow',
              defaultValue: false,
            },
          ]}
          codeTemplate={(props) => {
            const colsProp = props.columns !== 12 ? `\n      columns={${props.columns}}` : ''
            const gapProp = props.gap !== 'md' ? `\n      gap="${props.gap}"` : ''
            const growProp = props.grow ? '\n      grow' : ''
            return `function Demo() {
  return (
    <Grid${colsProp}${gapProp}${growProp}>
      <Grid.Col span={4}><DecorativeBox /></Grid.Col>
      <Grid.Col span={4}><DecorativeBox /></Grid.Col>
      <Grid.Col span={4}><DecorativeBox /></Grid.Col>
      <Grid.Col span={4}><DecorativeBox /></Grid.Col>
    </Grid>
  );
}`
          }}
        >
          {(props) => {
            const cols = props.columns as number
            const spanRatio = 4 / 12 // Each col spans 4 out of 12
            const gap = SPACING[props.gap as keyof typeof SPACING] || '16px'

            return (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${cols}, 1fr)`,
                  gap,
                }}
              >
                {[1, 2, 3, 4].map((n) => {
                  const span = Math.round(cols * spanRatio)
                  return (
                    <DecorativeBox
                      key={n}
                      style={{
                        gridColumn: `span ${span}`,
                        ...(props.grow && n > Math.floor(cols / span) * 1 ? { gridColumn: `span ${span}`, flex: 1 } : {}),
                      }}
                      className="h-12 w-full"
                    />
                  )
                })}
              </div>
            )
          }}
        </Configurator>
      </section>

      {/* Grid Props */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Grid Props</h2>
        <PropsTable
          props={[
            { name: 'columns', type: 'number', default: '12', description: 'Total number of columns' },
            { name: 'gap', type: "StyleProp<LalaSpacing>", default: "'md'", description: 'Gap between columns and rows' },
            { name: 'rowGap', type: 'StyleProp<LalaSpacing>', default: '—', description: 'Vertical gap override' },
            { name: 'columnGap', type: 'StyleProp<LalaSpacing>', default: '—', description: 'Horizontal gap override' },
            { name: 'grow', type: 'boolean', default: 'false', description: 'Last row columns fill remaining space' },
            { name: 'justify', type: 'JustifyContent', default: "'flex-start'", description: 'justify-content' },
            { name: 'align', type: 'AlignItems', default: "'stretch'", description: 'align-items' },
            { name: 'overflow', type: "'visible'|'hidden'", default: "'visible'", description: 'Overflow behavior' },
          ]}
        />
      </section>

      {/* Grid.Col Props */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Grid.Col Props</h2>
        <PropsTable
          props={[
            { name: 'span', type: 'StyleProp<ColSpan>', default: '12', description: 'Number of columns to span' },
            { name: 'offset', type: 'StyleProp<number>', default: '—', description: 'Number of columns to offset' },
            { name: 'order', type: 'StyleProp<number>', default: '—', description: 'Display order' },
          ]}
        />
      </section>
    </div>
  )
}
