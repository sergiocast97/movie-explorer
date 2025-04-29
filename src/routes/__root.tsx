import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
// import TanstackQueryLayout from '../integrations/tanstack-query/layout'
import type { QueryClient } from '@tanstack/react-query'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />

      {/*
       * TanStack Dev Tools
       * <TanStackRouterDevtools />
       * <TanstackQueryLayout />
       */}
    </>
  ),
})
