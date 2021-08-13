import { randomBytes } from 'crypto';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { object } from 'yup/lib/locale';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Pokedex:token');
    const user = localStorage.getItem('@Pokedex:user');

    if ( token && user ) {
      return { token, user: JSON.parse(user)};
    }

    return {} as AuthState
  });

  const signIn = useCallback(async({email}) => {

    const ramdom = await randomBytes(10);
    
    const token = String(ramdom);

    const user1 = JSON.stringify({user:{nome: "Francisco", email: email}})
    
    const user2 = JSON.parse(user1);

    localStorage.setItem('@Pokedex:token', String(token));

    localStorage.setItem('@Pokedex:user', JSON.stringify(user2))

  }, []);

  const signOut = useCallback(() => {
    localStorage.remove('@Pokedex:token');
    localStorage.remove('@POkedex:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context
}

export { AuthProvider, useAuth}