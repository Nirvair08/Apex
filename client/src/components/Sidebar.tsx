
const navItems = [
  { icon: '⊞', label: 'Dashboard', id: 'dashboard' },
  { icon: '✓', label: 'Assignments', id: 'assignments' },
  { icon: '🧠', label: 'AI Study', id: 'ai' },
  { icon: '⏱', label: 'Study Session', id: 'session' },
  { icon: '📊', label: 'Grades', id: 'grades' },
]

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
}

export default function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <div className="w-56 min-h-screen bg-gray-900 border-r border-gray-800 flex flex-col p-4">
      <div className="mb-8 mt-2">
        <h1 className="text-xl font-bold text-emerald-400">Apex</h1>
        <p className="text-xs text-gray-500 mt-1">Year 11 & 12 Study</p>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              activePage === item.id
                ? 'bg-emerald-500/10 text-emerald-400 font-medium'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-4 border-t border-gray-800">
        <p className="text-xs text-gray-600 text-center">Apex v1.0</p>
      </div>
    </div>
  )
}