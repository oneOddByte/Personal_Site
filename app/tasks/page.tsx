"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit2, Trash2, GripVertical } from "lucide-react"
import { cn } from "@/lib/utils"

interface Task {
  id: string
  text: string
  created: string
}

interface TaskState {
  todo: Task[]
  doing: Task[]
  done: Task[]
}

const COLUMNS = [
  { id: "todo", title: "To Do", color: "bg-red-50 dark:bg-red-950" },
  { id: "doing", title: "Doing", color: "bg-yellow-50 dark:bg-yellow-950" },
  { id: "done", title: "Done", color: "bg-green-50 dark:bg-green-950" },
] as const

export default function TasksPage() {
  const [tasks, setTasks] = useState<TaskState>({
    todo: [],
    doing: [],
    done: [],
  })
  const [newTaskText, setNewTaskText] = useState("")
  const [selectedTask, setSelectedTask] = useState<string | null>(null)
  const [editingTask, setEditingTask] = useState<string | null>(null)
  const [editText, setEditText] = useState("")

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return

      switch (e.key) {
        case "n":
          e.preventDefault()
          document.getElementById("new-task-input")?.focus()
          break
        case "ArrowLeft":
          if (selectedTask) {
            e.preventDefault()
            moveTask(selectedTask, -1)
          }
          break
        case "ArrowRight":
          if (selectedTask) {
            e.preventDefault()
            moveTask(selectedTask, 1)
          }
          break
        case "Delete":
          if (selectedTask) {
            e.preventDefault()
            deleteTask(selectedTask)
          }
          break
        case "Enter":
          if (selectedTask) {
            e.preventDefault()
            startEditing(selectedTask)
          }
          break
        case "Escape":
          setSelectedTask(null)
          setEditingTask(null)
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedTask])

  const addTask = () => {
    if (!newTaskText.trim()) return

    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText.trim(),
      created: new Date().toISOString(),
    }

    setTasks((prev) => ({
      ...prev,
      todo: [...prev.todo, newTask],
    }))
    setNewTaskText("")
  }

  const deleteTask = (taskId: string) => {
    setTasks((prev) => ({
      todo: prev.todo.filter((t) => t.id !== taskId),
      doing: prev.doing.filter((t) => t.id !== taskId),
      done: prev.done.filter((t) => t.id !== taskId),
    }))
    if (selectedTask === taskId) {
      setSelectedTask(null)
    }
  }

  const findTaskColumn = (taskId: string): keyof TaskState | null => {
    for (const column of ["todo", "doing", "done"] as const) {
      if (tasks[column].some((t) => t.id === taskId)) {
        return column
      }
    }
    return null
  }

  const moveTask = (taskId: string, direction: number) => {
    const currentColumn = findTaskColumn(taskId)
    if (!currentColumn) return

    const columns = ["todo", "doing", "done"] as const
    const currentIndex = columns.indexOf(currentColumn)
    const newIndex = currentIndex + direction

    if (newIndex < 0 || newIndex >= columns.length) return

    const task = tasks[currentColumn].find((t) => t.id === taskId)
    if (!task) return

    setTasks((prev) => ({
      ...prev,
      [currentColumn]: prev[currentColumn].filter((t) => t.id !== taskId),
      [columns[newIndex]]: [...prev[columns[newIndex]], task],
    }))
  }

  const startEditing = (taskId: string) => {
    const column = findTaskColumn(taskId)
    if (!column) return

    const task = tasks[column].find((t) => t.id === taskId)
    if (!task) return

    setEditingTask(taskId)
    setEditText(task.text)
  }

  const saveEdit = () => {
    if (!editingTask || !editText.trim()) return

    const column = findTaskColumn(editingTask)
    if (!column) return

    setTasks((prev) => ({
      ...prev,
      [column]: prev[column].map((t) => (t.id === editingTask ? { ...t, text: editText.trim() } : t)),
    }))
    setEditingTask(null)
    setEditText("")
  }

  const TaskCard = ({ task, columnId }: { task: Task; columnId: string }) => {
    const isSelected = selectedTask === task.id
    const isEditing = editingTask === task.id

    return (
      <Card
        className={cn(
          "cursor-pointer transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary",
          isSelected && "ring-2 ring-primary",
        )}
        tabIndex={0}
        onClick={() => setSelectedTask(task.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            startEditing(task.id)
          }
        }}
      >
        <CardContent className="p-3">
          <div className="flex items-start justify-between gap-2">
            <GripVertical className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />

            {isEditing ? (
              <div className="flex-1 space-y-2">
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveEdit()
                    } else if (e.key === "Escape") {
                      setEditingTask(null)
                      setEditText("")
                    }
                  }}
                  autoFocus
                  className="text-sm"
                />
                <div className="flex gap-2">
                  <Button size="sm" onClick={saveEdit}>
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setEditingTask(null)
                      setEditText("")
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm flex-1">{task.text}</p>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation()
                      startEditing(task.id)
                    }}
                    className="h-6 w-6 p-0"
                  >
                    <Edit2 className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteTask(task.id)
                    }}
                    className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Task Board</h1>

        <div className="flex gap-2">
          <Input
            id="new-task-input"
            placeholder="Add a new task..."
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask()
              }
            }}
            className="flex-1"
          />
          <Button onClick={addTask}>
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>

        <div className="text-sm text-muted-foreground space-y-1">
          <p>
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">N</kbd> - Focus new task input
          </p>
          <p>
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">←/→</kbd> - Move selected task between columns
          </p>
          <p>
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Enter</kbd> - Edit selected task
          </p>
          <p>
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Delete</kbd> - Delete selected task
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {COLUMNS.map((column) => (
          <Card key={column.id} className={cn("min-h-[400px]", column.color)}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {column.title}
                <Badge variant="secondary">{tasks[column.id].length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 group">
              {tasks[column.id].map((task) => (
                <TaskCard key={task.id} task={task} columnId={column.id} />
              ))}
              {tasks[column.id].length === 0 && <p className="text-muted-foreground text-center py-8">No tasks yet</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
