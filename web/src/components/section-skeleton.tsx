import { Skeleton } from './ui/skeleton'

interface SectionSkeletonProps {
  rows?: number
}

export function SectionSkeleton({ rows = 4 }: SectionSkeletonProps) {
  return (
    <div className="space-y-4">
      <Skeleton className="h-5 w-36" />

      <div className="overflow-hidden rounded-lg border border-zinc-700">
        {Array.from({ length: rows }, (_, i) => `row-${i + 1}`).map((key) => (
          <div
            key={key}
            className="flex border-b border-zinc-700 last:border-0"
          >
            <div className="w-1/3 bg-zinc-800/50 border-r border-zinc-700 p-3">
              <Skeleton size="sm" className="w-24" />
            </div>
            <div className="flex-1 p-3">
              <Skeleton size="sm" className="w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
