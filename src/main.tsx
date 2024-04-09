import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { QueryProvider } from './lib/providers/query-provider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
      <ReactQueryDevtools position='bottom'/>
    </QueryProvider>
  </React.StrictMode>,
);
