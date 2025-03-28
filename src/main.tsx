import React from 'react';
import ReactDOM from 'react-dom/client';

import { ReactGPT } from './ReactGPT';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ReactGPT />
    </React.StrictMode>,
  );
}
