import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import { ActiveProvider } from './context/Active';
import { StoregProvider } from './context/storeg';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
      <BrowserRouter>
            <StoregProvider>
                  <ActiveProvider>
                        <Root />
                  </ActiveProvider>
            </StoregProvider>
      </BrowserRouter>

);
