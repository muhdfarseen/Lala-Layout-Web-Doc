export function DecorativeBox({ className = '', style = {}, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`border border-[var(--text-primary)]/[0.08] rounded-md ${className}`}
      style={{
        backgroundColor: 'var(--card-bg)',
        backgroundImage: `repeating-linear-gradient(
          45deg,
          var(--text-primary, #000)05,
          var(--text-primary, #000)05 1px,
          transparent 1px,
          transparent 8px
        )`,
        ...style
      }}
      {...props}
    />
  )
}
