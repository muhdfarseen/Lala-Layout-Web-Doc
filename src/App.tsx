import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { DocsLayout } from '@/layouts/DocsLayout'
import { Home } from '@/pages/Home'
import { GettingStarted } from '@/pages/docs/GettingStarted'
import { CenterDoc } from '@/pages/docs/components/CenterDoc'
import { ContainerDoc } from '@/pages/docs/components/ContainerDoc'
import { FlexDoc } from '@/pages/docs/components/FlexDoc'
import { GridDoc } from '@/pages/docs/components/GridDoc'
import { GroupDoc } from '@/pages/docs/components/GroupDoc'
import { SimpleGridDoc } from '@/pages/docs/components/SimpleGridDoc'
import { SpaceDoc } from '@/pages/docs/components/SpaceDoc'
import { StackDoc } from '@/pages/docs/components/StackDoc'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<DocsLayout />}>
              <Route index element={<GettingStarted />} />
              <Route path="components/center" element={<CenterDoc />} />
              <Route path="components/container" element={<ContainerDoc />} />
              <Route path="components/flex" element={<FlexDoc />} />
              <Route path="components/grid" element={<GridDoc />} />
              <Route path="components/group" element={<GroupDoc />} />
              <Route path="components/simplegrid" element={<SimpleGridDoc />} />
              <Route path="components/space" element={<SpaceDoc />} />
              <Route path="components/stack" element={<StackDoc />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
