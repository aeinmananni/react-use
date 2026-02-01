import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="w-full flex flex-col h-screen overflow-hidden border-4 border-red-500 p-4">
      <App />
    </div>
  </StrictMode>
);
