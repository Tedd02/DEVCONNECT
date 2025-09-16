type TaskProps = {
  id: number
  title: string
  completed: boolean
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function Task({ id, title, completed, onToggle, onDelete }: TaskProps) {
  return (
    <div className="flex items-center justify-between bg-white shadow p-3 rounded mb-2">
      <div
        onClick={() => onToggle(id)}
        className={`cursor-pointer ${completed ? "line-through text-gray-400" : ""}`}
      >
        {title}
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  )
}
