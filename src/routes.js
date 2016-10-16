import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import GalleryPage from './components/GalleryPage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GalleryPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
