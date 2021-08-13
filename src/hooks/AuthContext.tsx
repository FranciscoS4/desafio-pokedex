import { randomBytes } from 'crypto';
import React, { createContext, useCallback, useContext, useState } from 'react';
import AppError from '../errors/AppError';
import authConfig from '../config/auth';
import { sign } from 'jsonwebtoken'

interface AuthState {
  token: any;
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

  const signIn = useCallback(async({email, password}) => {

    const request = window.indexedDB.open('User');

    request.onsuccess = function(event){
      const db = request.result;

      const user = db.transaction(['user']).objectStore('user');

      const userEmail = user.get(email);
  
  
      if (!userEmail) {
        throw new AppError('Incorrect email/password combination.', 401)
      }
  
      const userPassword = user.get(password);
  
      if (!userPassword) {
        throw new AppError('Incorrect email/password combination.', 401)
      }
  
      const { secret, expiresIn } = authConfig.jwt;
  
      const userId = "1";
  
      const token = sign({}, secret, {
        subject: userId,
        expiresIn,
      });


      sessionStorage.setItem('@Pokedex:token', String(token));
      sessionStorage.setItem('@Pokedex:user', String(userId));

      setData({ token, user });
      
    }

    request.onerror = function(event) {
      console.log("Request error");
    };
    
  }, []);

  const signOut = useCallback(() => {
    sessionStorage.removeItem('@Pokedex:token');
    sessionStorage.removeItem('@Pokedex:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{user: data.user, signIn, signOut }}>
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