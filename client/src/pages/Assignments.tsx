import { useState } from 'react'

interface Assignment {
  id: number
  task: string
  subject: string
  dueDate: string
  priority: 'high' | 'med' | 'low'
  completed: boolean
}

const initialAssignments: Assignment[] = [
  { id: 1, task: 'Practice Exam', subject: 'Maths', dueDate: '2026-05-23', priority: 'high', completed: false },
  { id: 2, task: 'Essay Draft', subject: 'English', dueDate: '2026-05-25', priority: 'med', completed: false },
  { id: 3, task: 'Lab Report', subject: 'Physics', dueDate: '2026-05-27', priority: 'low', completed: true },
]

export default function Assignments() {
  const [assignments, setAssignments] = useState<Assignment[]>(initialAssignments)
  const [task, setTask] = useState('')
  const [subject, setSubject] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState<'high' | 'med' | 'low'>('med')

  const addAssignment = () => {
    if (!task || !subject || !dueDate) return
    const newAssignment: Assignment = {
      id: Date.now(),
      task,
      subject,
      dueDate,
      priority,
      completed: false,
    }
    setAssignments([...assignments, newAssignment])
    setTask('')
    setSubject('')
    setDueDate('')
    setPriority('med')
  }

  const toggleComplete = (id: number) => {
    setAssignments(assignments.map(a =>
      a.id === id ? { ...a, completed: !a.completed } : a
    ))
  }

  const deleteAssignment = (id: number) => {
    setAssignments(assignments.filter(a => a.id !== id))
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Assignments</h2>
        <p className="text-gray-500 mt-1">Track and manage your tasks</p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-4">Add Assignment</h3>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <input
            type="text"
            placeholder="Task name"
            value={task}
            onChange={e => setTask(e.target.value)}
            className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2.5 border border-gray-700 focus:outline-none focus:border-emerald-500"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2.5 border border-gray-700 focus:outline-none focus:border-emerald-500"
          />
          <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2.5 border border-gray-700 focus:outline-none focus:border-emerald-500"
          />
          <select
            value={priority}
            onChange={e => setPriority(e.target.value as 'high' | 'med' | 'low')}
            className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2.5 border border-gray-700 focus:outline-none focus:border-emerald-500"
          >
            <option value="high">High Priority</option>
            <option value="med">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
        <button
          onClick={addAssignment}
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
        >
          Add Assignment
        </button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
        <h3 className="text-sm font-medium text-gray-400 mb-4">Your Assignments</h3>
        {assignments.length === 0 && (
          <p className="text-gray-600 text-sm">No assignments yet — add one above!</p>
        )}
        {assignments.map(a => (
          <div key={a.id} className="flex items-center gap-3 py-3 border-b border-gray-800 last:border-0">
            <button
              onClick={() => toggleComplete(a.id)}
              className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${
                a.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-600'
              }`}
            >
              {a.completed && <span className="text-white text-xs">✓</span>}
            </button>
            <div className="flex-1">
              <p className={`text-sm ${a.completed ? 'line-through text-gray-600' : 'text-white'}`}>{a.task}</p>
              <p className="text-xs text-gray-500">{a.subject} · Due {a.dueDate}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              a.priority === 'high' ? 'bg-red-500/10 text-red-400' :
              a.priority === 'med' ? 'bg-amber-500/10 text-amber-400' :
              'bg-emerald-500/10 text-emerald-400'
            }`}>
              {a.priority}
            </span>
            <button
              onClick={() => deleteAssignment(a.id)}
              className="text-gray-600 hover:text-red-400 text-sm transition-all"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}