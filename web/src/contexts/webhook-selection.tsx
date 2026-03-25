import { createContext, useContext, useState } from 'react'
import { GeneratedHandlerDialog } from '../components/generated-handler-dialog'

interface WebhookSelectionContextValue {
  checkedWebhooksIds: string[]
  isGenerating: boolean
  hasAnyWebhookChecked: boolean
  handleCheckWebhook: (id: string) => void
  handleGenerateHandler: () => Promise<void>
}

const WebhookSelectionContext =
  createContext<WebhookSelectionContextValue | null>(null)

export function WebhookSelectionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [checkedWebhooksIds, setCheckedWebhooksIds] = useState<string[]>([])
  const [generatedHandlerCode, setGeneratedHandlerCode] = useState<
    string | null
  >(null)
  const [isGenerating, setIsGenerating] = useState(false)

  function handleCheckWebhook(checkedWebhookId: string) {
    setCheckedWebhooksIds((state) => {
      if (state.includes(checkedWebhookId)) {
        return state.filter((id) => id !== checkedWebhookId)
      }
      return [...state, checkedWebhookId]
    })
  }

  async function handleGenerateHandler() {
    setIsGenerating(true)

    try {
      const response = await fetch('http://localhost:3333/api/generate', {
        method: 'POST',
        body: JSON.stringify({ webhookIds: checkedWebhooksIds }),
        headers: { 'Content-Type': 'application/json' },
      })

      type GenerateResponse = { code: string }
      const data: GenerateResponse = await response.json()

      setGeneratedHandlerCode(data.code)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <WebhookSelectionContext.Provider
      value={{
        checkedWebhooksIds,
        isGenerating,
        hasAnyWebhookChecked: checkedWebhooksIds.length > 0,
        handleCheckWebhook,
        handleGenerateHandler,
      }}
    >
      {children}

      {!!generatedHandlerCode && (
        <GeneratedHandlerDialog
          code={generatedHandlerCode}
          onClose={() => setGeneratedHandlerCode(null)}
        />
      )}
    </WebhookSelectionContext.Provider>
  )
}

export function useWebhookSelection() {
  const context = useContext(WebhookSelectionContext)

  if (!context) {
    throw new Error(
      'useWebhookSelection must be used within a WebhookSelectionProvider',
    )
  }

  return context
}
