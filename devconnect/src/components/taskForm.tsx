import { useState } from "react"

type TaskFormProps = {
  onAdd: (title: string) => void
}

export function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title)
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add a task..."
        className="flex-1 border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  )
}
