import serialize from 'serialize-javascript';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';

import Html from '../../shared/components/html';

export default function generateHtml(store, res) {
  // Get current state from the single Redux store.
  const state = store.getState();
  const initialState = serialize(state);

  const bodyHtml = renderToString(
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
  );

  const fullHtml = renderToString(
    <div>
      <Html
        body={bodyHtml}
        props={initialState}
      />
    </div>
    );

  return fullHtml;
}
