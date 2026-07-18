import { PropsTable } from '@/components/PropsTable'
import { Configurator } from '@/components/Configurator'
import { DecorativeBox } from '@/components/DecorativeBox'

const SPACING = { xs: '10px', sm: '12px', md: '16px', lg: '20px', xl: '32px' }

export function FlexDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">Flex</h1>
        <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed">
          Flexbox container with shorthand props. All props support responsive values.
        </p>
      </div>

      {/* Interactive Configurator */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Usage</h2>
        <Configurator
          component="Flex"
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
                { value: 'space-around', label: 'Space-around' },
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
              defaultValue: 'flex-start',
            },
            {
              type: 'select',
              label: 'Direction',
              prop: 'direction',
              data: [
                { value: 'row', label: 'Row' },
                { value: 'column', label: 'Column' },
                { value: 'row-reverse', label: 'Row-reverse' },
                { value: 'column-reverse', label: 'Column-reverse' },
              ],
              defaultValue: 'row',
            },
            {
              type: 'select',
              label: 'Wrap',
              prop: 'wrap',
              data: [
                { value: 'wrap', label: 'Wrap' },
                { value: 'nowrap', label: 'Nowrap' },
                { value: 'wrap-reverse', label: 'Wrap-reverse' },
              ],
              defaultValue: 'wrap',
            },
          ]}
          codeTemplate={(props) => {
            return `function Demo() {
  return (
    <Flex
      gap="${props.gap}"
      justify="${props.justify}"
      align="${props.align}"
      direction="${props.direction}"
      wrap="${props.wrap}"
    >
      <DecorativeBox />
      <DecorativeBox />
      <DecorativeBox />
    </Flex>
  );
}`
          }}
        >
          {(props) => (
            <div
              style={{
                display: 'flex',
                gap: SPACING[props.gap as keyof typeof SPACING] || '16px',
                justifyContent: props.justify as string,
                alignItems: props.align as string,
                flexDirection: props.direction as React.CSSProperties['flexDirection'],
                flexWrap: props.wrap as React.CSSProperties['flexWrap'],
                minHeight: 120,
                borderRadius: 12,
                padding: 16,
              }}
            >
              <DecorativeBox className="h-12 w-24" />
              <DecorativeBox className="h-12 w-32" />
              <DecorativeBox className="h-12 w-20" />
            </div>
          )}
        </Configurator>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Props</h2>
        <PropsTable
          props={[
            { name: 'gap', type: 'StyleProp<LalaSpacing>', default: '—', description: 'Gap between items' },
            { name: 'rowGap', type: 'StyleProp<LalaSpacing>', default: '—', description: 'Row gap' },
            { name: 'columnGap', type: 'StyleProp<LalaSpacing>', default: '—', description: 'Column gap' },
            { name: 'align', type: 'StyleProp<AlignItems>', default: '—', description: 'align-items' },
            { name: 'justify', type: 'StyleProp<JustifyContent>', default: '—', description: 'justify-content' },
            { name: 'wrap', type: 'StyleProp<FlexWrap>', default: '—', description: 'flex-wrap' },
            { name: 'direction', type: 'StyleProp<FlexDirection>', default: '—', description: 'flex-direction' },
            { name: 'component', type: 'ElementType', default: "'div'", description: 'Polymorphic element' },
          ]}
        />
      </section>
    </div>
  )
}
