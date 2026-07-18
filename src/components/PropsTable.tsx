interface Prop {
  name: string
  type: string
  default: string
  description: string
}

interface PropsTableProps {
  props: Prop[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="rounded-xl border border-[var(--border-color)] overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[var(--card-bg)]">
            <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)] text-[13px]">Prop</th>
            <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)] text-[13px]">Type</th>
            <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)] text-[13px]">Default</th>
            <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)] text-[13px]">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr key={prop.name} className={i % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--card-bg)]/50'}>
              <td className="py-3 px-4 font-mono text-[13px] text-[var(--text-primary)] font-medium">{prop.name}</td>
              <td className="py-3 px-4">
                <code className="bg-[var(--card-bg)] px-1.5 py-0.5 rounded text-[12px] font-mono text-[var(--text-secondary)]">
                  {prop.type}
                </code>
              </td>
              <td className="py-3 px-4">
                <code className="text-[12px] font-mono text-[var(--text-secondary)]">
                  {prop.default}
                </code>
              </td>
              <td className="py-3 px-4 text-[13px] text-[var(--text-secondary)] font-medium">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
