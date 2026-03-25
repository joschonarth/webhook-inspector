import { CopyIcon } from 'lucide-react'
import { Suspense } from 'react'
import { useWebhookSelection } from '../contexts/webhook-selection'
import { GenerateHandlerButton } from './generate-handler-button'
import { IconButton } from './ui/icon-button'
import { WebhooksList } from './webhooks-list'
import { WebhooksListSkeleton } from './webhooks-list-skeleton'

export function Sidebar() {
  const { hasAnyWebhookChecked, isGenerating, handleGenerateHandler } =
    useWebhookSelection()

  return (
    <div className="flex h-screen flex-col">
      <div className="flex items-center justify-between border-b border-zinc-700 px-4 py-5">
        <div className="flex items-baseline">
          <span className="font-semibold text-zinc-100">webhook</span>
          <span className="font-normal text-zinc-400">.inspect</span>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-zinc-700 bg-zinc-800 px-4 py-2.5">
        <div className="flex-1 min-w-0 flex items-center gap-1 text-xs font-mono text-zinc-300">
          <span className="truncate">http://localhost:3333/api/capture</span>
        </div>
        <IconButton icon={<CopyIcon className="size-4" />} />
      </div>

      <Suspense fallback={<WebhooksListSkeleton />}>
        <WebhooksList />
      </Suspense>

      <div className="border-t border-zinc-700 p-2">
        <GenerateHandlerButton
          disabled={!hasAnyWebhookChecked}
          isGenerating={isGenerating}
          onClick={handleGenerateHandler}
        />
      </div>
    </div>
  )
}
