import { Loader2, Wand2 } from 'lucide-react'

export function GeneratingHandlerOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-zinc-700 bg-zinc-900 p-8">
        <div className="relative flex items-center justify-center">
          <Loader2 className="size-12 animate-spin text-indigo-400" />
          <Wand2 className="absolute size-4 text-indigo-400" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-medium text-zinc-200">
            Generating handler
          </span>
          <span className="text-xs text-zinc-500">
            This may take a few seconds...
          </span>
        </div>
      </div>
    </div>
  )
}
