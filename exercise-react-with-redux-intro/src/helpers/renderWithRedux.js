import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';

import reducer from '../helpers';

export default function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
) {
  return {
    ...render(
      <Provider store={ store }>
        {component}
      </Provider>,
    ),
    store,
  };
}
