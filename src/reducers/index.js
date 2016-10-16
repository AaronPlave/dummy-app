import { combineReducers } from 'redux';
import galleryImages from './galleryImagesReducer';
// import app from './appReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  // app,
  galleryImages,
  routing: routerReducer
});

export default rootReducer;
