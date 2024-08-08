import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RouterApp from './RouterApp'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryCliente = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliente}>
      <RouterApp />
    </QueryClientProvider>
  </React.StrictMode>,
)
