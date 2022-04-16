
/////////////////////////////////////////////////////////////////////
// React <=17

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

/////////////////////////////////////////////////////////////////////
// React 18+
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// const divRoot = document.getElementById('root');
// const root = createRoot(divRoot)

// root.render( <App/>);

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// React 18        
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
