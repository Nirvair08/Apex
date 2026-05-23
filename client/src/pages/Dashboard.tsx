interface StatCardProps {
  label: string
  value: string | number
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Good evening, Nirvair 👋</h2>
        <p className="text-gray-500 mt-1">Here's your study overview</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard label="Tasks due today" value={3} />
        <StatCard label="Study hours this week" value="11.5h" />
        <StatCard label="Current GPA" value="3.8" />
        <StatCard label="Tasks completed" value={24} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h3 className="text-sm font-medium text-gray-400 mb-4">Upcoming Assignments</h3>
          {[
            { subject: 'Maths', task: 'Practice Exam', due: 'Tomorrow', priority: 'high' },
            { subject: 'English', task: 'Essay Draft', due: 'In 3 days', priority: 'med' },
            { subject: 'Chemistry', task: 'Notes', due: 'In 5 days', priority: 'low' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-800 last:border-0">
              <div>
                <p className="text-sm text-white">{item.task}</p>
                <p className="text-xs text-gray-500">{item.subject} · {item.due}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                item.priority === 'high' ? 'bg-red-500/10 text-red-400' :
                item.priority === 'med' ? 'bg-amber-500/10 text-amber-400' :
                'bg-emerald-500/10 text-emerald-400'
              }`}>
                {item.priority}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h3 className="text-sm font-medium text-gray-400 mb-4">Study Hours by Subject</h3>
          {[
            { subject: 'Maths', hours: 4.0, color: 'bg-emerald-400', width: 'w-4/5' },
            { subject: 'Physics', hours: 2.8, color: 'bg-blue-400', width: 'w-3/5' },
            { subject: 'English', hours: 2.3, color: 'bg-purple-400', width: 'w-2/5' },
            { subject: 'Chemistry', hours: 1.8, color: 'bg-amber-400', width: 'w-1/3' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 mb-3">
              <span className="text-xs text-gray-500 w-20">{item.subject}</span>
              <div className="flex-1 bg-gray-800 rounded-full h-2">
                <div className={`${item.color} ${item.width} h-2 rounded-full`} />
              </div>
              <span className="text-xs text-gray-500 w-8">{item.hours}h</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}