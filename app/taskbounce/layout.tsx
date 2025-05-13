import type React from "react"
import type { Metadata } from "next"
import TaskbounceLayoutClient from "./TaskbounceLayoutClient"

export const metadata: Metadata = {
  title: "Taskbounce - Outsourced Productivity, Powered by Global Talent",
  description: "Affordable, high-quality virtual assistance for startups, creatives, and SMEs.",
}

export default function TaskbounceLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <TaskbounceLayoutClient children={children} />
}
