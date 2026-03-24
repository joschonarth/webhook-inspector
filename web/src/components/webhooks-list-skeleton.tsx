import { WebhooksListItemSkeleton } from './webhooks-list-item-skeleton'

export function WebhooksListSkeleton() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-1 p-2">
        {Array.from({ length: 8 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton items never reorder
          <WebhooksListItemSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
