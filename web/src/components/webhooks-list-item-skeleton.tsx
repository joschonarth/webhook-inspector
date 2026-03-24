import { Skeleton } from './ui/skeleton'

export function WebhooksListItemSkeleton() {
  return (
    <div className="rounded-lg">
      <div className="flex items-start gap-3 px-4 py-2.5">
        <Skeleton className="mt-0.5 size-4 shrink-0" />

        <div className="flex flex-1 min-w-0 items-start gap-3">
          <Skeleton size="sm" className="w-12 shrink-0 mt-0.5" />

          <div className="flex-1 min-w-0 space-y-2">
            <Skeleton size="sm" className="w-3/4" />
            <Skeleton size="sm" className="w-1/3 bg-zinc-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
