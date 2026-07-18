import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = 'tsx', showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split('\n')

  return (
    <div className="relative group rounded-xl overflow-hidden">
      {/* Language badge + copy button */}
      <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
        <span className="text-[10px] font-mono uppercase text-[var(--text-secondary)]/40 tracking-wider">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-[var(--text-primary)]/5 hover:bg-[var(--text-primary)]/10 transition-colors opacity-0 group-hover:opacity-100"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-green-500" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
          )}
        </button>
      </div>

      <pre className="code-block p-5 overflow-x-auto">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              {showLineNumbers && (
                <span className="select-none text-[var(--text-secondary)]/30 w-8 text-right mr-4 flex-shrink-0">
                  {i + 1}
                </span>
              )}
              <span dangerouslySetInnerHTML={{ __html: highlightSyntax(line) }} />
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

function highlightSyntax(line: string): string {
  // First escape HTML to prevent raw < and > from breaking the dangerouslySetInnerHTML
  const escaped = line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  return escaped
    // Comments
    .replace(/(\/\/.*)$/g, '<span class=comment>$1</span>')
    .replace(/(\/\*.*?\*\/)/g, '<span class=comment>$1</span>')
    // JSX tags
    .replace(/(&lt;\/?)([\w.]*)/g, '$1<span class=component>$2</span>')
    // Strings
    .replace(/(&quot;[^&]*&quot;|"[^"]*"|'[^']*'|`[^`]*`)/g, '<span class=string>$1</span>')
    // Keywords
    .replace(/\b(import|from|export|default|const|let|var|function|return|if|else|new|typeof|interface|type)\b/g, '<span class=keyword>$1</span>')
    // Braces/brackets
    .replace(/([{}[\]()])/g, '<span class=bracket>$1</span>')
}

// Simple inline code
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-[var(--card-bg)] text-[13px] font-mono px-1.5 py-0.5 rounded-md text-[var(--text-primary)]/80">
      {children}
    </code>
  )
}
