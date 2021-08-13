import React from 'react';
import GlobalStyles from './styles/global';
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './hooks/AuthContext';
 
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>

        <GlobalStyles />
      </BrowserRouter>
    </>
  )
}

export default App;
