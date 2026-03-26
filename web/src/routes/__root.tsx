import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Group, Panel, Separator } from 'react-resizable-panels'
import { GeneratingHandlerOverlay } from '../components/generating-handler-overlay'
import { Sidebar } from '../components/sidebar'
import {
  useWebhookSelection,
  WebhookSelectionProvider,
} from '../contexts/webhook-selection'

const queryClient = new QueryClient()

function Layout() {
  const { isGenerating } = useWebhookSelection()

  return (
    <div className="h-screen bg-zinc-900">
      {isGenerating && <GeneratingHandlerOverlay />}

      <Group orientation="horizontal">
        <Panel defaultSize="20%" minSize="15%" maxSize="40%">
          <Sidebar />
        </Panel>

        <Separator className="w-px bg-zinc-700 hover:bg-zinc-600 transition-colors duration-150" />

        <Panel defaultSize="80%" minSize="60%">
          <Outlet />
        </Panel>
      </Group>
    </div>
  )
}

const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <WebhookSelectionProvider>
      <Layout />
    </WebhookSelectionProvider>
  </QueryClientProvider>
)

export const Route = createRootRoute({ component: RootLayout })
