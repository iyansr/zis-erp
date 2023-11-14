import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import { router } from './modules/router/mainRouter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </QueryClientProvider>
  );
}
