import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {
  const [activePage, setActivePage] = useState('dashboard')

  const renderPage = () => {
    switch(activePage) {
      case 'dashboard': return <Dashboard />
      default: return <p className="text-gray-400">Coming soon...</p>
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-8">
        {renderPage()}
      </main>
    </div>
  )
}

export default App