import * as React from 'react';
import { render } from 'react-dom';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from './overmind';

import { Hello } from './App';

const overmind = createOvermind(config);

render((
  <Provider value={overmind}>
    <Hello />
  </Provider>
), document.getElementById("root"));
