import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { ProviderProducts } from './contexts/contextProducts'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
        <ProviderProducts>
          <App />
        </ProviderProducts>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
