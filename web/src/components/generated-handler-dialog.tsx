import * as Dialog from '@radix-ui/react-dialog'
import { CodeBlock } from './ui/code-block'

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
        <div className="bg-zinc-900 w-[600px] p-4 rounded-lg border border-zinc-800 max-h-[620px] overflow-y-auto">
          <CodeBlock language="typescript" code={code} />
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
