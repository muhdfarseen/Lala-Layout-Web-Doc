import { Outlet } from 'react-router-dom'
import { DocsSidebar } from '@/components/DocsSidebar'

export function DocsLayout() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="flex gap-10">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-[820px]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
