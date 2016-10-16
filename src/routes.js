import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppPage from './containers/AppPage';
import GalleryPage from './containers/GalleryPage'; 
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={AppPage}>
    <IndexRoute component={GalleryPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
