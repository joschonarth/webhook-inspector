import { Skeleton } from './ui/skeleton'

export function WebhookDetailHeaderSkeleton() {
  return (
    <div className="space-y-4 border-b border-zinc-700 p-6">
      <div className="flex items-center gap-3">
        <Skeleton className="h-6 w-16 rounded-md" />
        <Skeleton className="h-6 w-48" />
      </div>

      <div className="flex items-center gap-2">
        <Skeleton size="sm" className="w-36" />
        <span className="w-px h-4 bg-zinc-700" />
        <Skeleton size="sm" className="w-44" />
      </div>
    </div>
  )
}
