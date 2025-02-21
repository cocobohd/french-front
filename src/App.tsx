import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Loader } from './components/loader.components'
import { Suspense } from 'react'

import { Bounce, ToastContainer } from 'react-toastify'

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loader />}>
                <RouterProvider router={appRouter} />
            </Suspense>
            <ToastContainer theme="dark" transition={Bounce} />
        </QueryClientProvider>
    )
}

export default App
