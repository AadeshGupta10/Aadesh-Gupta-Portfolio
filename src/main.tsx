import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/Theme_provider.tsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import routing from './routes/Routing.tsx'
import store from './utils/Store.ts'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const routes = createBrowserRouter(
  createRoutesFromElements(
    routing
  )
)

const reactQuery = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={reactQuery}>
      <ThemeProvider defaultTheme='system'>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>
)