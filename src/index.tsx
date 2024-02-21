import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { MainStyles } from './style/MainStyles/MainStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme/theme';
import { Provider } from 'react-redux';
import { persistor, store } from './services/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
        <MainStyles />
      </ThemeProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
