import { useState, useRef, useEffect, type ReactNode } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { CodeBlock } from '@/components/CodeBlock'

// ─── Control Types ───────────────────────────────────────────────

export interface SelectControl {
  type: 'select'
  label: string
  prop: string
  data: { value: string; label: string }[]
  defaultValue: string
}

export interface SegmentControl {
  type: 'segment'
  label: string
  prop: string
  data: { value: string; label: string }[]
  defaultValue: string
}

export interface SliderControl {
  type: 'slider'
  label: string
  prop: string
  data: { value: string; label: string }[]
  defaultValue: string
}

export interface BooleanControl {
  type: 'boolean'
  label: string
  prop: string
  defaultValue: boolean
}

export interface NumberControl {
  type: 'number'
  label: string
  prop: string
  min: number
  max: number
  defaultValue: number
}

export type ConfiguratorControl = SelectControl | SegmentControl | SliderControl | BooleanControl | NumberControl

// ─── Props ───────────────────────────────────────────────────────

interface ConfiguratorProps {
  component: string
  controls: ConfiguratorControl[]
  children: (props: Record<string, unknown>) => ReactNode
  codeTemplate: (props: Record<string, unknown>) => string
  importStatement?: string
}

// ─── Component ───────────────────────────────────────────────────

export function Configurator({ component, controls, children, codeTemplate, importStatement }: ConfiguratorProps) {
  // Initialize state from defaults
  const [values, setValues] = useState<Record<string, unknown>>(() => {
    const initial: Record<string, unknown> = {}
    controls.forEach((ctrl) => {
      initial[ctrl.prop] = ctrl.defaultValue
    })
    return initial
  })

  const updateValue = (prop: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [prop]: value }))
  }

  const code = importStatement
    ? `${importStatement}\n\n${codeTemplate(values)}`
    : `import { ${component} } from '@muhdfarseen/lala-layout';\n\n${codeTemplate(values)}`

  return (
    <div className="rounded-2xl border border-[var(--border-color)] overflow-hidden bg-[var(--bg-primary)]">
      {/* Top: Preview + Controls */}
      <div className="flex flex-col lg:flex-row">
        {/* Preview area */}
        <div className="flex-1 bg-[var(--bg-primary)] p-6 min-h-[200px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[var(--border-color)]">
          <div className="w-full">
            {children(values)}
          </div>
        </div>

        {/* Controls panel */}
        <div className="w-full lg:w-[280px] p-5 space-y-5 flex-shrink-0">
          {controls.map((ctrl) => (
            <div key={ctrl.prop}>
              <ControlRenderer control={ctrl} value={values[ctrl.prop]} onChange={(v) => updateValue(ctrl.prop, v)} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Code */}
      <div className="border-t border-[var(--border-color)]">
        <CodeBlock code={code} language="tsx" />
      </div>
    </div>
  )
}

// ─── Control Renderers ───────────────────────────────────────────

function ControlRenderer({ control, value, onChange }: {
  control: ConfiguratorControl
  value: unknown
  onChange: (v: unknown) => void
}) {
  switch (control.type) {
    case 'select':
      return <SelectInput control={control} value={value as string} onChange={onChange} />
    case 'segment':
      return <SegmentInput control={control} value={value as string} onChange={onChange} />
    case 'slider':
      return <SliderInput control={control} value={value as string} onChange={onChange} />
    case 'boolean':
      return <BooleanInput control={control} value={value as boolean} onChange={onChange} />
    case 'number':
      return <NumberInput control={control} value={value as number} onChange={onChange} />
  }
}

function SelectInput({ control, value, onChange }: { control: SelectControl; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedLabel = control.data.find(d => d.value === value)?.label || value

  return (
    <div className="relative" ref={ref}>
      <label className="block text-[13px] font-semibold text-[var(--text-primary)] mb-1.5">{control.label}</label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between h-9 px-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]/10 transition-colors"
      >
        <span>{selectedLabel}</span>
        <ChevronDown className="h-4 w-4 text-[var(--text-secondary)]" />
      </button>

      {open && (
        <div className="absolute z-50 w-full mt-1 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg shadow-md py-1 overflow-hidden">
          {control.data.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
              }}
              className="flex w-full items-center justify-between px-3 py-1.5 text-sm hover:bg-[var(--hover-bg)] cursor-pointer text-left transition-colors text-[var(--text-primary)]"
            >
              <span className={opt.value === value ? "font-semibold" : ""}>{opt.label}</span>
              {opt.value === value && <Check className="h-4 w-4 text-[var(--text-primary)]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function SegmentInput({ control, value, onChange }: { control: SegmentControl; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-[13px] font-semibold text-[var(--text-primary)] mb-1.5">{control.label}</label>
      <div className="flex bg-[var(--card-bg)] rounded-lg p-0.5">
        {control.data.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`flex-1 px-2 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${
              value === opt.value
                ? 'bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function SliderInput({ control, value, onChange }: { control: SliderControl; value: string; onChange: (v: string) => void }) {
  const idx = control.data.findIndex((d) => d.value === value)

  return (
    <div>
      <label className="block text-[13px] font-semibold text-[var(--text-primary)] mb-1.5">
        {control.label}
        <span className="text-[11px] text-[var(--text-secondary)] font-mono ml-2">{value}</span>
      </label>
      <div className="relative">
        <input
          type="range"
          min={0}
          max={control.data.length - 1}
          value={idx >= 0 ? idx : 0}
          onChange={(e) => onChange(control.data[Number(e.target.value)].value)}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer slider-track"
        />
        <div className="flex justify-between mt-1">
          {control.data.map((d) => (
            <span key={d.value} className={`text-[10px] font-medium ${d.value === value ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]/50'}`}>
              {d.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function BooleanInput({ control, value, onChange }: { control: BooleanControl; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-[13px] font-semibold text-[var(--text-primary)]">{control.label}</label>
      <button
        onClick={() => onChange(!value)}
        className={`relative rounded-full transition-colors duration-200 cursor-pointer ${
          value ? 'bg-[var(--text-primary)]' : 'bg-[var(--border-color)]'
        }`}
        style={{ width: 40, height: 22 }}
      >
        <span
          className={`absolute top-[2px] left-[2px] w-[18px] h-[18px] rounded-full bg-[var(--bg-primary)] shadow-sm transition-transform duration-200 ${
            value ? 'translate-x-[18px]' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}

function NumberInput({ control, value, onChange }: { control: NumberControl; value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <label className="block text-[13px] font-semibold text-[var(--text-primary)] mb-1.5">
        {control.label}
        <span className="text-[11px] text-[var(--text-secondary)] font-mono ml-2">{value}</span>
      </label>
      <input
        type="range"
        min={control.min}
        max={control.max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer slider-track"
      />
    </div>
  )
}
