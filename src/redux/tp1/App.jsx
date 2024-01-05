import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Composant from './composant';

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <div style={styles.appContainer}>
        <Composant />
      </div>
    </Provider>
  );
};

export default App;
