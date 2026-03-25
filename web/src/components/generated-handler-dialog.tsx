import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import { CodeBlock } from './ui/code-block'
import { IconButton } from './ui/icon-button'

interface GeneratedHandlerDialogProps {
  code: string
  onClose: () => void
}

export function GeneratedHandlerDialog({
  code,
  onClose,
}: GeneratedHandlerDialogProps) {
  return (
    <Dialog.Root defaultOpen onOpenChange={(open) => !open && onClose()}>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed z-20" />

      <Dialog.Content className="flex items-center justify-center fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 z-40">
        <div className="bg-zinc-900 w-[600px] rounded-lg border border-zinc-800 max-h-[620px] flex flex-col">
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
            <span className="text-sm font-medium text-zinc-400">
              Generated handler
            </span>
            <Dialog.Close asChild>
              <IconButton
                icon={<XIcon className="size-4" />}
                className="cursor-pointer"
              />
            </Dialog.Close>
          </div>

          <div className="overflow-y-auto p-4">
            <CodeBlock language="typescript" code={code} />
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
