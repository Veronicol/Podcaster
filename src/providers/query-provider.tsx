import type { FC, PropsWithChildren } from 'react';

import {
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
      refetchOnWindowFocus: false
    }
  },
  queryCache: new QueryCache({
    onError: (_, query) => {
      if (query.meta?.errorMessage) {
        console.error(query.meta.errorMessage);
      }
    }
  })
});

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
