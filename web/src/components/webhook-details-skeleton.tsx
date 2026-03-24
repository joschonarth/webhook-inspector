import { SectionSkeleton } from './section-skeleton'
import { Skeleton } from './ui/skeleton'
import { WebhookDetailHeaderSkeleton } from './webhook-detail-header-skeleton'

export function WebhookDetailsSkeleton() {
  return (
    <div className="flex h-full flex-col">
      <WebhookDetailHeaderSkeleton />

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-6 p-6">
          <SectionSkeleton rows={4} />
          <SectionSkeleton rows={6} />

          <div className="space-y-4">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
