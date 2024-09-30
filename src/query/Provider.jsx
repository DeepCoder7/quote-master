"use client"

import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const QueryProvider = ({
    children
}) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                retry: 0
            }
        }
    })

    return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default QueryProvider