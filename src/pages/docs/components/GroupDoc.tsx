import { PropsTable } from '@/components/PropsTable'
import { Configurator } from '@/components/Configurator'
import { DecorativeBox } from '@/components/DecorativeBox'

const SPACING = { xs: '10px', sm: '12px', md: '16px', lg: '20px', xl: '32px' }

export function GroupDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">Group</h1>
        <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed">
          Horizontal flex group with support for equal-width children via the <code className="bg-[var(--card-bg)] px-1.5 py-0.5 rounded text-xs font-mono">grow</code> prop.
        </p>
      </div>

      {/* Interactive Configurator */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Usage</h2>
        <Configurator
          component="Group"
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
            {
              type: 'select',
              label: 'Align',
              prop: 'align',
              data: [
                { value: 'flex-start', label: 'Flex-start' },
                { value: 'center', label: 'Center' },
                { value: 'flex-end', label: 'Flex-end' },
                { value: 'stretch', label: 'Stretch' },
              ],
              defaultValue: 'center',
            },
            {
              type: 'boolean',
              label: 'Grow',
              prop: 'grow',
              defaultValue: false,
            },
            {
              type: 'select',
              label: 'Wrap',
              prop: 'wrap',
              data: [
                { value: 'wrap', label: 'Wrap' },
                { value: 'nowrap', label: 'Nowrap' },
              ],
              defaultValue: 'wrap',
            },
          ]}
          codeTemplate={(props) => {
            const gapProp = props.gap !== 'md' ? `\n      gap="${props.gap}"` : ''
            const justifyProp = props.justify !== 'flex-start' ? `\n      justify="${props.justify}"` : ''
            const alignProp = props.align !== 'center' ? `\n      align="${props.align}"` : ''
            const growProp = props.grow ? '\n      grow' : ''
            const wrapProp = props.wrap !== 'wrap' ? `\n      wrap="${props.wrap}"` : ''
            return `function Demo() {
  return (
    <Group${gapProp}${justifyProp}${alignProp}${growProp}${wrapProp}>
      <DecorativeBox />
      <DecorativeBox />
      <DecorativeBox />
    </Group>
  );
}`
          }}
        >
          {(props) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: SPACING[props.gap as keyof typeof SPACING] || '16px',
                justifyContent: props.justify as string,
                alignItems: props.align as string,
                flexWrap: props.wrap as React.CSSProperties['flexWrap'],
                minHeight: 80,
              }}
            >
              <DecorativeBox className="h-12 w-24" style={{ flex: props.grow ? 1 : undefined }} />
              <DecorativeBox className="h-12 w-32" style={{ flex: props.grow ? 1 : undefined }} />
              <DecorativeBox className="h-12 w-20" style={{ flex: props.grow ? 1 : undefined }} />
            </div>
          )}
        </Configurator>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Props</h2>
        <PropsTable
          props={[
            { name: 'justify', type: 'JustifyContent', default: "'flex-start'", description: 'justify-content' },
            { name: 'align', type: 'AlignItems', default: "'center'", description: 'align-items' },
            { name: 'wrap', type: 'FlexWrap', default: "'wrap'", description: 'flex-wrap' },
            { name: 'gap', type: 'LalaSpacing', default: "'md'", description: 'Gap between items' },
            { name: 'grow', type: 'boolean', default: 'false', description: 'Children grow to fill space equally' },
            { name: 'preventGrowOverflow', type: 'boolean', default: 'true', description: 'Prevent overflow when grow is true' },
          ]}
        />
      </section>
    </div>
  )
}
