"use client";
import { TaskbounceFooter } from "@/components/taskbounce/taskbounce-footer";

export default function TaskbounceLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 animate-fadeIn">{children}</main>
      <TaskbounceFooter />
    </div>
  );
}
