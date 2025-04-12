import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)