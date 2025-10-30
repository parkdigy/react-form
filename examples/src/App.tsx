import './init';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { DefaultLayout } from './layout';
import { PFormTextEditor } from '../../src';

import './sass/index.scss';

PFormTextEditor.apiKey = '[your-api-key]';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
