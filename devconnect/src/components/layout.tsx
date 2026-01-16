import type { ReactNode } from "react"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-2xl mx-auto p-6">{children}</div>
    </div>
  )
}
