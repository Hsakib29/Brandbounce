import Link from "next/link"
import { AnimatedLogo } from "@/components/ui/animated-logo"

export function TaskbounceFooter() {
  return (
    <footer className="w-full py-6 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <AnimatedLogo width={120} height={35} />
          </div>
          <p className="text-sm text-gray-400">© 2025 Taskbounce. All rights reserved. A BrandBounce Company</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              BrandBounce
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
