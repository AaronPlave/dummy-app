import { combineReducers } from 'redux';
import galleryImages from './galleryImagesReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  galleryImages,
  routing: routerReducer
});

export default rootReducer;
