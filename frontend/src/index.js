import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import GlobalStyles from "./components/GlobalStyles";
import {GlobalStatesProvider} from "./GlobalStates";

ReactDOM.render(

    <GlobalStatesProvider>
      <GlobalStyles />
      <App />
    </GlobalStatesProvider>
,
  document.getElementById('root')
);
