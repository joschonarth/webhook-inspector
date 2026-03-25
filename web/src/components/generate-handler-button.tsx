import { Loader2, Wand2 } from 'lucide-react'

interface GenerateHandlerButtonProps {
  disabled: boolean
  isGenerating: boolean
  onClick: () => void
}

export function GenerateHandlerButton({
  disabled,
  isGenerating,
  onClick,
}: GenerateHandlerButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || isGenerating}
      className="bg-indigo-400 text-white w-full rounded-lg flex items-center justify-center gap-3 font-medium text-sm py-2 disabled:opacity-50 cursor-pointer"
      onClick={onClick}
    >
      {isGenerating ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <Wand2 className="size-4" />
      )}
      {isGenerating ? 'Generating...' : 'Generate handler'}
    </button>
  )
}
