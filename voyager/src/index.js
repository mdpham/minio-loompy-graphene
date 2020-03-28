import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/graphql-voyager/dist/voyager.css'
import * as serviceWorker from './serviceWorker';

import {Voyager} from 'graphql-voyager';
import fetch from 'isomorphic-fetch';

function introspectionProvider(query) {
  return fetch(
    `/graphql`,
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({query: query}),
    }).then(
      response => response.json()
    ).catch(
      err => console.log(err)
    )
}

ReactDOM.render(
  <React.StrictMode>
    <Voyager
      introspection={introspectionProvider}
      workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'}  
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
