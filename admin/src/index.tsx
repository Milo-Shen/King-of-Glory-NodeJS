// Import React Framework
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Customized Components
import App from './App';

// Import CSS
import './Global.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
