import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App";

console.log('[Quiqr] : Renderer execution started');

const app = (
    <App />
);

createRoot(document.getElementById('app')).render(app);
