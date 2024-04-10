import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';

import { QueryProvider, AppRouterProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <AppRouterProvider />
      <ReactQueryDevtools position="bottom" />
    </QueryProvider>
  </React.StrictMode>
);
