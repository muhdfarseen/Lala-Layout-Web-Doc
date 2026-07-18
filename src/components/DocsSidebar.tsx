import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Box, Columns3, Grip, LayoutGrid, Layers, MoveHorizontal, AlignVerticalSpaceAround, UnfoldVertical, ChevronRight } from 'lucide-react'

export const docsComponents = [
  { name: 'Center', path: '/docs/components/center', icon: AlignVerticalSpaceAround },
  { name: 'Container', path: '/docs/components/container', icon: Box },
  { name: 'Flex', path: '/docs/components/flex', icon: MoveHorizontal },
  { name: 'Grid', path: '/docs/components/grid', icon: LayoutGrid },
  { name: 'Group', path: '/docs/components/group', icon: Columns3 },
  { name: 'SimpleGrid', path: '/docs/components/simplegrid', icon: Grip },
  { name: 'Space', path: '/docs/components/space', icon: UnfoldVertical },
  { name: 'Stack', path: '/docs/components/stack', icon: Layers },
]

export function DocsSidebar() {
  const location = useLocation()

  return (
    <aside className="w-[260px] flex-shrink-0 hidden lg:block">
      <div className="sticky top-20 space-y-1 pr-4">
        {/* Getting Started */}
        <div className="mb-6">
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2 px-3">
            Overview
          </h3>
          <Link
            to="/docs"
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              location.pathname === '/docs'
                ? 'sidebar-active'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--hover-bg)]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Getting Started
          </Link>
        </div>

        {/* Components */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-2 px-3">
            Components
          </h3>
          <div className="space-y-0.5">
            {docsComponents.map(({ name, path, icon: Icon }) => {
              const isActive = location.pathname === path
              return (
                <Link
                  key={name}
                  to={path}
                  className={`flex items-center justify-between gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? 'sidebar-active'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--hover-bg)]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    {name}
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'opacity-100' : ''}`} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}
