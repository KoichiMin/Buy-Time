import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
    <>
  <GlobalStyles />
    <App />
    </>
,
  document.getElementById('root')
);
