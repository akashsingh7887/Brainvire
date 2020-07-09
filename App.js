// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import RootFile from './src/navigators/Stack';
import { store } from './src/lib/redux/store/store';
export default function App() {
  return (
    <Provider store={store}>
        <RootFile />
    </Provider>
  );
};