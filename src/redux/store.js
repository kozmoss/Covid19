import {configureStore} from '@reduxjs/toolkit'
import covidSlice from './covidSlice/covidSlice'
import regionSlice from './covidSlice/regionSlice'

const store = configureStore({
    reducer: {
      covid: covidSlice,
      region: regionSlice,
    },
  });
  
  export default store;
